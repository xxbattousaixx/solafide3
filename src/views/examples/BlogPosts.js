import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Container, Row, Col } from "reactstrap";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ServiceCarousel from "components/ServiceCarousel.js";

const items = [
  { caption: "Pools",                src: require("assets/img/008.jpg") },
  { caption: "Pools",                src: require("assets/img/l.jpg")   },
  { caption: "Walls",                src: require("assets/img/3.jpg")   },
  { caption: "Decks",                src: require("assets/img/003.jpg") },
  { caption: "Stairways",            src: require("assets/img/009.jpg") },
  { caption: "Walkways & Driveways", src: require("assets/img/2.jpg")   },
  { caption: "Flagstone Walkways",   src: require("assets/img/c1.jpg")  },
  { caption: "Flagstone Walkways",   src: require("assets/img/d.jpg")   },
  { caption: "Driveways",            src: require("assets/img/h.jpg")   },
  { caption: "Before",               src: require("assets/img/k.jpg")   },
  { caption: "After",                src: require("assets/img/j.jpg")   },
  { caption: "After",                src: require("assets/img/i.jpg")   },
  { caption: "After",                src: require("assets/img/n.jpg")   },
  { caption: "After",                src: require("assets/img/q.jpg")   },
  { caption: "Firepit",              src: require("assets/img/w.jpg")   },
];

export default function BlogPosts() {
  const [transform, setTransform] = React.useState(
    "translate3d(0," + (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) + "px,0)"
  );
  const wrapper = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("blog-posts");
    const resetTransform = () => {
      setTransform("translate3d(0," + window.pageYOffset / 3 + "px,0)");
    };
    if (window.innerWidth >= 768) {
      setTransform("translate3d(0," + window.pageYOffset / 3 + "px,0)");
      window.addEventListener("scroll", resetTransform);
    }
    return () => {
      document.body.classList.remove("blog-posts");
      window.removeEventListener("scroll", resetTransform);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Residential Paver Services | Bradenton FL | Solafide</title>
        <meta name="description" content="Expert residential paver cleaning, pool deck restoration &amp; driveway sealing in Bradenton FL. We fix faded pavers, algae, efflorescence &amp; more. Free estimate." />
        <link rel="canonical" href="https://solafide-services.com/residential" />
        <meta property="og:title" content="Residential Paver & Pool Deck Services | Bradenton FL | Solafide" />
        <meta property="og:description" content="Residential paver cleaning, pool deck restoration & driveway sealing in Bradenton FL. We fix algae, faded pavers, efflorescence & slippery surfaces. Free estimate." />
        <meta property="og:url" content="https://solafide-services.com/residential" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Residential Paver & Pool Deck Services | Bradenton FL | Solafide" />
        <meta name="twitter:description" content="We fix faded pavers, algae on pool decks, efflorescence, cracked pool decks & slippery surfaces in Bradenton FL. Free estimate." />
        <meta name="twitter:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta name="twitter:site" content="@SolafideService" />
        <meta name="keywords" content="paver cleaning and sealing Bradenton FL, pool deck restoration near me, pavers turning white efflorescence, algae on pool deck, faded pavers restoration, slippery pool deck solution, cracked pool deck repair, pool deck resurfacing, residential hardscape Bradenton, paver sealing Sarasota, Manatee County paver cleaning, free estimate paver sealing" />
      </Helmet>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header page-header-small header-filter">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/brix.jpg") + ")",
              transform: transform,
            }}
          />
          <div className="content-center">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h1 style={{ color: "orange" }} className="title">
                  Renovate your home with Solafide
                </h1>
              </Col>
            </Row>
          </div>
        </div>

        <br /><br />

        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md="6">
              <ServiceCarousel items={items} />
            </Col>
            <Col md="5">
              <h2 className="profile-title text-left">Residential Hardscape Restoration</h2>
              <p className="profile-description text-left">
                From pool decks and driveways to retaining walls and custom water features — we transform residential outdoor spaces with expert craftsmanship and zero shortcuts. Every project is assessed on-site and priced transparently.
              </p>
              <ul style={{color: 'rgba(255,255,255,0.75)', paddingLeft: '1.2rem', lineHeight: 2, fontSize: '0.95rem', marginTop: '0.5rem'}}>
                <li>Paver cleaning, sealing &amp; joint sand restoration</li>
                <li>Pool deck cleaning, refinishing &amp; anti-slip treatment</li>
                <li>Retaining walls &amp; raised garden beds</li>
                <li>Custom waterfall &amp; water features</li>
                <li>Concrete curbing &amp; landscape borders</li>
                <li>Driveway cleaning, repair &amp; sealing</li>
              </ul>
              <div className="btn-wrapper pt-3">
                <Button className="btn-simple ml-1" color="info" href="/contact-us">
                  <i className="tim-icons icon-bulb-63" /> Contact Us!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <br />

        {/* Problem-aware content section */}
        <Container style={{paddingBottom: '3.5rem'}}>
          <Row className="justify-content-center" style={{marginBottom: '1rem'}}>
            <Col md="10">
              <h2 style={{color: 'orange', textAlign: 'center', marginBottom: '0.5rem'}}>
                Common Hardscape Problems We Fix in Bradenton &amp; Sarasota
              </h2>
              <p style={{color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginBottom: '2.2rem', fontSize: '0.95rem'}}>
                Recognize any of these? We solve them every day across Manatee County and beyond.
              </p>
              {[
                {
                  icon: '⬜',
                  problem: 'Pavers Turning White',
                  detail: 'White chalky patches on your pavers or pool deck are efflorescence — mineral salts pushed to the surface by moisture. Florida\'s humidity makes this extremely common. We remove efflorescence with professional-grade cleaners and seal the surface to prevent it returning. Left untreated, it worsens and can permanently stain the stone.'
                },
                {
                  icon: '🌿',
                  problem: 'Algae on Pool Deck — Slippery Surfaces',
                  detail: 'Algae and mold thrive on unsealed or aging pool decks in Florida\'s warm, wet climate. They create dangerous slip conditions and an eyesore. We pressure wash with algae-specific treatment agents, then apply an anti-slip penetrating sealer that keeps the surface safe and clean for years. If your pool deck is slippery, this is a same-season fix.'
                },
                {
                  icon: '🎨',
                  problem: 'Faded Pavers — Dull, Washed-Out Color',
                  detail: 'UV exposure, oxidation, and surface wear fade even the best pavers over time. Professional paver restoration — deep cleaning followed by a color-enhancing sealer — brings back the original vibrancy without replacement. Wet-look and natural-finish sealers are both available depending on your preference.'
                },
                {
                  icon: '🔧',
                  problem: 'Cracked Pool Deck & Pool Deck Resurfacing',
                  detail: 'Florida\'s ground movement, root pressure, and thermal expansion cause pool deck cracking. Minor to moderate cracks can be repaired and sealed before they widen. For heavily damaged decks, we offer pool deck resurfacing — restoring the surface with new material and a protective sealer, at a fraction of the cost of full replacement.'
                },
                {
                  icon: '🌱',
                  problem: 'Weeds & Ants Between Paver Joints',
                  detail: 'When joint sand washes out, weeds take root and ants nest between your pavers, causing shifting and uneven surfaces. After deep cleaning, we apply polymeric joint sand that hardens and locks in place — eliminating the gaps that weeds and insects exploit. It\'s the single most effective long-term maintenance step for any paver surface.'
                },
              ].map(({icon, problem, detail}) => (
                <div key={problem} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  padding: '1.4rem 0',
                }}>
                  <span style={{fontSize: '1.6rem', lineHeight: 1, flexShrink: 0}}>{icon}</span>
                  <div>
                    <h3 style={{color: '#f5a623', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem'}}>{problem}</h3>
                    <p style={{color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, margin: 0, fontSize: '0.92rem'}}>{detail}</p>
                  </div>
                </div>
              ))}
              <div style={{textAlign: 'center', marginTop: '2.5rem'}}>
                <a href="/contact-us" style={{
                  display: 'inline-block', padding: '14px 40px',
                  background: '#f96332', color: '#fff', borderRadius: '28px',
                  fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(249,99,50,0.35)',
                }}>
                  Get a Free On-Site Estimate
                </a>
                <p style={{color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '0.75rem'}}>
                  Licensed &amp; insured · Bradenton, Sarasota &amp; Manatee County · Same-day response
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <DemoFooter />
      </div>
    </>
  );
}
