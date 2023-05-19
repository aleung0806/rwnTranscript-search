const fs = require('fs')
const path = require('path')

const extractIdFromTitle = (title) => {
  const regex = /ep(?:isode)?\s?(\d+)/i
  const match = title.match(regex)
  if (match && match[1]) {
    return match[1]
  }
  else {
    return ' '
  }
}

const parseDate = (date) => {
  const d = new Date(date)
  const formatted = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }).format(d)
  return formatted
}

const cleanTitle = (title) => {
  const s = title.split('\u2014')
  if (s.length === 2){
    return s[1]
  }
  return ''
}

const parseTranscripts = () => {
  const files = fs.readdirSync('data/whisper-outputs')
  const transcripts = {}
  files.forEach(file => {
    const id = path.parse(file).name
    const output = JSON.parse(fs.readFileSync(path.join('data/whisper-outputs', file), 'utf8'))
    const segments = output.segments.map(s => {
      return {
        id: s.id,
        seek: s.seek,
        start: s.start,
        text: s.text
      }
    })
    transcripts[id] = {
      text: output.text,
      segments: segments
    }
  })

  return transcripts
}

const parseEpisodes = () => {
  const feed = JSON.parse(fs.readFileSync('data/rss.json', 'utf8'))
  return feed.rss.channel.item.map((e) => {

    const id = extractIdFromTitle(e.title)
    const date = parseDate(e.pubDate)
    const title = cleanTitle(e.title)

    return {
      id: id,
      title: title,
      summary: e['itunes:summary'],
      link: e.link,
      date: date
    }
  })
}

const write = (episodes, transcripts) => {
  const combined = {
    episodes: episodes,
    transcripts: transcripts
  }

  fs.writeFileSync('db.json', JSON.stringify(combined, null, 2))
}




const episodes = parseEpisodes()
const transcripts = parseTranscripts()
fs.writeFileSync('test.json', JSON.stringify(transcripts, null, 2))

write(episodes, transcripts)
