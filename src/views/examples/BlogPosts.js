import React from "react";
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
              <h1 className="profile-title text-left">Residential Services</h1>
              <p className="profile-description text-left">
                We offer a range of services for residential purposes.
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
