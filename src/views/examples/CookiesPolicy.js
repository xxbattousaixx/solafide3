import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const ACCENT = "#f5a623";
const TEXT = "rgba(255,255,255,0.82)";
const MUTED = "rgba(255,255,255,0.5)";
const CARD_BG = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.1)";

const Section = ({ title, children }) => (
  <section style={{ marginBottom: "2.5rem" }}>
    <h2 style={{ color: ACCENT, fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.6rem" }}>
      {title}
    </h2>
    {children}
  </section>
);

const P = ({ children, style }) => (
  <p style={{ color: TEXT, lineHeight: 1.8, marginBottom: "1rem", ...style }}>{children}</p>
);

const CookieCard = ({ name, provider, type, duration, purpose }) => (
  <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "1.2rem 1.4rem", marginBottom: "1rem" }}>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem", marginBottom: "0.5rem" }}>
      <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>{name}</span>
      <span style={{ color: MUTED, fontSize: "0.8rem", alignSelf: "center" }}>Provider: <strong style={{ color: TEXT }}>{provider}</strong></span>
      <span style={{ color: MUTED, fontSize: "0.8rem", alignSelf: "center" }}>Type: <strong style={{ color: TEXT }}>{type}</strong></span>
      <span style={{ color: MUTED, fontSize: "0.8rem", alignSelf: "center" }}>Duration: <strong style={{ color: TEXT }}>{duration}</strong></span>
    </div>
    <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7, margin: 0 }}>{purpose}</p>
  </div>
);

export default function CookiesPolicy() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("cookies-policy");
    return () => document.body.classList.remove("cookies-policy");
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookies Policy | Solafide Services</title>
        <meta name="description" content="Learn how Solafide Services uses cookies on its website — what types are used, why, and how to manage or opt out of them." />
        <link rel="canonical" href="https://solafide-services.com/cookies-policy" />
        <meta property="og:title" content="Cookies Policy | Solafide Services" />
        <meta property="og:url" content="https://solafide-services.com/cookies-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Cookies Policy | Solafide Services" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <ColorNavbar />

      <div className="wrapper" ref={wrapper} style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <Container style={{ maxWidth: "860px", paddingBottom: "5rem" }}>
          <Row>
            <Col>

              {/* Header */}
              <div style={{ marginBottom: "3rem" }}>
                <span style={{ color: ACCENT, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Legal
                </span>
                <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, lineHeight: 1.15, margin: "0.4rem 0 0.8rem" }}>
                  Cookies Policy
                </h1>
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>
                  Last updated: June 4, 2026 &nbsp;·&nbsp;
                  <Link to="/privacy-policy" style={{ color: ACCENT }}>View Privacy Policy</Link>
                </p>
              </div>

              {/* Intro */}
              <Section title="What Are Cookies?">
                <P>
                  Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to website owners about how visitors use their site.
                </P>
                <P>
                  This Cookies Policy explains what cookies are, which cookies Solafide Services uses on <strong style={{ color: "#fff" }}>solafide-services.com</strong>, why we use them, and how you can manage your preferences.
                </P>
                <P>
                  By continuing to browse our website, you consent to our use of cookies as described in this policy. You can withdraw or adjust your consent at any time by following the instructions in the <a href="#managing-cookies" style={{ color: ACCENT }}>Managing Cookies</a> section below.
                </P>
              </Section>

              {/* Types overview */}
              <Section title="Types of Cookies We Use">
                <P>
                  We categorise the cookies on our website into the following types. You will find a detailed list of specific cookies further below.
                </P>

                {[
                  {
                    label: "1. Strictly Necessary Cookies",
                    desc: "These cookies are essential for the website to function and cannot be switched off. They do not store any personally identifiable information. They are typically set in response to actions you take, such as submitting a contact form or navigating the site. Without these cookies, certain parts of the website may not work correctly.",
                    badge: "Always Active",
                    badgeColor: "#28a745",
                  },
                  {
                    label: "2. Functional Cookies",
                    desc: "These cookies enable enhanced functionality and personalisation, such as remembering your preferences or region. They may be set by us or by third-party providers whose services we use on our website. Refusing these cookies may affect the quality of your experience.",
                    badge: "Optional",
                    badgeColor: ACCENT,
                  },
                  {
                    label: "3. Analytics & Performance Cookies",
                    desc: "These cookies help us understand how visitors interact with our website — which pages are visited most, where visitors arrive from, and how long they spend on each page. This information is used in aggregate form to improve the website experience. We do not currently use a dedicated analytics platform, but third-party embeds (such as Google Maps) may collect anonymised usage signals.",
                    badge: "Optional",
                    badgeColor: ACCENT,
                  },
                  {
                    label: "4. Third-Party / Social Media Cookies",
                    desc: "Our website includes links and embeds from third-party platforms such as Google Maps and Facebook. When you interact with these features, those platforms may set their own cookies on your device. We do not control these cookies and they are subject to the respective third-party privacy policies.",
                    badge: "Third-Party",
                    badgeColor: "#6c757d",
                  },
                ].map(({ label, desc, badge, badgeColor }) => (
                  <div key={label} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "1.4rem", marginBottom: "1.2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
                      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{label}</h3>
                      <span style={{ background: badgeColor, color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "2px 10px", borderRadius: "20px", whiteSpace: "nowrap" }}>{badge}</span>
                    </div>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </Section>

              {/* Specific cookies table */}
              <Section title="Cookies Used on This Website">
                <P>Below is a detailed list of cookies that may be set when you use our website.</P>

                <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.8rem", marginTop: "1.5rem" }}>Strictly Necessary</h3>
                <CookieCard
                  name="__Host-"
                  provider="Solafide Services"
                  type="Session Cookie"
                  duration="Session"
                  purpose="Used by the web server to maintain basic session state. Deleted automatically when you close your browser. Contains no personal information."
                />

                <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.8rem", marginTop: "1.5rem" }}>Google Maps (Third-Party)</h3>
                <P style={{ fontSize: "0.87rem", color: MUTED }}>
                  Our Contact Us page loads the Google Maps JavaScript API to display location information. Google may set the following cookies on your device.
                  See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Google's Privacy Policy</a> for full details.
                </P>
                <CookieCard
                  name="NID"
                  provider="Google"
                  type="Persistent Cookie"
                  duration="6 months"
                  purpose="Used by Google to remember your preferences and other information, such as your preferred language, how many search results you prefer, and whether you want Google's SafeSearch filter to be activated."
                />
                <CookieCard
                  name="1P_JAR"
                  provider="Google"
                  type="Persistent Cookie"
                  duration="30 days"
                  purpose="Used to collect website statistics and track conversion rates in Google Maps. Helps Google measure the effectiveness of its advertising."
                />
                <CookieCard
                  name="CONSENT"
                  provider="Google"
                  type="Persistent Cookie"
                  duration="2 years"
                  purpose="Stores your consent status for Google's services. Used when Google Maps is loaded on the page."
                />
                <CookieCard
                  name="AEC"
                  provider="Google"
                  type="Persistent Cookie"
                  duration="6 months"
                  purpose="Google Anti-Abuse cookie — ensures that requests made during a browsing session are made by the actual user and not by automated processes."
                />

                <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.8rem", marginTop: "1.5rem" }}>Facebook (Third-Party)</h3>
                <P style={{ fontSize: "0.87rem", color: MUTED }}>
                  Our website contains links to our Facebook page. If you are logged in to Facebook when you click these links, Facebook may set cookies. We do not control Facebook's cookie practices.
                  See <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Facebook's Privacy Policy</a> for details.
                </P>
                <CookieCard
                  name="_fbp"
                  provider="Facebook (Meta)"
                  type="Persistent Cookie"
                  duration="90 days"
                  purpose="Used by Facebook to deliver advertising products. Only set if you interact with Facebook content linked from our site."
                />

                <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.8rem", marginTop: "1.5rem" }}>Form Submission (Third-Party)</h3>
                <P style={{ fontSize: "0.87rem", color: MUTED }}>
                  Our contact forms are processed via <strong style={{ color: TEXT }}>Postmail (postmail.invotes.com)</strong>. When you submit a contact form, your data (name, email, phone, and message) is transmitted to this service for delivery. Postmail does not set persistent tracking cookies on your device but may log request metadata (e.g. IP address) for security purposes.
                  See <a href="https://postmail.invotes.com" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Postmail's website</a> for more information.
                </P>
              </Section>

              {/* Managing cookies */}
              <Section title="Managing & Disabling Cookies">
                <div id="managing-cookies" />
                <P>
                  You have the right to decide whether to accept or decline non-essential cookies. You can manage your cookie preferences through several methods:
                </P>

                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginTop: "1.2rem", marginBottom: "0.5rem" }}>Browser Settings</h3>
                <P>
                  Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, delete existing cookies, or notify you when a new cookie is about to be set. Please note that disabling cookies may affect the functionality of this and other websites you visit.
                </P>
                <P>Instructions for the most popular browsers:</P>
                <ul style={{ color: TEXT, lineHeight: 2, paddingLeft: "1.4rem", marginBottom: "1rem" }}>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Apple Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Microsoft Edge</a></li>
                </ul>

                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginTop: "1.2rem", marginBottom: "0.5rem" }}>Google Analytics Opt-Out</h3>
                <P>
                  If Google Analytics is active on our website in the future, you can opt out by installing the{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Google Analytics Opt-Out Browser Add-On</a>.
                </P>

                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginTop: "1.2rem", marginBottom: "0.5rem" }}>Google Advertising Opt-Out</h3>
                <P>
                  To opt out of Google's use of cookies for advertising personalisation, visit{" "}
                  <a href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Google's My Ad Center</a>{" "}
                  or <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>aboutads.info</a>.
                </P>
              </Section>

              {/* Do Not Track */}
              <Section title="Do Not Track Signals">
                <P>
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Our website respects user privacy but does not currently respond to DNT signals in a technically differentiated way, as there is no consistent industry standard for compliance. We encourage you to use browser settings or opt-out tools above to control tracking.
                </P>
              </Section>

              {/* Updates */}
              <Section title="Updates to This Policy">
                <P>
                  We may update this Cookies Policy from time to time to reflect changes in technology, law, or our data practices. When we make significant changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
                </P>
              </Section>

              {/* Contact */}
              <Section title="Contact Us">
                <P>If you have questions about our use of cookies, please contact us:</P>
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.4rem 1.6rem" }}>
                  <p style={{ color: "#fff", fontWeight: 700, marginBottom: "0.4rem" }}>Solafide Services, LLC</p>
                  <p style={{ color: MUTED, marginBottom: "0.3rem" }}>850 Rosemary Circle, Bradenton, FL 34212</p>
                  <p style={{ color: MUTED, marginBottom: "0.3rem" }}>
                    Email: <a href="mailto:edmena24@gmail.com" style={{ color: ACCENT }}>edmena24@gmail.com</a>
                  </p>
                  <p style={{ color: MUTED, marginBottom: "0.3rem" }}>
                    Phone: <a href="tel:+19415181657" style={{ color: ACCENT }}>941.518.1657</a>
                  </p>
                  <p style={{ color: MUTED, margin: 0 }}>
                    Or use our <Link to="/contact-us" style={{ color: ACCENT }}>contact form</Link>.
                  </p>
                </div>
              </Section>

            </Col>
          </Row>
        </Container>
        <DemoFooter />
      </div>
    </>
  );
}
