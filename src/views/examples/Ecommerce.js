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
        <title>Paver Clean &amp; Seal | Solafide Services Florida</title>
        <meta name="description" content="Professional paver pressure washing &amp; clean and seal by Solafide Services. Remove stains, restore color, and protect surfaces with professional-grade sealants. Serving Florida." />
        <link rel="canonical" href="https://solafide-services.com/clean-seal" />
        <meta property="og:title" content="Paver Cleaning, Pressure Washing & Clean & Seal | Solafide Services" />
        <meta property="og:description" content="Expert paver pressure washing and sealing services across Florida. Remove stains, restore color, and protect your surfaces with professional-grade sealants." />
        <meta property="og:url" content="https://solafide-services.com/clean-seal" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paver Cleaning, Pressure Washing & Clean & Seal | Solafide Services" />
        <meta name="twitter:description" content="Professional paver pressure washing and sealing across Florida. Remove stains, restore color, protect your investment." />
        <meta name="twitter:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta name="twitter:site" content="@SolafideService" />
        <meta name="keywords" content="paver cleaning Florida, pressure washing, clean and seal, paver sealing, driveway cleaning, pool deck cleaning, Solafide Services" />
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

        <DemoFooter />
      </div>
    </>
  );
}
