import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  const skills = [
    {
      title: "MACHINE LEARNING",
      description: "Building intelligent models and AI solutions",
      skillset: [
        "TensorFlow",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Neural Networks",
        "Regression",
        "Classification",
        "Clustering",
        "Feature Engineering",
      ],
    },
    {
      title: "BACKEND DEVELOPMENT",
      description: "Designing scalable APIs and database systems",
      skillset: [
        "Python",
        "Java",
        "REST APIs",
        "Fast APIs",
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "AWS Lambda",
        "API Gateway",
        "SQS",
      ],
    },
    {
      title: "AI & DATA ANALYSIS",
      description: "Data preprocessing, visualization, and insights",
      skillset: [
        "Data Preprocessing",
        "LangChain",
        "LLMs",
        "Streamlit",
        "Data Visualization",
        "Model Evaluation",
        "DevOps Fundamentals",
        "Git/GitHub",
        "AWS Cognito",
        "Route53",
      ],
    },
  ];

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1={index === 0 ? "0" : "100%"}
                    x2="100%"
                    y2={index === 0 ? "0" : "100%"}
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  {index === 0 && (
                    <line
                      x1="0"
                      y1="100%"
                      x2="100%"
                      y2="100%"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  )}
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{skill.title}</h3>
                <h4>Description</h4>
                <p>{skill.description}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {skill.skillset.map((tool, toolIndex) => (
                    <div key={toolIndex} className="what-tags">
                      {tool}
                    </div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container && sibling.classList.contains("what-content")) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}