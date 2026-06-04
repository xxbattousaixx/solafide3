import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DemoFooter from "components/Footers/DemoFooter.js";
import ColorNavbar from "components/Navbars/ColorNavbar.js";

const ACCENT = "#f5a623";
const TEXT = "rgba(255,255,255,0.82)";
const MUTED = "rgba(255,255,255,0.5)";
const CARD_BG = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.1)";

const Section = ({ title, id, children }) => (
  <section id={id} style={{ marginBottom: "2.5rem" }}>
    <h2 style={{ color: ACCENT, fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.6rem" }}>
      {title}
    </h2>
    {children}
  </section>
);

const P = ({ children, style }) => (
  <p style={{ color: TEXT, lineHeight: 1.8, marginBottom: "1rem", ...style }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ color: TEXT, lineHeight: 1.8, marginBottom: "0.4rem" }}>{children}</li>
);

export default function PrivacyPolicy() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("privacy");
    return function cleanup() {
      document.body.classList.remove("privacy");
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Solafide Services</title>
        <meta name="description" content="Read the Solafide Services privacy policy. Learn how we collect, use, and protect your personal information when you use our website or request services." />
        <link rel="canonical" href="https://solafide-services.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Solafide Services" />
        <meta property="og:url" content="https://solafide-services.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Solafide Services" />
        <meta name="twitter:site" content="@SolafideService" />
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
                  Privacy Policy
                </h1>
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>
                  Last updated: June 4, 2026 &nbsp;·&nbsp;
                  <Link to="/cookies-policy" style={{ color: ACCENT }}>View Cookies Policy</Link>
                </p>
              </div>

              {/* Quick nav */}
              <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.4rem 1.6rem", marginBottom: "2.5rem" }}>
                <p style={{ color: "#fff", fontWeight: 700, marginBottom: "0.7rem", fontSize: "0.9rem" }}>Quick Navigation</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem 1.2rem" }}>
                  {[
                    ["#who-we-are", "Who We Are"],
                    ["#data-we-collect", "Data We Collect"],
                    ["#how-we-use", "How We Use Your Data"],
                    ["#third-parties", "Third-Party Services"],
                    ["#cookies", "Cookies"],
                    ["#data-retention", "Data Retention"],
                    ["#your-rights", "Your Rights"],
                    ["#security", "Security"],
                    ["#contact", "Contact Us"],
                  ].map(([href, label]) => (
                    <a key={href} href={href} style={{ color: ACCENT, fontSize: "0.85rem", lineHeight: 2 }}>{label}</a>
                  ))}
                </div>
              </div>

              {/* Intro */}
              <P>
                Solafide Services, LLC ("Solafide", "we", "us", or "our") is committed to protecting your personal information and being transparent about what data we collect, why we collect it, and how it is used. This Privacy Policy applies to our website at <strong style={{ color: "#fff" }}>solafide-services.com</strong> and describes your rights and our obligations under applicable privacy law, including the Florida Digital Bill of Rights and applicable provisions of the California Consumer Privacy Act (CCPA).
              </P>
              <P>
                Please read this policy carefully. By using our website or submitting a service enquiry, you acknowledge you have read and understood this policy.
              </P>

              {/* Who we are */}
              <Section title="1. Who We Are" id="who-we-are">
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "1.2rem 1.4rem" }}>
                  <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 0.3rem" }}>Solafide Services, LLC</p>
                  <p style={{ color: MUTED, margin: "0 0 0.25rem", fontSize: "0.9rem" }}>850 Rosemary Circle, Bradenton, FL 34212, United States</p>
                  <p style={{ color: MUTED, margin: "0 0 0.25rem", fontSize: "0.9rem" }}>
                    Email: <a href="mailto:edmena24@gmail.com" style={{ color: ACCENT }}>edmena24@gmail.com</a>
                  </p>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
                    Phone: <a href="tel:+19415181657" style={{ color: ACCENT }}>941.518.1657</a>
                  </p>
                </div>
                <P style={{ marginTop: "1rem" }}>
                  We are a Florida-based hardscape restoration company providing paver cleaning, sealing, pool deck restoration, pressure washing, and related services to residential and commercial clients. We operate this website as an informational and lead-generation resource — there are no user accounts, subscription services, or e-commerce transactions.
                </P>
              </Section>

              {/* Data we collect */}
              <Section title="2. Data We Collect" id="data-we-collect">
                <P>We only collect information that is necessary to provide you with our services or respond to your enquiries. We do not sell, rent, or trade your personal data.</P>

                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem", marginTop: "1.4rem" }}>2.1 Information You Provide Directly</h3>
                <P>When you submit a contact or service request form on our website, we collect:</P>
                <ul style={{ paddingLeft: "1.4rem", marginBottom: "1rem" }}>
                  <Li><strong>Full name</strong> — to address you correctly and reference your enquiry.</Li>
                  <Li><strong>Email address</strong> — to respond to your enquiry and, where you have consented, send service-related follow-ups.</Li>
                  <Li><strong>Phone number</strong> — to contact you about scheduling or pricing your job.</Li>
                  <Li><strong>Message / project description</strong> — to understand the scope of your service request.</Li>
                </ul>
                <P style={{ color: MUTED, fontSize: "0.88rem" }}>
                  <strong style={{ color: TEXT }}>Legal basis:</strong> Processing is necessary to take steps at your request prior to entering a contract (Art. 6(1)(b) GDPR equivalent; CCPA: service provision). Where you provide your contact details to receive follow-up marketing communications, we rely on your consent, which you may withdraw at any time.
                </P>

                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem", marginTop: "1.4rem" }}>2.2 Information Collected Automatically</h3>
                <P>When you visit our website, standard technical information is automatically recorded by our web hosting infrastructure:</P>
                <ul style={{ paddingLeft: "1.4rem", marginBottom: "1rem" }}>
                  <Li><strong>IP address</strong> — used to identify broad geographic region and detect malicious traffic.</Li>
                  <Li><strong>Browser type and version</strong> — used to ensure our site displays correctly on your device.</Li>
                  <Li><strong>Pages visited and time spent</strong> — used to understand which content is most useful to visitors.</Li>
                  <Li><strong>Referring URL</strong> — to understand how visitors find our website.</Li>
                  <Li><strong>Device type</strong> (desktop, tablet, mobile) — to optimise the display of our website.</Li>
                </ul>
                <P style={{ color: MUTED, fontSize: "0.88rem" }}>
                  <strong style={{ color: TEXT }}>Legal basis:</strong> Legitimate interest — we use this information solely to maintain and improve our website, not to build profiles of individual users.
                </P>

                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem", marginTop: "1.4rem" }}>2.3 What We Do Not Collect</h3>
                <ul style={{ paddingLeft: "1.4rem", marginBottom: "1rem" }}>
                  <Li>Payment card details or financial information — we do not process payments online.</Li>
                  <Li>Government ID numbers or Social Security Numbers.</Li>
                  <Li>Health or biometric data.</Li>
                  <Li>Information from or about children under 13 — our services are not directed at children.</Li>
                </ul>
              </Section>

              {/* How we use */}
              <Section title="3. How We Use Your Data" id="how-we-use">
                <P>We use the information we collect for the following purposes only:</P>
                <ul style={{ paddingLeft: "1.4rem" }}>
                  <Li><strong>Responding to service enquiries</strong> — to contact you, provide estimates, and schedule jobs.</Li>
                  <Li><strong>Service delivery</strong> — to carry out the hardscape restoration work you have requested.</Li>
                  <Li><strong>Follow-up communications</strong> — with your consent, to send you information about related services, promotions, or seasonal offers from Solafide Services.</Li>
                  <Li><strong>Website improvement</strong> — to analyse aggregate usage patterns and improve our website and content.</Li>
                  <Li><strong>Legal compliance</strong> — to comply with applicable laws, regulations, and legal proceedings.</Li>
                  <Li><strong>Fraud prevention and security</strong> — to detect and prevent fraudulent submissions or malicious activity.</Li>
                </ul>
                <P style={{ marginTop: "1rem" }}>
                  We do not use your personal data for automated decision-making or profiling, and we do not use it for any purpose incompatible with the purposes listed above without your prior consent.
                </P>
              </Section>

              {/* Third parties */}
              <Section title="4. Third-Party Services We Use" id="third-parties">
                <P>To operate our website effectively, we use a limited number of trusted third-party services. Where these services process your personal data on our behalf, we have confirmed they maintain appropriate data protection standards.</P>

                {[
                  {
                    name: "Postmail (postmail.invotes.com)",
                    role: "Email delivery — contact form processor",
                    detail: "When you submit a contact or request form on our website, your submission is transmitted to Postmail's API for delivery to our inbox. Postmail receives your name, email address, phone number, and message. We have configured this to use HTTPS transmission. We recommend you review Postmail's privacy documentation if you have questions about their data handling.",
                  },
                  {
                    name: "Google Maps JavaScript API",
                    role: "Mapping — location display on Contact page",
                    detail: "Our Contact Us page loads the Google Maps JavaScript API to help visitors find our service area. When this page loads, Google may set cookies on your device and collect standard request metadata (IP address, browser info). We have limited this to display-only functionality. See Google's Privacy Policy at policies.google.com/privacy.",
                  },
                  {
                    name: "Netlify (netlify.com)",
                    role: "Web hosting and delivery",
                    detail: "Our website is hosted on Netlify's infrastructure. Netlify processes web requests made to our site, which includes your IP address and browser information, for routing and security purposes. Netlify does not use this data for advertising. See Netlify's Privacy Policy at netlify.com/privacy.",
                  },
                  {
                    name: "Facebook / Meta",
                    role: "Social media — linked page only",
                    detail: "Our website contains links to our Facebook business page (facebook.com/SolafideL7/). Clicking these links will take you to Facebook's platform. We do not embed Facebook tracking pixels on our website. If you are logged into Facebook when you follow a link, Facebook may associate that visit with your account under their own privacy policy.",
                  },
                ].map(({ name, role, detail }) => (
                  <div key={name} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "1.2rem 1.4rem", marginBottom: "1rem" }}>
                    <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 0.2rem" }}>{name}</p>
                    <p style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 0.6rem" }}>{role}</p>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.75, margin: 0 }}>{detail}</p>
                  </div>
                ))}

                <P style={{ marginTop: "1rem" }}>
                  We do not sell your personal data to any third party, and we do not share it with advertising networks or data brokers.
                </P>
              </Section>

              {/* Cookies */}
              <Section title="5. Cookies & Tracking Technologies" id="cookies">
                <P>
                  Our website uses cookies and similar technologies to operate correctly and to understand how visitors use our site. For full details of the cookies we use, including how to manage or disable them, please see our dedicated{" "}
                  <Link to="/cookies-policy" style={{ color: ACCENT }}>Cookies Policy</Link>.
                </P>
                <P>
                  In summary: we use strictly necessary cookies to make the website function, and we load third-party services (Google Maps, Facebook links) that may set their own cookies on your device. We do not currently use a dedicated analytics platform (such as Google Analytics).
                </P>
              </Section>

              {/* Data retention */}
              <Section title="6. Data Retention" id="data-retention">
                <P>We retain your personal data only for as long as is necessary for the purposes for which it was collected:</P>
                <ul style={{ paddingLeft: "1.4rem" }}>
                  <Li><strong>Contact form submissions</strong> — retained in our email inbox for up to 2 years, then deleted, unless an ongoing service relationship exists.</Li>
                  <Li><strong>Service records</strong> — records of completed jobs are retained for up to 7 years to comply with Florida business record-keeping requirements and tax obligations.</Li>
                  <Li><strong>Web server logs</strong> (IP addresses, page visits) — automatically purged by our hosting provider (Netlify) on a rolling 30-day basis.</Li>
                  <Li><strong>Marketing communications</strong> — if you have opted in, we retain your contact details until you request removal.</Li>
                </ul>
                <P style={{ marginTop: "1rem" }}>
                  When data is no longer needed, we securely delete or anonymise it. You can request deletion of your data at any time (see Your Rights below).
                </P>
              </Section>

              {/* Your rights */}
              <Section title="7. Your Privacy Rights" id="your-rights">
                <P>
                  Depending on your jurisdiction, you may have the following rights regarding your personal data. We will respond to all requests within 30 days.
                </P>

                {[
                  { right: "Right to Access", desc: "You can request a copy of the personal data we hold about you." },
                  { right: "Right to Rectification", desc: "You can ask us to correct any inaccurate or incomplete information we hold about you." },
                  { right: 'Right to Erasure ("Right to be Forgotten")', desc: "You can ask us to delete your personal data where there is no compelling reason for us to continue holding it." },
                  { right: "Right to Restrict Processing", desc: "You can ask us to stop using your data in certain ways while we deal with a complaint or request." },
                  { right: "Right to Data Portability", desc: "You can request a machine-readable copy of the data you have provided to us." },
                  { right: "Right to Object", desc: "You can object to our processing of your data where we rely on legitimate interests as our legal basis." },
                  { right: "Right to Withdraw Consent", desc: "Where processing is based on your consent, you can withdraw it at any time. This does not affect the lawfulness of processing before withdrawal." },
                  { right: "Do Not Sell My Personal Information (CCPA)", desc: "We do not sell your personal data. California residents may submit an opt-out request, though no selling is occurring." },
                ].map(({ right, desc }) => (
                  <div key={right} style={{ display: "flex", gap: "1rem", marginBottom: "0.9rem" }}>
                    <div style={{ width: "4px", flexShrink: 0, background: ACCENT, borderRadius: "2px", marginTop: "2px" }} />
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 0.2rem", fontSize: "0.95rem" }}>{right}</p>
                      <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}

                <P style={{ marginTop: "1.2rem" }}>
                  To exercise any of these rights, contact us at <a href="mailto:edmena24@gmail.com" style={{ color: ACCENT }}>edmena24@gmail.com</a> or call <a href="tel:+19415181657" style={{ color: ACCENT }}>941.518.1657</a>. We may need to verify your identity before processing your request.
                </P>
              </Section>

              {/* Security */}
              <Section title="8. Security" id="security">
                <P>
                  We take the security of your personal data seriously. Our website is served exclusively over HTTPS (TLS encryption). Contact form submissions are transmitted securely to our email delivery service. We restrict access to personal data to authorised personnel only.
                </P>
                <P>
                  However, no method of electronic transmission or storage is 100% secure. While we strive to use commercially reasonable means to protect your data, we cannot guarantee absolute security. In the event of a data breach that affects your rights and freedoms, we will notify relevant authorities and affected individuals in accordance with applicable law.
                </P>
              </Section>

              {/* Children */}
              <Section title="9. Children's Privacy">
                <P>
                  Our website and services are not directed at individuals under 13 years of age. We do not knowingly collect personal data from children under 13. If you believe a child has submitted personal information through our website, please contact us immediately and we will delete it promptly.
                </P>
              </Section>

              {/* External links */}
              <Section title="10. Links to Other Websites">
                <P>
                  Our website may contain links to external sites (such as Facebook or supplier pages). We are not responsible for the privacy practices of those sites and encourage you to review their individual privacy policies. Our policy applies only to information collected on <strong style={{ color: "#fff" }}>solafide-services.com</strong>.
                </P>
              </Section>

              {/* Changes */}
              <Section title="11. Changes to This Policy">
                <P>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will update the "Last updated" date at the top of this page. Where required by law, we will notify you of material changes by email or by a notice on our website.
                </P>
                <P>
                  Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
                </P>
              </Section>

              {/* Contact */}
              <Section title="12. Contact Us" id="contact">
                <P>
                  If you have any questions, concerns, or requests relating to this Privacy Policy or your personal data, please contact us using any of the methods below:
                </P>
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
                <P style={{ marginTop: "1.2rem", color: MUTED, fontSize: "0.85rem" }}>
                  We aim to respond to all privacy-related requests within 30 days of receipt.
                </P>
              </Section>

            </Col>
          </Row>
        </Container>
        <DemoFooter />
      </div>
    </>
  );
}
