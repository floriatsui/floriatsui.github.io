import myImage from './myself.JPG'

export const AboutMe = () => {
  return (
    <div id="right-half" style={{ borderLeft: 'solid', width: "30%" }}>
      <div style={{ height: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img alt={"self-picture"} src={myImage} style={{ height: "80%", borderRadius: "15%" }} />
      </div>
      <div style={{ borderTop: 'solid', borderBottom: 'solid', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ borderRight: 'solid', flexGrow: 1, padding: '1em' }}>
          <a href="https://github.com/floriatsui">github</a>
        </div>
        <div style={{ borderRight: 'solid', flexGrow: 1, padding: '1em' }}>
          <a href="mailto:floriatsui2019@gmail.com">email</a>
        </div>
        <div style={{ flexGrow: 1, padding: '1em' }}>
          <a href="mailto:floriatsui2019@gmail.com">linkedin</a>
        </div>
      </div>
      <div style={{ overflowY: 'scroll', height: '20em' }}>
        <p style={{ textAlign: 'left', padding: '0 0.5em', margin: '0' }}>
          <p style={{ fontSize: '20px' }}>Hey! How's it going? Welcome to my corner of the internet, thanks for stopping by.</p>
          Let's connect! I'm usually (re)reading books (usually fiction), starting but not finishing art projects (dabbling with ink right now), watching too much YouTube (currently being recommended mechanical keyboard content), and attempting to do crosswords (and making them too!).
        </p>
      </div>
    </div>
  )
}