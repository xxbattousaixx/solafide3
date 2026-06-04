import React from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "solafide_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = React.useState(false);
  const [animIn, setAnimIn] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      // Small delay so the page paints first
      const t = setTimeout(() => {
        setVisible(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimIn(true));
        });
      }, 900);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice) => {
    localStorage.setItem(CONSENT_KEY, choice);
    setAnimIn(false);
    setTimeout(() => setVisible(false), 350);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        borderTop: "1px solid rgba(245,166,35,0.4)",
        boxShadow: "0 -4px 40px rgba(0,0,0,0.55)",
        padding: "0",
        transform: animIn ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.35s cubic-bezier(0.32,0.72,0,1)",
        willChange: "transform",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "14px 24px",
      }}>
        {/* Icon + Text */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", flex: "1 1 340px", minWidth: 0 }}>
          <div style={{
            width: "42px", height: "42px", flexShrink: 0,
            background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.3)",
            borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: "20px" }}>🍪</span>
          </div>
          <div>
            <p style={{
              color: "#fff", fontWeight: 700, fontSize: "0.92rem",
              margin: "0 0 3px", lineHeight: 1.3,
            }}>
              We use cookies on this website
            </p>
            <p style={{
              color: "rgba(255,255,255,0.58)", fontSize: "0.82rem",
              margin: 0, lineHeight: 1.6,
            }}>
              Essential cookies keep the site running. Optional cookies (Google Maps, social links) help improve your experience.
              You can change your preference at any time.{" "}
              <Link
                to="/cookies-policy"
                style={{ color: "#f5a623", textDecoration: "underline", whiteSpace: "nowrap" }}
              >
                Cookies Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          flexShrink: 0,
        }}>
          <button
            onClick={() => dismiss("essential")}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "rgba(255,255,255,0.72)",
              borderRadius: "8px",
              padding: "9px 20px",
              fontSize: "0.83rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
              e.currentTarget.style.color = "rgba(255,255,255,0.72)";
            }}
          >
            Essential Only
          </button>

          <button
            onClick={() => dismiss("all")}
            style={{
              background: "linear-gradient(135deg, #f5a623 0%, #e8920a 100%)",
              border: "none",
              color: "#fff",
              borderRadius: "8px",
              padding: "9px 24px",
              fontSize: "0.83rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(245,166,35,0.35)",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(245,166,35,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(245,166,35,0.35)";
            }}
          >
            Accept All Cookies
          </button>

          {/* Close / dismiss */}
          <button
            onClick={() => dismiss("dismissed")}
            aria-label="Close cookie banner"
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.35)",
              cursor: "pointer",
              padding: "6px",
              fontSize: "18px",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
