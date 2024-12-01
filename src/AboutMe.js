export const AboutMe = () => {
    return (
    <div id="right-half" style={{borderLeft: 'solid', width: "25%"}}>
        <div style={{height: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={"../images/myself.JPG"} style={{width: "75%", borderRadius: "15%"}}/>
        </div>
        <div style={{borderTop: 'solid', borderBottom: 'solid', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{borderRight: 'solid', flexGrow: 1, padding: '1em'}}>
            Floria Tsui
          </div>
          <div style={{flexGrow: 1, padding: '1em'}}>
            <a href="https://github.com/floriatsui">github</a> • <a href="mailto:floriatsui2019@gmail.com">email</a>
          </div>
        </div>
        <div style={{overflowY: 'scroll', height: '20em'}}>
        <p style={{padding: '1em', textAlign: 'left'}}>
          Hi! Welcome to my corner of the internet. 
          I currently work as a software engineer here in NYC at Goldman Sachs, doing full stack development. 
          <br/><br/>
          You can usually find me (re)reading books (usually fiction), starting but not finishing art projects (dabbling with ink right now), watching too much YouTube (currently being recommended mechanical keyboard content), and attempting to do crosswords (and making them too!). 
        </p>
        </div>
    </div>
    )
}