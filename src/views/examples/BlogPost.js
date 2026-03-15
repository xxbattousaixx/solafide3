import React from "react";
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
                <h1 style={{ color: "orange" }} className="title">Solafide</h1>
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
