import React from 'react';

const CV = () => {
  return (
    <div className="cv-container">
      <h1>Miro Gleeford Romasanta</h1>
      <h2>BS in Information Technology major in Web and Mobile development</h2>
      <div className="cv-section">
        <h3>Education</h3>
        <ul>
          <li>Bachelor of Science in Information Technology - University of Santo Tomas (expected graduation date: June 2023)</li>
          <li>High School Diploma - Colegio de San Juan de Letran (May 2019)</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Technical Skills</h3>
        <ul>
          <li>Programming languages: JavaScript, HTML, CSS, Python</li>
          <li>Quality Assurance Testing
          </li>
          <li>Microsoft Suite (Word, Excel, Powerpoint)</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Work Experience</h3>
        <ul>
          <li>IT Intern - MegaMobile (Febrruary 2023 - May 2023)</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Projects</h3>
        <ul>
          <li>Capstone: Finders Givers v2 - <a href='https://findersgivers.web.app/userLogin'>Finders Givers</a></li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Awards and Honors</h3>
        <ul>
          <li>Dean's List - University of Santo Tomas (December 2022)</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>References</h3>
        <ul>
          <li>Asst. Prof Mylene J. Domingo, DIT - Email: mjdomingo@ust.edu.ph </li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Contact Information</h3>
        <ul>
            <li> Email: mgmromasanta@gmail.com</li>
          <li><a href='https://www.facebook.com/Mirogmr/'> Facebook</a></li>
          <li><a href='https://www.instagram.com/gleeford_/'> Instagram</a></li>
          <li><a href='https://github.com/gleeford'> Github</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CV;
