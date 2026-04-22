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
          <h3>A Creative Developer</h3>

          <h2 className="landing-info-h2">
            AI Enthusiast • Full Stack Developer • Machine Learning Explorer
          </h2>
        </div>

      </div>

      {children}
    </div>
  );
};

export default Landing;