
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Carousel,
     CarouselItem,
     CarouselIndicators
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const items = [
    {
    altText: "",
    caption: "Pools",
    src: require("assets/img/002.jpg"),
  }, {
    altText: "",
    caption: "Pools",
    src: require("assets/img/e.jpg"),
  },  {
    altText: "",
    caption: "Pools",
    src: require("assets/img/f.jpg"),
  },
];

export default function Ecommerce() {
  const [transform, setTransform] = React.useState(
    "translate3d(0," +
      (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) +
      "px,0)"
  );
 const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("ecommerce-page");
    if (window.innerWidth >= 768) {
      var windowScrollTop = window.pageYOffset / 3;
      setTransform("translate3d(0," + windowScrollTop + "px,0)");
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  }, []);
   const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
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
                  <h1 style={{color:'orange'}} className="title">Pressure Washing</h1>
                  <br />
                  {/* <div className="buttons">
                    <Button
                      className="btn-round mr-3 pulse"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="tim-icons icon-bag-16" />
                    </Button>
                    <p>Shop Now!</p>
                  </div> */}
                </Col>
              </Row>
            </Container>
     
          </div>
        </div>
            <br/>
                    <br/>
          
                      <Container>
                      <Row className="justify-content-between">
                        <Col md="6">
                          <Row className="justify-content-between align-items-center">
                            <Carousel
                              activeIndex={activeIndex}
                              next={next}
                              previous={previous}
                            >
                              <CarouselIndicators
                                items={items}
                                activeIndex={activeIndex}
                                onClickHandler={goToIndex}
                              />
                              {items.map((prop, key) => {
                                return (
                                  <CarouselItem
                                    onExiting={onExiting}
                                    onExited={onExited}
                                    key={prop.src}
                                  >
                                    <img src={prop.src} alt="..." className="d-block" />
                                    <div className="carousel-caption d-none d-md-block">
                                      <h5 style={{color:'#C83CB9', fontWeight:'bold'}} >{prop.caption}</h5>
                                    </div>
                                  </CarouselItem>
                                );
                              })}
                              <a
                                className="carousel-control-prev"
                                data-slide="prev"
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  previous();
                                }}
                                role="button"
                              >
                                <i className="tim-icons icon-minimal-left" />
                              </a>
                              <a
                                className="carousel-control-next"
                                data-slide="next"
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  next();
                                }}
                                role="button"
                              >
                                <i className="tim-icons icon-minimal-right" />
                              </a>
                            </Carousel>
                          </Row>
                        </Col>
                        <Col md="5">
                          <h1 className="profile-title text-left">Clean & Seal</h1>
                          {/* <h5 className="text-on-back">Commercial services</h5> */}
                          <p className="profile-description text-left">
                            We pride ourselves in a safe and efficient experience. 
                          </p>
                          <div className="btn-wrapper pt-3">
                            {/* <Button
                              className="btn-simple"
                              color="primary"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="tim-icons icon-book-bookmark" /> Bookmark
                            </Button> */}
                            <Button
                              className="btn-simple ml-1"
                              color="info"
                              href="/contact-us"
                            >
                              <i className="tim-icons icon-bulb-63" /> Contact Us!
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    <br/>
                    <br/>
        <DemoFooter />
      </div>
    </>
  );
}
