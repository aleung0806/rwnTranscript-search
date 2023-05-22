import './styles.scss'

export const About = () => {
  return (
    <div className="about">
      <h1>About the website</h1>
      <p>This is a fan-made website of Radio War Nerd transcripts. The transcripts were AI-generated using the Whisper from OpenAI. </p>
      <h1>Get the data</h1>
      <p>The transcripts and episode data are available to download below. </p>
      <a>episodes.json</a>
      <a>transcripts.json</a>
      <a>whisper_outputs.zip</a>
      <h1>About me</h1>
      <p>This is a side project. Please ask any questions or report any issues <a>here</a>. If you want to donate, donate <a>here</a></p>
    </div>
  )
}

