import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Container, Row, Col } from "reactstrap";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ServiceCarousel from "components/ServiceCarousel.js";

const items = [
  { caption: "Pressure Washing", src: require("assets/img/007.jpg") },
  { caption: "Masonry",          src: require("assets/img/006.jpg") },
  { caption: "Window Cleaning",  src: require("assets/img/005.jpg") },
  { caption: "Walls",            src: require("assets/img/dd.jpg")  },
  { caption: "Waterfall",        src: require("assets/img/yy.jpg")  },
  { caption: "Stairs",           src: require("assets/img/zz.jpg")  },
  { caption: "Garden",           src: require("assets/img/vv.jpg")  },
  { caption: "Steps",            src: require("assets/img/ee.jpg")  },
  { caption: "Garden",           src: require("assets/img/z.jpg")   },
  { caption: "Hardscapes",       src: require("assets/img/bb.jpg")  },
  { caption: "Before / After",   src: require("assets/img/uu.jpg")  },
  { caption: "Garden Walls",     src: require("assets/img/aa.jpg")  },
  { caption: "Floor",            src: require("assets/img/y.jpg")   },
];

export default function BlogPost() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("blog-post");
    return () => document.body.classList.remove("blog-post");
  }, []);

  return (
    <>
      <Helmet>
        <title>Commercial Hardscape Services | Bradenton FL | Solafide</title>
        <meta name="description" content="Licensed &amp; insured commercial hardscape for HOAs &amp; property managers in Bradenton FL. Paver cleaning, sealing, pressure washing. Best rates. Free estimate." />
        <link rel="canonical" href="https://solafide-services.com/commercial" />
        <meta property="og:title" content="Commercial Hardscape Services | Bradenton FL | Solafide Services" />
        <meta property="og:description" content="Licensed & insured commercial paver cleaning, sealing & pressure washing for HOAs & property managers in Bradenton, Sarasota & Manatee County. Free estimate." />
        <meta property="og:url" content="https://solafide-services.com/commercial" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta property="og:site_name" content="Solafide Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Hardscape Services | Bradenton FL | Solafide Services" />
        <meta name="twitter:description" content="Licensed & insured commercial paver cleaning, sealing & pressure washing for HOAs & property managers. Bradenton, Sarasota, Manatee County. Free estimate." />
        <meta name="twitter:image" content="https://solafide-services.com/og-preview.jpg" />
        <meta name="twitter:site" content="@SolafideService" />
        <meta name="keywords" content="commercial paver cleaning Bradenton FL, HOA paver sealing Florida, commercial pressure washing Bradenton, property management hardscape Manatee County, paver restoration Sarasota, affordable commercial hardscape, best paver sealing company Florida, licensed and insured hardscape, same day pressure washing Florida, free estimate commercial paver" />
      </Helmet>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header header-filter">
          <div
            className="page-header-image"
            data-parallax={true}
            style={{ backgroundImage: "url(" + require("assets/img/fs.jpg") + ")" }}
          />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 style={{ color: "orange" }} className="title">Solafide</h2>
              </Col>
            </Row>
          </Container>
        </div>

        <br /><br />

        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md="6">
              <ServiceCarousel items={items} />
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Commercial Services</h1>
              <p className="profile-description text-left">
                We offer a range of services for commercial purposes.
              </p>
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
