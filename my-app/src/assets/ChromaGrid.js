import { useRef, useEffect, useState } from "react";
import "./ChromaGrid.css";

export const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const demo = [
    {
      image: "https://picsum.photos/400/300?random=1",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://github.com/",
    },
    {
      image: "https://picsum.photos/300/400?random=2",
      title: "Jordan Chen",
      subtitle: "DevOps Engineer",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://picsum.photos/500/300?random=3",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://dribbble.com/",
    },
    {
      image: "https://picsum.photos/350/500?random=4",
      title: "Casey Park",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://kaggle.com/",
    },
    {
      image: "https://picsum.photos/400/250?random=5",
      title: "Sam Kim",
      subtitle: "Mobile Developer",
      handle: "@thesamkim",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://github.com/",
    },
    {
      image: "https://picsum.photos/300/350?random=6",
      title: "Tyler Rodriguez",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://aws.amazon.com/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const updatePosition = () => {
      const { width, height } = el.getBoundingClientRect();
      setPos({ x: width / 2, y: height / 2 });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    const newPos = {
      x: e.clientX - r.left,
      y: e.clientY - r.top
    };
    setPos(newPos);
    
    if (fadeRef.current) {
      fadeRef.current.style.opacity = '0';
      fadeRef.current.style.transition = 'opacity 0.25s ease';
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      fadeRef.current.style.opacity = '1';
      fadeRef.current.style.transition = `opacity ${fadeOut}s ease`;
    }
  };

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
        "--r": `${radius}px`,
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div className="chroma-grid-container">
        {data.map((c, i) => (
          <article
            key={i}
            className="chroma-card"
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            style={{
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: c.url ? "pointer" : "default",
            }}
          >
            <div className="chroma-img-wrapper">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>
            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        ))}
      </div>
      
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;