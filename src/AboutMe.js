import myImage from './myself.JPG'

export const AboutMe = () => {
  return (
    <div id="right-half" style={{ borderLeft: 'solid', width: "30%" }}>
      <div style={{ height: "50%", alignItems: 'center', justifyContent: 'center' }}>
        <img alt={"self-picture"} src={myImage} style={{ height: "80%", borderRadius: "15%", padding: "1em 0" }} />
        <div>Pronouns: she/they </div>
      </div>
      <div style={{ borderTop: 'solid', borderBottom: 'solid', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ borderRight: 'solid', flexGrow: 1, padding: '1em' }}>
          <a href="https://github.com/floriatsui">github</a>
        </div>
        <div style={{ borderRight: 'solid', flexGrow: 1, padding: '1em' }}>
          <a href="mailto:floriatsui2019@gmail.com">email</a>
        </div>
        <div style={{ flexGrow: 1, padding: '1em' }}>
          <a href="https://www.linkedin.com/in/floriatsui/">linkedin</a>
        </div>
      </div>
      <div style={{ height: '20em', padding: '2em' }}>
        <p style={{ textAlign: 'left', margin: '0' }}>
          <p style={{ fontSize: '20px', margin: '0' }}>Hey! How's it going? Thanks for stopping by.</p>
          <br />
          Let's connect! I'm usually (re)reading books (usually fiction), starting but not finishing art projects (dabbling with ink right now), watching too much YouTube (currently being recommended mechanical keyboard content), and attempting to do crosswords (and making them too!).
        </p>
      </div>
    </div>
  )
}