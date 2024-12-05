import React, { useState } from "react";

export const Experience = () => {
    const [taVis, setTaVis] = useState(false)

    return (
        <div id='all' style={{height: '100%', width: 'auto'}}>
        <div id="current-work" style={{borderBottom: 'solid', height: '40%', display: 'flex', justifyContent: 'space-between', padding: '2em'}}>
            <div style={{height: 'auto', width: '50%', border: 'solid'}}>
                  <div id="goldman-header" style={{display: 'flex', borderBottom: 'solid'}}>
                    <div style={{borderRight: 'solid', padding: '0.5em'}}>
                        Role
                    </div>
                    <div style={{padding: '0.5em'}}>
                      Software Engineer @ Goldman Sachs
                    </div>
                  </div>
                  <div style={{borderBottom: 'solid', padding: '0.5em', textAlign: 'left'}}>
                    Global Investment Research Technology
                  </div>
                  <p style={{padding: '0.25em', textAlign: 'left'}}>
                    I am currently working as a full stack engineer, building applications to help business analysts maintain and grow client relationships. 
                    Tech stack used: <br/>
                    <li>React and Javascript</li>
                    <li>Jest, React Testing Library, and Cypress</li>
                    <li>Java</li>
                    <li>Elasticsearch</li>
                  </p>
              </div>
            <div style={{paddingLeft: '0.5em', height: 'auto', textAlign: 'right', width: '50%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                <div>
                  I graduated from Brown, as part of Class of 2023, where I concentrated in Computer Science, with a focus on computer systems, specifically operating systems.
                  <br/><br/>
                  Here are more links to more information about me: <br/>
                  <a href="https://www.linkedin.com/in/floriatsui/">LinkedIn</a>
                </div>
                <div style={{border: 'solid', padding: '0.5em'}}>
                  Past Internships:
                  <br/>
                  Software Engineering Intern @ Goldman Sachs
                  <br/>
                  Summer 2022 
                  <br/>
                  Software Engineering Intern @ Sixth Street
                  <br/>
                  Summer 2021
                </div>
            </div>
        </div>
        <div id="past work"style={{flexGrow: 1, height: '50%', display: 'flex', justifyContent: 'space-between', padding: '2em'}}>
            <div style={{width: '50%', textAlign: 'left', padding: '0.5em'}}>
              I was deeply involved with Brown CS's TA program, starting from my first spring semester (2020) until my last spring semester (2023). 
              <br/><br/>
              <div onClick={() => setTaVis(!taVis)} style={{cursor: 'pointer'}}>
                Past (H)TA Roles:
              </div>
              <div style={{visibility: taVis ? 'visible' : 'hidden'}}>
                <li>Computing Foundations: Data - Spring 2020</li>
                <li>Introduction to Computer Systems: Teaching Assistant - Fall 2020, Head Teaching Assistant - Fall 2021</li>
                <li>Fundamentals of Computer Systems: Teaching Assistant - Spring 2021</li>
                <li>Software Security and Eploitation - Fall 2022</li>
              </div>
            </div>
            <div id="TAing" style={{border: 'solid', height: '80%', width: '50%', flexGrow: 2}}>
                  <div id="TA-header" style={{display: 'flex', borderBottom: 'solid'}}>
                    <div style={{borderRight: 'solid', padding: '0.5em'}}>
                        Role
                    </div>
                    <div style={{padding: '0.5em'}}>
                      Head Teaching Assistant @ Brown CS
                    </div> 
                  </div>
                  <div style={{borderBottom: 'solid', textAlign: 'left', padding: '0.5em'}}>
                      Operating Systems, Spring 2022 and Spring 2023
                  </div>
                  <p style={{padding: '0.25em', textAlign: 'left'}}>
                    I helped manage every part of the course, from technical to administrative. This included any and all work related to the course -- managing the course staff
                    This also involved deep work with a small, uni based operating system that was used as a course assignment -- the work here involved constantly working with 
                    students one on one in a mentor capacity, increasing the amount of documentation availabe 
                  </p>
            </div>
        </div>
      </div>
    )
}