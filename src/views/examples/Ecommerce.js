import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Container, Row, Col } from "reactstrap";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ServiceCarousel from "components/ServiceCarousel.js";

const items = [
  { caption: "Clean & Seal", src: require("assets/img/002.jpg") },
  { caption: "Clean & Seal", src: require("assets/img/e.jpg")   },
  { caption: "Clean & Seal", src: require("assets/img/f.jpg")   },
];

export default function Ecommerce() {
  const [transform, setTransform] = React.useState(
    "translate3d(0," + (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) + "px,0)"
  );
  const wrapper = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("ecommerce-page");
    const resetTransform = () => {
      setTransform("translate3d(0," + window.pageYOffset / 3 + "px,0)");
    };
    if (window.innerWidth >= 768) {
      setTransform("translate3d(0," + window.pageYOffset / 3 + "px,0)");
      window.addEventListener("scroll", resetTransform);
    }
    return () => {
      document.body.classList.remove("ecommerce-page");
      window.removeEventListener("scroll", resetTransform);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Paver Clean &amp; Seal | Bradenton FL | Solafide</title>
        <meta name="description" content="Paver sealing &amp; pressure washing in Bradenton FL. We remove efflorescence, restore faded pavers &amp; seal travertine pool decks. Licensed &amp; insured. Free estimate." />
        <link rel="canonical" href="https://solafide-services.com/clean-seal" />
        <meta property="og:title" content="Paver Clean & Seal | Bradenton FL | Solafide Services" />
        <meta property="og:description" content="Paver sealing, efflorescence removal & pool deck cleaning in Bradenton FL. Licensed & insured. Free on-site estimate from Solafide Services." />
        <meta property="og:url" content="https://solafide-services.com/clean-seal" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paver Clean & Seal | Bradenton FL | Solafide Services" />
        <meta name="twitter:description" content="Paver sealing, efflorescence removal, travertine pool deck sealing & pressure washing in Bradenton FL. Free estimate." />
        <meta name="twitter:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta name="twitter:site" content="@SolafideService" />
        <meta name="keywords" content="paver sealing Bradenton FL, paver sealing cost, paver sealing price, efflorescence removal pavers, polymeric sand paver joints, travertine pool deck sealing, how to clean pavers, pool deck cleaning Bradenton, pressure washing Bradenton FL, paver cleaning and sealing, free estimate paver sealing, licensed and insured" />
      </Helmet>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="header header-1">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/rcs.jpg") + ")",
                transform: transform,
              }}
            />
            <Container>
              <Row>
                <Col className="mr-auto text-left" lg="6" md="7">
                  <h1 style={{ color: "orange" }} className="title">Pressure Washing</h1>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <br /><br />

        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md="6">
              <ServiceCarousel items={items} />
            </Col>
            <Col md="5">
              <h2 className="profile-title text-left">Paver Clean &amp; Seal</h2>
              <p className="profile-description text-left">
                Over time, pavers absorb oils, stains, and environmental buildup that regular hosing can't remove. Our professional clean &amp; seal process restores the original color, tightens joint sand, and locks in a protective barrier — extending the life of your surfaces by years.
              </p>
              <p className="profile-description text-left">
                We use commercial-grade pressure washing equipment and professionally formulated sealants suited to Florida's climate — providing UV protection, moisture resistance, and algae prevention that consumer products simply can't match.
              </p>
              <div className="btn-wrapper pt-3">
                <Button className="btn-round" color="warning" href="/contact-us">
                  Get a Free Estimate
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <br />

        {/* Why Clean & Seal Section */}
        <Container style={{paddingBottom: '3rem'}}>
          <Row className="justify-content-center text-center" style={{marginBottom: '2rem'}}>
            <Col md="8">
              <h2 style={{color: 'orange'}}>Why Professional Pressure Washing &amp; Sealing Matters</h2>
              <p style={{color: 'rgba(255,255,255,0.7)', lineHeight: 1.8}}>
                Florida's heat, humidity, and UV exposure accelerate the degradation of unprotected paver surfaces. Without regular cleaning and sealing, pavers lose color, allow weed growth between joints, and develop slippery algae buildup on pool decks — conditions that worsen quickly and cost significantly more to correct later.
              </p>
            </Col>
          </Row>
          <Row>
            {[
              {title: 'Deep Stain Removal', desc: 'We eliminate oil stains, rust, efflorescence, algae, and years of accumulated grime using commercial-grade equipment and appropriate cleaning agents for each surface type.'},
              {title: 'Color Restoration', desc: 'Professional pressure washing restores the original vibrancy and texture of your pavers — dramatically improving curb appeal without the cost of replacement.'},
              {title: 'Long-Lasting Sealer Protection', desc: 'Our professional-grade sealants provide UV protection, repel moisture, inhibit weed growth in joints, and prevent algae — keeping your surfaces looking clean and protected for years.'},
              {title: 'Joint Sand Stabilization', desc: 'After cleaning, we re-apply polymeric joint sand as needed, locking pavers in place and preventing the ant hills, weeds, and shifting that unsanded joints attract.'},
            ].map(({title, desc}) => (
              <Col key={title} md="6" style={{marginBottom: '1.5rem'}}>
                <div style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,166,35,0.2)', borderRadius: '12px', padding: '1.5rem'}}>
                  <h5 style={{color: '#f5a623', fontWeight: 700, marginBottom: '0.5rem'}}>{title}</h5>
                  <p style={{color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, margin: 0, fontSize: '0.92rem'}}>{desc}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center text-center" style={{marginTop: '2rem'}}>
            <Col md="8">
              <h3 style={{color: '#ffffff', marginBottom: '1rem'}}>Serving Homeowners, HOAs &amp; Commercial Properties Across Florida</h3>
              <p style={{color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem'}}>
                Whether it's a residential driveway, a pool deck, a commercial parking area, or an entire HOA community — we have the crew, equipment, and expertise to handle it. Every job is assessed on-site, priced transparently, and delivered with no shortcuts.
              </p>
              <Button className="btn-round" color="warning" href="/contact-us" style={{fontWeight: 700, padding: '12px 36px'}}>
                Request Your Free On-Site Estimate
              </Button>
            </Col>
          </Row>
        </Container>

        {/* FAQ / keyword-rich info section */}
        <Container style={{paddingBottom: '3rem'}}>
          <Row className="justify-content-center" style={{marginBottom: '1.5rem'}}>
            <Col md="10">
              <h2 style={{color: 'orange', textAlign: 'center', marginBottom: '0.5rem'}}>
                Common Questions About Paver Sealing &amp; Cleaning in Bradenton FL
              </h2>
              <p style={{color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.95rem'}}>
                Serving Bradenton, Sarasota, and Manatee County — licensed &amp; insured.
              </p>
              {[
                {
                  q: 'How much does paver sealing cost in Bradenton FL?',
                  a: 'Paver sealing prices in Bradenton typically range from $0.75 to $2.50 per square foot depending on the surface condition, paver type, and sealer product selected. A standard residential driveway or pool deck runs $300–$900. We provide a free on-site estimate with transparent, itemized pricing — no hidden fees. Call 941.518.1657 or use our contact form.'
                },
                {
                  q: 'Why are my pavers turning white? (Efflorescence)',
                  a: 'White, chalky deposits on pavers are caused by efflorescence — mineral salts migrating to the surface as water evaporates through the paver. Florida\'s humidity accelerates this process. We use professional efflorescence cleaners and a controlled pressure washing technique to safely remove the deposits without etching the paver surface. Sealing after treatment prevents recurrence.'
                },
                {
                  q: 'What is polymeric sand and why does it matter for paver joints?',
                  a: 'Polymeric sand is a specially blended joint sand that hardens when activated with water, creating a firm bond between pavers. Unlike regular sand, it resists ant infestation, weed growth, and washout. After every clean & seal service, we re-apply polymeric joint sand as needed to lock pavers in place and prevent shifting — a step most budget operators skip.'
                },
                {
                  q: 'Do you seal travertine pool decks?',
                  a: 'Yes. Travertine requires a penetrating (impregnating) sealer rather than a surface film sealer to avoid trapping moisture and causing spalling. We use travertine-specific professional-grade sealers that protect against UV fade, staining, and algae while preserving the stone\'s natural look and texture. Travertine pool deck sealing is one of our most requested services in the Sarasota and Bradenton area.'
                },
                {
                  q: 'My pool deck is slippery and has algae — what can you do?',
                  a: 'Algae and mold growth on pool decks create a serious slip hazard. We use hot-water pressure washing with algae-specific treatment agents to remove all biological growth, then apply an anti-slip sealer to restore traction. Our pool deck restoration process addresses slippery surfaces, staining, faded color, and micro-crack sealing in a single visit.'
                },
              ].map(({q, a}) => (
                <div key={q} style={{
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  padding: '1.4rem 0',
                }}>
                  <h3 style={{color: '#f5a623', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem'}}>{q}</h3>
                  <p style={{color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, margin: 0, fontSize: '0.92rem'}}>{a}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>

        <DemoFooter />
      </div>
    </>
  );
}
