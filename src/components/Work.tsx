import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import cv from "../assets/cv.jpg";
import tatva from "../assets/tatavfoow.avif";
import mockmate from "../assets/mockmate.jpg";
import clipforge from "../assets/clipforge.webp";

// ✅ Correct plugin registration
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      title: "MudraNet",
      category: "Computer Vision",
      tools: "Python, MediaPipe, TensorFlow, OpenCV",
      image: cv,
      repo: "https://github.com/adhikamashmith/VIDEO-GESTURE-RECOGNITION",
    },
    {
      title: "TatvaFlow",
      category: "Data Analysis Platform",
      tools: "Streamlit, Python, LangChain, LLMs",
      image: tatva,
      repo: "https://github.com/adhikamashmith/TatvaFlow",
    },
    {
      title: "MockMate",
      category: "AI Interview Simulator",
      tools: "LLMs, Audio Processing, Full-Stack",
      image: mockmate,
      repo: "https://github.com/adhikamashmith/MOCKMATE",
    },
    {
      title: "ClipForge",
      category: "AI Content Repurposing Tool",
      tools: "Node.js, FFmpeg, Whisper AI, Express, Multer",
      image: clipforge,
      repo: "https://github.com/adhikamashmith/forge-studio",
    },
  ];

  useGSAP(() => {
    const boxes = document.getElementsByClassName("work-box");

    if (!boxes.length) return;

    let translateX = 0;

    function setTranslateX() {
      const container = document.querySelector(".work-container");
      const firstBox = boxes[0] as HTMLElement;

      if (!container || !firstBox) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = firstBox.getBoundingClientRect();
      const parentWidth = firstBox.parentElement?.getBoundingClientRect().width || 0;

      const padding = parseInt(window.getComputedStyle(firstBox).padding) / 2 || 0;

      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const handleViewRepo = (repoUrl: string) => {
    window.open(repoUrl, "_blank");
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{item.tools}</p>

                <button
                  className="view-repo-btn"
                  onClick={() => handleViewRepo(item.repo)}
                >
                  View Repository
                </button>
              </div>

              <WorkImage image={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;