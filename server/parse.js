const fs = require('fs')
const path = require('path')

const idFromTitle = (title) => {
  const regex = /ep(?:isode)?\s?(\d+)/i
  const match = title.match(regex)
  if (match && match[1]) {
    return match[1]
  }
  else {
    return ' '
  }
}

const formatDate = (date) => {
  const d = new Date(date)
  const formatted = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }).format(d)
  return formatted
}

const formatTitle = (title) => {
  const s = title.split('\u2014')
  if (s.length === 2){
    return s[1]
  }
  return ''
}

//time is in 10ms
const formatTime = (time) => {
  let seconds = Math.round(time)

  let hours = Math.floor(seconds / (60 * 60))
  seconds = seconds - hours * (60 * 60)
  
  let minutes = Math.floor(seconds / (60))
  seconds = seconds - minutes * (60)

  minutes = minutes.toString().padStart(2, '0')
  seconds = seconds.toString().padStart(2, '0')

  return `[${hours}:${minutes}:${seconds}]`
}

const formatUrl = (url) => {
  // const regex = /\?name=(.*)/;
  // const match = url.match(regex);

  // const address = 'http://exiledonline.com/wnradio/'
  // let formatted = url

  // if (match && match[1]) {
  //   formatted = address + match[1]
  // }
  
  // console.log(formatted)

  return url
}

const parseTranscripts = () => {
  const files = fs.readdirSync('data/whisper-outputs')
  const transcripts = []
  files.forEach(file => {
    const id = path.parse(file).name
    const output = JSON.parse(fs.readFileSync(path.join('data/whisper-outputs', file), 'utf8'))
    const segments = output.segments.map(s => {
    const start = formatTime(s.start)
      
      return {
        id: s.id,
        start: start,
        seconds: Math.round(s.start),
        text: s.text
      }
    })
    transcripts.push({
      id: id,
      text: output.text,
      segments: segments
    })
  })

  return transcripts
}

const parseEpisodes = () => {
  const feed = JSON.parse(fs.readFileSync('data/rss.json', 'utf8'))
  return feed.rss.channel.item.map((e) => {

    const id = idFromTitle(e.title)
    const date = formatDate(e.pubDate)
    const title = formatTitle(e.title)
    const url = formatUrl(e.link)

    return {
      id: id,
      title: title,
      summary: e['itunes:summary'],
      url: url,
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
