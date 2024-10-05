import React from 'react';
import './Resume.css'; // Ensure this file is created with updated styles

function Resume() {
  return (
    <div className="resume" id="resumesection">
      <header className="resume-header">
        <h1>Your Name</h1>
        <p>Your Job Title</p>
        <p>Email: your.email@example.com | Phone: (123) 456-7890</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">your-profile</a></p>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>Your University, Graduation Year</p>
          <p>Relevant coursework: Data Structures, Algorithms, Web Development</p>
        </div>
        <div className="resume-item">
          <h3>High School Diploma</h3>
          <p>Your High School, Graduation Year</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Software Developer Intern</h3>
          <p>Company Name, Location | June 2023 - August 2023</p>
          <ul>
            <li>Developed features for web applications using React.js.</li>
            <li>Collaborated with a team to improve application performance.</li>
            <li>Participated in code reviews and Agile development processes.</li>
          </ul>
        </div>
        <div className="resume-item">
          <h3>Data Science Intern</h3>
          <p>Another Company, Location | January 2023 - May 2023</p>
          <ul>
            <li>Analyzed data to identify trends and insights.</li>
            <li>Created visualizations to present data findings.</li>
            <li>Assisted in developing predictive models.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Python</li>
          <li>Data Analysis</li>
          <li>Machine Learning</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;

