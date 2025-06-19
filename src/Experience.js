import React, { useState } from "react";

export const Experience = () => {
  const [taVis, setTaVis] = useState(false)

  return (
    <div id='all' style={{ height: '100%', width: 'auto' }}>
      <div id="current-work" style={{ borderBottom: 'solid', height: '40%', display: 'flex', justifyContent: 'space-between', padding: '2em' }}>
        <div style={{ height: 'auto', width: '50%', border: 'solid', overflow: 'scroll' }}>
          <div id="goldman-header" style={{ display: 'flex', borderBottom: 'solid' }}>
            <div style={{ borderRight: 'solid', padding: '0.5em' }}>
              Role
            </div>
            <div style={{ padding: '0.5em' }}>
              Software Engineer @ Goldman Sachs
            </div>
          </div>
          <div style={{ borderBottom: 'solid', padding: '0.5em', textAlign: 'left' }}>
            Global Investment Research Technology
          </div>
          <p style={{ padding: '0.25em', textAlign: 'left', margin: '0' }}>
            I am currently working as a full stack engineer, building applications to help business analysts maintain and grow client relationships, primarily doing frontend development with React and Javascript.
          </p>
        </div>
        <div style={{ paddingLeft: '0.5em', height: '100%', textAlign: 'right', width: '50%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
          <div style={{ height: '50%', overflow: 'scroll' }}>
            I graduated from Brown, as part of Class of 2023, where I concentrated in Computer Science, with a focus on computer systems, specifically operating systems.
            <br /><br />
            Here are more links to more information about me: <br />
            <a href="https://www.linkedin.com/in/floriatsui/" className="links">LinkedIn</a>
          </div>
          <div style={{ border: 'solid', height: '50%', padding: '0.5em', overflow: 'scroll' }}>
            Past Internships:
            <br />
            Software Engineering Intern @ Goldman Sachs
            <br />
            Summer 2022
            <br />
            Software Engineering Intern @ Sixth Street
            <br />
            Summer 2021
          </div>
        </div>
      </div>
      <div id="past work" style={{ flexGrow: 1, height: '100%', display: 'flex', justifyContent: 'space-between', padding: '2em' }}>
        <div style={{ width: '50%', textAlign: 'left', padding: '0.5em', paddingRight: '2em', overflow: 'scroll' }}>
          <div onClick={() => setTaVis(!taVis)} style={{ cursor: 'pointer' }}>
            Past (H)TA Roles:
          </div>
          <div style={{ visibility: taVis ? 'visible' : 'hidden' }}>
            <li>Computing Foundations: Data</li>
            <li style={{ textAlign: 'right', listStyleType: 'none' }}>TA, Spring 2020</li>
            <li>Introduction to Computer Systems</li>
            <li style={{ textAlign: 'right', listStyleType: 'none' }}>TA, Fall 2020; HTA, Fall 2021</li>
            <li>Fundamentals of Computer Systems</li>
            <li style={{ textAlign: 'right', listStyleType: 'none' }}>TA, Spring 2021</li>
            <li>Software Security and Exploitation</li>
            <li style={{ textAlign: 'right', listStyleType: 'none' }}>TA, Fall 2022</li>
          </div>
        </div>
        <div id="TAing" style={{ border: 'solid', height: '100%', width: '50%', flexGrow: 2, overflow: 'scroll' }}>
          <div id="TA-header" style={{ display: 'flex', borderBottom: 'solid' }}>
            <div style={{ borderRight: 'solid', padding: '0.5em' }}>
              Role
            </div>
            <div style={{ padding: '0.5em' }}>
              Head Teaching Assistant @ Brown CS
            </div>
          </div>
          <div style={{ borderBottom: 'solid', textAlign: 'left', padding: '0.5em' }}>
            Operating Systems, Spring 2022 and Spring 2023
          </div>
          <div style={{ padding: '0.25em', textAlign: 'left', margin: '0' }}>
            I managed every part of the course, from technical to administrative. This included:
            <li>Hiring and managing the course staff, coordinating schedules, helping TAs prepare for office hours, and setting grading guidelines</li>
            <li>Extensive work with the course's flagship assignment, a Unix-based operating system (Weenix) that students implemented over the course of the semester</li>
          </div>
        </div>
      </div>
    </div>
  )
}