import React from 'react';

export default function Home() {
  return (
    <div className="section-parent">
      <div className="section section-2">
        <span className="subtitle">
          Tentative Schedule
          <div className="green-ball-1"></div>
        </span>
        <div className="schedule">
          <div className="row">
            <span className="time">9 — 9:15AM</span>
            <span className="event">Registration and Intro</span>
          </div>
          <div className="row">
            <span className="time">9:15 — 10 AM</span>
            <span className="event">Keynote</span>
          </div>
          <div className="row">
            <span className="time">10 — 11:30 AM</span>
            <span className="event">Research Talks Session I</span>
          </div>
          <div className="row">
            <span className="time">11:30 AM — 2 PM</span>
            <span className="event">Poster Session<br />Lunch & Networking</span>
          </div>
          <div className="row">
            <span className="time">2 — 3 PM</span>
            <span className="event">Career Panel</span>
          </div>
          <div className="row">
            <span className="time">3 — 4 PM</span>
            <span className="event">Research Talks Session II</span>
          </div>
          <div className="row">
            <span className="time">4 — 4:45 PM</span>
            <span className="event">Technical Presentation: <a href="https://www.si.umich.edu/people/ceren-budak" target="_blank" rel="noopener noreferrer" className="registration">Ceren Budak</a>, Assistant Professor, School of Information, University of Michigan</span>
          </div>
          <div className="row">
            <span className="time">4:45 — 5 PM</span>
            <span className="event">Wrap-up and Awards</span>
          </div>
        </div>
      </div>

      <div className="section section-3">
        <span className="subtitle">
          Call for Abstracts
          <div className="green-ball-1 green-ball-2"></div>
        </span>
        <div className="call">
          <p>The 2020 Women+ Data Science Symposium, jointly organized by the Michigan State University (MSU) and the University of Michigan (U-M) will take place on <b>April 17</b> at MSU.  We invite abstract submissions for talks and poster presentations.</p>
          <p>The symposium provides a platform for all practicing and aspiring data scientists, but especially women and gender minority participants, to discuss cutting-edge research, explore resources for research and career advancement, and network with other attendees. Everyone is welcome to contribute and attend.</p>
          <p>We invite abstracts in the following areas:</p>
          <ul>
            <li>Theoretical foundations</li>
            <li>Methodology and tools</li>
            <li>Real-world applications in any research domain</li>
            <li>Ethics, fairness, and societal impact</li>
            <li>Emerging research areas</li>
          </ul>
          <p>
            <b>Submission Deadline:</b> Feb 29, 2020<br />
            <b>Notification:</b> March 15, 2020<br />
            <b><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfwwdGOItncuSTJqOVBnnlvF6FgyR4Lhiyc4A6HTRorYMnPUg/viewform">Please register here.</a></b>
          </p>
          <b><p>Submission Instructions</p></b>
          <ul>
            <li>Submit your abstract through the registration form.</li>
            <li>Include a title, list of authors/presenters and their affiliations.</li>
            <li>To recognize women and gender minority data scientists on your team, please indicate their roles in the project (securing research funding, project design, data collection, analysis and interpretation, writing, project management, project supervision).</li>
            <li>We strongly encourage the women and gender minority members of your team to be the presenters of the talks or posters.</li>
            <li>The main body of the abstract should be no more than 300 words and should include a brief summary of the research, methods, main results and impact.</li>
            <li>Please do not include figures, tables or bibliography in the abstract.</li>
            <li>Please indicate whether you prefer an oral presentation or poster. Oral presentations will be 10 minutes in length. The review committee will try its best to accommodate your preferences.</li>
          </ul>
          <p><b>Questions?</b> Email us: <a target="_blank" rel="noopener noreferrer" href="mailto:women.plus.datascience@gmail.com">women.plus.datascience@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
