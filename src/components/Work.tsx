import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "MudraNet",
      category: "Computer Vision",
      tools: "Python, MediaPipe, TensorFlow, OpenCV",
      image: "src/assets/cv.jpg",
      repo: "https://github.com/adhikamashmith/VIDEO-GESTURE-RECOGNITION",
    },
    {
      title: "TatvaFlow",
      category: "Data Analysis Platform",
      tools: "Streamlit, Python, LangChain, LLMs",
      image: "src/assets/tatavfoow.avif",
      repo: "https://github.com/adhikamashmith/TatvaFlow",
    },
    {
      title: "MockMate",
      category: "AI Interview Simulator",
      tools: "LLMs, Audio Processing, Full-Stack",
      image: "src/assets/mockmate.jpg",
      repo: "https://github.com/adhikamashmith/MOCKMATE",
    },
    {
      title: "ClipForge",
      category: "AI Content Repurposing Tool",
      tools: "Node.js, FFmpeg, Whisper AI, Express, Multer",
      image: "src/assets/clipforge.webp",
      repo: "https://github.com/adhikamashmith/forge-studio",
    },
  ];

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
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
          {projects.map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{_value.title}</h4>
                    <p>{_value.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{_value.tools}</p>
                <button
                  className="view-repo-btn"
                  onClick={() => handleViewRepo(_value.repo)}
                >
                  View Repository
                </button>
              </div>
              <WorkImage image={_value.image} alt={_value.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;