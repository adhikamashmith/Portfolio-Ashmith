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
                <h4>Software Developer Engineer (SDE)</h4>
                <h5>KHM Engineers</h5>
              </div>
              <h3>Jan 2026 – Mar 2026</h3>
            </div>
            <p>
              Developed backend systems including APIs and database integration for client projects. Implemented frontend interfaces and UI/UX features across applications. Debugged, tested, and optimized software performance. Worked with cloud services, development tools, and modern workflows with hands-on experience in deploying applications to production environments, including configuration, monitoring, and scaling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;