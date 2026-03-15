import React from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

const ACCENT = "#f96332";
const DARK   = "#1b1b3a";

export default function ServiceCarousel({ items }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating,   setAnimating]   = React.useState(false);
  const [hoverPrev,   setHoverPrev]   = React.useState(false);
  const [hoverNext,   setHoverNext]   = React.useState(false);

  const next     = () => { if (animating) return; setActiveIndex(i => (i === items.length - 1 ? 0 : i + 1)); };
  const previous = () => { if (animating) return; setActiveIndex(i => (i === 0 ? items.length - 1 : i - 1)); };
  const goTo     = (idx) => { if (animating) return; setActiveIndex(idx); };

  return (
    /* ── Outer wrapper: 3-D depth stage ── */
    <div style={{
      position: "relative",
      perspective: "1200px",
    }}>

      {/* Decorative glowing blobs behind the card */}
      <div style={{
        position: "absolute", top: "-30px", left: "-30px",
        width: "220px", height: "220px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,99,50,0.22) 0%, transparent 70%)",
        filter: "blur(18px)", zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-20px", right: "-20px",
        width: "180px", height: "180px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(100,80,255,0.18) 0%, transparent 70%)",
        filter: "blur(16px)", zIndex: 0, pointerEvents: "none",
      }} />

      {/* ── Card that holds the carousel ── */}
      <div style={{
        position: "relative", zIndex: 1,
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(249,99,50,0.15)",
        background: DARK,
        transform: "rotateY(-1deg) rotateX(1deg)",
        transformStyle: "preserve-3d",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
          e.currentTarget.style.boxShadow = "0 32px 80px rgba(249,99,50,0.25), 0 0 0 1px rgba(249,99,50,0.3)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "rotateY(-1deg) rotateX(1deg)";
          e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(249,99,50,0.15)";
        }}
      >
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>

          {/* Dot indicators */}
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goTo}
          />

          {items.map((item) => (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={()  => setAnimating(false)}
              key={item.src}
            >
              {/* Fixed-height image frame — never resizes */}
              <div style={{
                height: "clamp(260px, 42vw, 460px)",
                position: "relative",
                overflow: "hidden",
                background: "#0d0d22",
              }}>
                <img
                  src={item.src}
                  alt={item.caption || "Solafide Services project"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />

                {/* Bottom gradient + caption */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(to top, rgba(11,11,34,0.88) 0%, rgba(11,11,34,0.4) 50%, transparent 100%)",
                  padding: "48px 20px 16px",
                }}>
                  {item.caption && (
                    <span style={{
                      color: ACCENT, fontWeight: 700,
                      fontSize: "0.88rem", letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                    }}>
                      {item.caption}
                    </span>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}

          {/* ── Prev button ── */}
          <a
            href="#prev"
            role="button"
            onClick={e => { e.preventDefault(); previous(); }}
            onMouseEnter={() => setHoverPrev(true)}
            onMouseLeave={() => setHoverPrev(false)}
            style={{
              position: "absolute", top: "50%", left: "10px",
              transform: "translateY(-50%)",
              width: "42px", height: "42px",
              borderRadius: "50%", display: "flex",
              alignItems: "center", justifyContent: "center",
              background: hoverPrev ? ACCENT : "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${hoverPrev ? ACCENT : "rgba(255,255,255,0.2)"}`,
              transition: "all 0.2s ease",
              zIndex: 5, textDecoration: "none",
            }}
          >
            <i className="tim-icons icon-minimal-left" style={{ color: "#fff", fontSize: "0.9rem" }} />
          </a>

          {/* ── Next button ── */}
          <a
            href="#next"
            role="button"
            onClick={e => { e.preventDefault(); next(); }}
            onMouseEnter={() => setHoverNext(true)}
            onMouseLeave={() => setHoverNext(false)}
            style={{
              position: "absolute", top: "50%", right: "10px",
              transform: "translateY(-50%)",
              width: "42px", height: "42px",
              borderRadius: "50%", display: "flex",
              alignItems: "center", justifyContent: "center",
              background: hoverNext ? ACCENT : "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${hoverNext ? ACCENT : "rgba(255,255,255,0.2)"}`,
              transition: "all 0.2s ease",
              zIndex: 5, textDecoration: "none",
            }}
          >
            <i className="tim-icons icon-minimal-right" style={{ color: "#fff", fontSize: "0.9rem" }} />
          </a>

        </Carousel>

        {/* Slide counter badge */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
          borderRadius: "20px", padding: "3px 11px",
          color: "rgba(255,255,255,0.75)", fontSize: "0.75rem",
          fontWeight: 600, zIndex: 10, letterSpacing: "0.05em",
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          {activeIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  );
}
