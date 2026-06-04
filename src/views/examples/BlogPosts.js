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
        <title>Residential Hardscape Services | Paver Cleaning, Pool Decks & More — Solafide Services</title>
        <meta name="description" content="Solafide Services provides expert residential hardscape restoration — paver cleaning & sealing, pool deck refinishing, retaining walls, driveways, and custom waterfall features across Florida." />
        <link rel="canonical" href="https://solafide-services.com/residential" />
        <meta property="og:title" content="Residential Hardscape Services | Solafide Services — Florida" />
        <meta property="og:description" content="Expert residential paver cleaning, sealing, pool deck restoration, retaining walls, and hardscape services across Florida. Free on-site estimates." />
        <meta property="og:url" content="https://solafide-services.com/residential" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Residential Hardscape Services | Solafide Services — Florida" />
        <meta name="twitter:description" content="Expert residential paver cleaning, pool deck restoration, and hardscape services across Florida. Free estimates." />
        <meta name="twitter:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta name="twitter:site" content="@SolafideService" />
        <meta name="keywords" content="residential paver cleaning Florida, pool deck restoration, retaining wall Florida, driveway cleaning, hardscape residential, Solafide Services" />
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

        <br /><br />
        <DemoFooter />
      </div>
    </>
  );
}
