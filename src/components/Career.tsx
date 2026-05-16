import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h5>GGSIP University (Computer Science)</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science at Guru Gobind Singh Indraprastha
              University. Maintaining a CGPA of 7.4 till the second year.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Electrical Engineering</h4>
                <h5>Jamia Millia Islamia</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Diploma in Electrical Engineering with a CGPA of 8.4/10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Electrical Engineering Intern</h4>
                <h5>Distribution System</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Assisted in inspection of electrical infrastructure, observed
              maintenance procedures, and participated in site visits to understand
              safety standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
