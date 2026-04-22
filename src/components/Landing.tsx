import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        {/* HERO INTRO */}
        <div className="landing-intro">
          <h2>Hello! I'm</h2>

          <h1>
            ASHMITH <br />
            <span>ADHIKAM</span>
          </h1>
        </div>

        {/* HERO INFO */}
        <div className="landing-info">
          <h1>
            <span className="creative-text">A Creative Developer</span>
            <br />
            <span>AI & Machine Learning Practitioner</span>
          </h1>
        </div>

      </div>

      {children}
    </div>
  );
};

export default Landing;