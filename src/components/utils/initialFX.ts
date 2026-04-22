import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  // safer smoother access (no any)
  const smoother = (window as unknown as { smoother?: { paused?: (v: boolean) => void } }).smoother;
  smoother?.paused?.(false);

  document.querySelector("main")?.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const splitChars = (selector: string): HTMLElement[] => {
    const el = document.querySelector(selector);
    if (!el) return [];

    // prevent double split
    if ((el as HTMLElement).dataset.split === "true") {
      return Array.from(el.querySelectorAll(".char"));
    }

    const text = el.textContent || "";

    el.innerHTML = text
      .split("")
      .map((c) => `<span class="char">${c}</span>`)
      .join("");

    (el as HTMLElement).dataset.split = "true";

    return Array.from(el.querySelectorAll(".char"));
  };

  const landing1 = [
    ...splitChars(".landing-info h3"),
    ...splitChars(".landing-intro h2"),
    ...splitChars(".landing-intro h1"),
  ];

  if (landing1.length) {
    gsap.fromTo(
      landing1,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.025,
        delay: 0.3,
        ease: "power3.inOut",
      }
    );
  }

  const landing2 = splitChars(".landing-h2-info");

  if (landing2.length) {
    gsap.fromTo(
      landing2,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.025,
        delay: 0.3,
        ease: "power3.inOut",
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landing3 = splitChars(".landing-h2-info-1");
  const landing4 = splitChars(".landing-h2-1");
  const landing5 = splitChars(".landing-h2-2");

  if (landing3.length && landing5.length) {
    loopText(landing3, landing5);
  }

  if (landing4.length && landing5.length) {
    loopText(landing4, landing5);
  }
}

// ✅ FIXED: prevent duplicate infinite timelines
const activeTimelines: gsap.core.Timeline[] = [];

function loopText(text1: HTMLElement[], text2: HTMLElement[]) {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
  });

  activeTimelines.push(tl);

  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      delay,
      ease: "power3.inOut",
    },
    0
  )
    .fromTo(
      text1,
      { y: 80 },
      {
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        delay: delay2,
        ease: "power3.inOut",
      },
      1
    )
    .to(
      text1,
      {
        y: -80,
        duration: 1.2,
        stagger: 0.1,
        delay,
        ease: "power3.inOut",
      },
      0
    )
    .to(
      text2,
      {
        y: -80,
        duration: 1.2,
        stagger: 0.1,
        delay: delay2,
        ease: "power3.inOut",
      },
      1
    );
}

// optional cleanup helper (important for SPA)
export function killInitialFX() {
  activeTimelines.forEach((t) => t.kill());
  activeTimelines.length = 0;
}