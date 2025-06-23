import React from "react";

import './App.css';
import { TopBar } from './TopBar';
import { AboutMe } from "./AboutMe";
import capybara from './capybara.png'

function App() {
  return (
    <div className="App" style={{ display: 'flex', height: '100%' }}>
      <div id="left-half" style={{ width: '75%', textAlign: 'left' }}>
        <TopBar />
        <div id="Experience" style={{ padding: '2em' }}>
          I'm currently working as a Software Engineer at Grafana Labs. I am part of the platform team, specifically providing tools
          and automation around CI/CD.
          <br /><br />
          I previously worked as a Software Engineer at Goldman Sachs, based in New York City, within the Global
          Investment Research Division, where I helped build tools for client relationship management.
          <br /><br />
          I graduated from Brown University in May of 2023, where I earned a B.S. in Computer Science. I am interested in computer
          systems and diving deep to understand how key pieces of abstractions work together to create a functional system; specifically, I've been primarily interested in
          understanding the underpinnings of operating systems and how they help computers work.
          <br /><br />
          I've implemented a Unix-based operating system kernel, first as a student, then helping students implement it, as a Teaching Assistant.
          I was a Teaching Assistant for seven out of my eight semesters at Brown, where I primarily helped run and teach classes related to computer systems,
          including two semesters where I ran Brown CS's <a href="https://brown-cs1690.github.io/brown-cs167-s22/#/">Operating</a> <a href="https://brown-cs1690.github.io/brown-cs167-s23/#/">Systems</a> class.
          <br /><br />
          <p style={{ fontSize: '20px' }}>Notable projects include: </p>
          <li>Weenix - implementing an operating system</li>
          <li>TCP/IP - implementing the two network protocols</li>
          <li>Raft - implementing a consensus algorithm</li>
          <br />
          <img alt={"capybara-with-yuzu"} src={capybara} style={{ height: "25em" }}></img>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
