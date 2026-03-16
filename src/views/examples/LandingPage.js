import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const IMAGES = [
  { src: require("assets/img/waterfall.JPG"),  label: "Custom Waterfall",     category: "Water Features" },
  { src: require("assets/img/11.jpg"),          label: "Paver Project",        category: "Hardscape" },
  { src: require("assets/img/22.jpg"),          label: "Completed Project",    category: "Hardscape" },
  { src: require("assets/img/a.jpg"),           label: "Outdoor Lighting",     category: "Lighting" },
  { src: require("assets/img/a1.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/a3.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/a5.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/a8.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/a9.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/b.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/b4.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/b5.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/c.JPG"),           label: "Retaining Wall",       category: "Masonry" },
  { src: require("assets/img/1130.jpg"),        label: "Concrete Curbing",     category: "Concrete" },
  { src: require("assets/img/driveway7.jpg"),   label: "Driveway",             category: "Driveways" },
  { src: require("assets/img/d3.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/d5.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/d8.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/1.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/2.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/3.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/4.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/5.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/6.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/8.jpg"),           label: "",                     category: "Hardscape" },
  { src: require("assets/img/33.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/44.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/jj.jpg"),          label: "",                     category: "Hardscape" },
  { src: require("assets/img/kkk.jpg"),         label: "",                     category: "Hardscape" },
  { src: require("assets/img/mmm.jpg"),         label: "",                     category: "Hardscape" },
];

const CATS = ["All", "Hardscape", "Driveways", "Water Features", "Masonry", "Concrete", "Lighting"];

const ACCENT = "#f96332";
const NAV_BG = "#1b1b3a";

export default function Gallery() {
  const [filter, setFilter]     = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const filtered = filter === "All" ? IMAGES : IMAGES.filter(i => i.category === filter);

  const prev = (e) => { e.stopPropagation(); setLightbox(l => (l > 0 ? l - 1 : filtered.length - 1)); };
  const next = (e) => { e.stopPropagation(); setLightbox(l => (l < filtered.length - 1 ? l + 1 : 0)); };

  const handleKeyDown = React.useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === "ArrowLeft")  setLightbox(l => (l > 0 ? l - 1 : filtered.length - 1));
    if (e.key === "ArrowRight") setLightbox(l => (l < filtered.length - 1 ? l + 1 : 0));
    if (e.key === "Escape")     setLightbox(null);
  }, [lightbox, filtered.length]);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <Helmet>
        <title>Gallery | Solafide Services — Florida Masonry & Hardscape Portfolio</title>
        <meta name="description" content="Browse Solafide Services' project gallery. Custom driveways, retaining walls, waterfall features, outdoor lighting, and masonry work across Florida." />
        <link rel="canonical" href="https://solafide-services.com/gallery" />
      </Helmet>

      <ColorNavbar />

      <div style={{ background: NAV_BG, minHeight: "100vh", marginTop: "130px" }}>

        {/* ── Hero ── */}
        <div style={{ textAlign: "center", padding: "64px 20px 0" }}>
          <span style={{
            color: ACCENT, fontSize: "0.78rem", fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            display: "inline-block", marginBottom: "12px",
          }}>
            Portfolio
          </span>
          <h1 style={{
            color: "#fff", margin: "0 0 14px",
            fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.15,
          }}>
            Crafted with{" "}
            <span style={{ color: ACCENT }}>Precision</span>
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.55)", maxWidth: "520px",
            margin: "0 auto 40px", fontSize: "1.05rem", lineHeight: 1.7,
          }}>
            Every project tells a story — browse our portfolio of masonry, hardscaping,
            and outdoor transformations across Florida.
          </p>

          {/* Filter pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}>
            {CATS.map(cat => {
              const active = filter === cat;
              return (
                <button key={cat} onClick={() => setFilter(cat)} style={{
                  padding: "8px 22px", borderRadius: "24px", cursor: "pointer",
                  border: `2px solid ${active ? ACCENT : "rgba(255,255,255,0.18)"}`,
                  background: active ? ACCENT : "transparent",
                  color: active ? "#fff" : "rgba(255,255,255,0.65)",
                  fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.04em",
                  transition: "all 0.2s ease", outline: "none",
                }}>
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Masonry Grid ── */}
        <div style={{
          padding: "0 16px 80px",
          maxWidth: "1280px",
          margin: "0 auto",
          columns: "3 280px",
          columnGap: "14px",
        }}>
          {filtered.map((img, idx) => (
            <div
              key={img.src + idx}
              onClick={() => setLightbox(idx)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                breakInside: "avoid",
                marginBottom: "14px",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                cursor: "zoom-in",
                boxShadow: hoveredIdx === idx
                  ? "0 12px 40px rgba(249,99,50,0.35)"
                  : "0 4px 20px rgba(0,0,0,0.4)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                transform: hoveredIdx === idx ? "translateY(-3px)" : "none",
              }}
            >
              <img
                src={img.src}
                alt={img.label || "Solafide Services project"}
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                  transition: "transform 0.4s ease",
                  transform: hoveredIdx === idx ? "scale(1.04)" : "scale(1)",
                }}
              />
              {/* Hover overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(249,99,50,0.75) 0%, rgba(27,27,58,0.15) 55%, transparent 100%)",
                opacity: hoveredIdx === idx ? 1 : 0,
                transition: "opacity 0.3s ease",
                display: "flex", alignItems: "flex-end", padding: "16px 14px",
              }}>
                <div>
                  {img.label && (
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 2px" }}>
                      {img.label}
                    </p>
                  )}
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {img.category}
                  </p>
                </div>
                <div style={{ marginLeft: "auto", background: "rgba(255,255,255,0.2)", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: "1.1rem" }}>⊕</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div style={{
          background: "linear-gradient(135deg, rgba(249,99,50,0.12) 0%, rgba(27,27,58,0) 100%)",
          borderTop: "1px solid rgba(249,99,50,0.2)",
          padding: "48px 20px",
          textAlign: "center",
        }}>
          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.6rem", margin: "0 0 10px" }}>
            Ready to transform your space?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.55)", margin: "0 0 28px" }}>
            Let's bring your vision to life.
          </p>
          <Link to="/contact-us" style={{
            display: "inline-block", padding: "14px 36px",
            background: ACCENT, color: "#fff", borderRadius: "28px",
            fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
            boxShadow: "0 8px 24px rgba(249,99,50,0.4)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}>
            Contact Us Now
          </Link>
        </div>

        <DemoFooter />
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.94)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Close */}
          <button onClick={() => setLightbox(null)} style={{
            position: "absolute", top: "18px", right: "22px",
            background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
            width: "40px", height: "40px", color: "#fff", fontSize: "1.2rem",
            cursor: "pointer", lineHeight: "40px", textAlign: "center",
          }}>✕</button>

          {/* Prev */}
          <button onClick={prev} style={{
            position: "absolute", left: "16px",
            background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
            width: "48px", height: "48px", color: "#fff", fontSize: "1.8rem",
            cursor: "pointer", lineHeight: "44px", textAlign: "center",
          }}>‹</button>

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].label || "Project"}
            onClick={e => e.stopPropagation()}
            style={{
              maxHeight: "88vh", maxWidth: "88vw",
              borderRadius: "10px",
              boxShadow: "0 0 80px rgba(249,99,50,0.25)",
            }}
          />

          {/* Next */}
          <button onClick={next} style={{
            position: "absolute", right: "16px",
            background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
            width: "48px", height: "48px", color: "#fff", fontSize: "1.8rem",
            cursor: "pointer", lineHeight: "44px", textAlign: "center",
          }}>›</button>

          {/* Counter + label */}
          <div style={{
            position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", textAlign: "center",
          }}>
            {filtered[lightbox].label && (
              <p style={{ color: "#fff", fontWeight: 600, margin: "0 0 4px" }}>{filtered[lightbox].label}</p>
            )}
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
