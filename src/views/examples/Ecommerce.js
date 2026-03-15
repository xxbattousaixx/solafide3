import React from "react";
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
              <h1 className="profile-title text-left">Clean &amp; Seal</h1>
              <p className="profile-description text-left">
                We pride ourselves in a safe and efficient experience.
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
