
import React from "react";
// ReactJS plugin for a nice carousel
import LazyLoad from 'react-lazyload';
// reactstrap components
import {
  Button,
    Carousel,
    CarouselItem,
    CarouselIndicators,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
const items = [
  {
    altText: "",
    caption: "Pressure Washing",
    src: require("assets/img/007.jpg"),
  },
  {
    altText: "",
    caption: "Masonry",
    src: require("assets/img/006.jpg"),
  },
  {
    altText: "",
    caption: "Window Cleaning",
    src: require("assets/img/005.jpg"),
  },{
    altText: "",
    caption: "Walls",
    src: require("assets/img/dd.jpg"),
  },{
    altText: "",
    caption: "Waterfall",
    src: require("assets/img/yy.jpg"),
  },{
    altText: "",
    caption: "Stairs",
    src: require("assets/img/zz.jpg"),
  },{
    altText: "",
    caption: "Garden",
    src: require("assets/img/vv.jpg"),
  },{
    altText: "",
    caption: "Steps",
    src: require("assets/img/ee.jpg"),
  },{
    altText: "",
    caption: "Garden",
    src: require("assets/img/z.jpg"),
  },{
    altText: "",
    caption: "Hardscapes",
    src: require("assets/img/bb.jpg"),
  },{
    altText: "",
    caption: "Before/After",
    src: require("assets/img/uu.jpg"),
  },{
    altText: "",
    caption: "Garden Walls",
    src: require("assets/img/aa.jpg"),
  },{
    altText: "",
    caption: "Floor",
    src: require("assets/img/y.jpg"),
  },
];
// custom previous button for the slick component




export default function BlogPost() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("blog-post");
    return function cleanup() {
      document.body.classList.remove("blog-post");
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
  };
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header header-filter">
          <div
            className="page-header-image"
            data-parallax={true}
            style={{
              backgroundImage:
                "url(" + require("assets/img/fs.jpg") + ")",
            }}
          />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1 style={{color:'gold'}} className="title">Solafide</h1>
                {/* <div className="author">
                  <img
                    alt="..."
                    className="avatar img-raised"
                    src={require("assets/img/p10.jpg")}
                  />
                </div>
                <br />
                <h4 className="description">Mark Byron</h4> */}
              </Col>
            </Row>
          </Container>
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
                <h1 className="profile-title text-left">Commercial Services</h1>
                {/* <h5 className="text-on-back">Commercial services</h5> */}
                <p className="profile-description text-left">
                  We offer a range of services for commercial purposes. 
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
