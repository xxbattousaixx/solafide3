
import React from "react";
import { Helmet } from 'react-helmet-async';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


const items2 = [
  {
    content: (
      <div className="info info-primary">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/gj.png")}
            />
          </a>
        </div>
        <h4 className="info-title"><b>Gregory J.</b> St. Petersburg, FL ⭐⭐⭐⭐⭐ </h4>
       <p className="description">
          I would highly recommend this company because of the quality of the work and of the personnel hired to perform the job. I have future plans for pavers and will use Solafide again.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <div className="info info-warning">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/jr.png")}
            />
          </a>
        </div>
        <h4 className="info-title">&nbsp;&nbsp;&nbsp;&nbsp;<b>Julia R.</b> Bradenton, FL &nbsp;&nbsp;&nbsp;&nbsp; ⭐⭐⭐⭐⭐</h4>
       <p className="description">
          What a pleasure working with Edgar. Great service very polite such a great experience and amazing work results !! Very satisfied and would recommend them 200% Thank You
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
];
// const PrevButton = (props) => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-prev slick-arrow"
//       color="primary"
//       aria-label="Previous"
//       type="button"
//       onClick={props.onClick}
//     >
//       <i className="tim-icons icon-minimal-left" />
//     </Button>
//   );
// };
// // custom next button for the slick component
// const NextButton = (props) => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-next slick-arrow"
//       color="primary"
//       aria-label="Next"
//       type="button"
//     >
//       <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
//     </Button>
//   );
// };
export default function Home() {
    const [carousel1Index, setCarousel1Index] = React.useState(0);
    const [carousel2Index, setCarousel2Index] = React.useState(0);
    const [animating1, setAnimating1] = React.useState(false);
    const [animating2, setAnimating2] = React.useState(false);
    const onExiting = (carousel) => {
      if (carousel === 1) {
        setAnimating1(true);
      } else {
        setAnimating2(true);
      }
    };
  
    const onExited = (carousel) => {
      if (carousel === 1) {
        setAnimating1(false);
      } else {
        setAnimating2(false);
      }
    };
    const next = (carousel, items) => {
      if (carousel === 1) {
        if (animating1) {
          return;
        }
      } else {
        if (animating2) {
          return;
        }
      }
      let currentIndex = -1;
      if (carousel === 1) {
        currentIndex = carousel1Index;
      } else {
        currentIndex = carousel2Index;
      }
      const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      if (carousel === 1) {
        setCarousel1Index(nextIndex);
      } else {
        setCarousel2Index(nextIndex);
      }
    };
    const previous = (carousel, items) => {
      if (carousel === 1) {
        if (animating1) {
          return;
        }
      } else {
        if (animating2) {
          return;
        }
      }
      let currentIndex = -1;
      if (carousel === 1) {
        currentIndex = carousel1Index;
      } else {
        currentIndex = carousel2Index;
      }
      const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      if (carousel === 1) {
        setCarousel1Index(nextIndex);
      } else {
        setCarousel2Index(nextIndex);
      }
    };
    const goToIndex = (newIndex, carousel) => {
      if (carousel === 1) {
        if (animating1) {
          return;
        }
      } else {
        if (animating2) {
          return;
        }
      }
      if (carousel === 1) {
        setCarousel1Index(newIndex);
      } else {
        setCarousel2Index(newIndex);
      }
    };
  const wrapper = React.useRef(null);

  React.useEffect(() => {
    
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("home-page");
    return function cleanup() {
      document.body.classList.remove("home-page");
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Solafide Services | Paver Cleaning, Sealing & Pool Deck Restoration — Florida</title>
        <meta name="description" content="Solafide Services — Florida's trusted specialists in paver cleaning, sealing, pool deck restoration, and pressure washing. Free on-site estimates. Residential & commercial." />
        <link rel="canonical" href="https://solafide-services.com/home" />
        <meta property="og:title" content="Solafide Services | Paver Cleaning, Sealing & Pool Deck Restoration — Florida" />
        <meta property="og:description" content="Restore your pavers, driveways, and pool decks to like-new condition. Expert clean & seal, pressure washing, and hardscape restoration across Florida." />
        <meta property="og:url" content="https://solafide-services.com" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="paver cleaning Florida, paver sealing, pool deck restoration, pressure washing, driveway cleaning, hardscape restoration, Solafide Services" />
      </Helmet>
      <ColorNavbar />
      <div className="wrapper index-page" ref={wrapper}>
        
        <IndexHeader />
  </div>
  


  <Container fluid>
    <Row>
      <Col className="text-center" xs="12" style={{paddingTop:'2.5rem', paddingBottom:'1rem'}}>
        <p style={{letterSpacing:'0.2em', fontSize:'0.72rem', fontWeight:700, color:'#f5a623', textTransform:'uppercase', marginBottom:'0.5rem'}}>
          The Solafide Difference
        </p>
        <h2 style={{color:'#ffffff', fontWeight:800, fontSize:'clamp(1.6rem,4vw,2.6rem)', marginBottom:'0.5rem'}}>
          See What a Proper Restoration Actually Looks Like
        </h2>
        <p style={{color:'rgba(255,255,255,0.6)', maxWidth:'520px', margin:'0 auto 1.5rem', fontSize:'1rem'}}>
          Most surfaces just need the right treatment — not a full replacement. Here's what our clients experience.
        </p>
      </Col>
    </Row>
       <Row>
                <Col lg="6">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/11.jpg") +
                          ")",
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <CardTitle tag="h3">BEFORE</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/22.jpg") + ")",
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <CardTitle tag="h3">AFTER</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
           
              </Row>
  </Container>


  <div className="content-center">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1 style={{color:'orange'}} className="title">
                  Your Outdoor Surfaces Deserve to Look Their Best
                </h1>
                <p style={{color:'rgba(255,255,255,0.75)', fontSize:'1.1rem', maxWidth:'560px', margin:'0 auto 1.5rem', lineHeight:1.7}}>
                  We specialize in hardscape restoration — paver cleaning &amp; sealing, pool deck refinishing, pressure washing, and concrete curbing. No rushed jobs. Honest pricing. Results you'll see immediately.
                </p>
                <Button
                  className="btn-round"
                  color="warning"
                  href="/about-us"
                  style={{fontWeight:700, fontSize:'1rem', padding:'12px 32px', marginBottom:'0.75rem'}}
                >
                  Get Your Free Quote
                </Button>
                <p style={{color:'rgba(255,255,255,0.45)', fontSize:'0.8rem', marginTop:'0.5rem'}}>
                  Trusted by homeowners, HOAs &amp; property managers across Florida
                </p>
                <div style={{marginTop:'1rem'}}>
                <Button
                  className="btn-round btn-icon"
                  color="primary"
                  href="https://www.facebook.com/SolafideL7/"
                >
                  <i className="fab fa-facebook" />
                </Button>
                <Button
                  className="btn-round btn-icon ml-1"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-instagram" />
                </Button>
                </div>
              </Col>
            </Row>
          </div>  
                    <Container>
                      <Row>
                        <Col lg="6" md="6">
                          <Card className="card-blog card-plain">
                            <div className="card-image">
                              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img
                                  alt="..."
                                  className="img rounded"
                                  src={require("assets/img/a.jpg")}
                                />
                              </a>
                            </div>
                            <CardBody>
                              <h6 className="category text-primary">Outdoor Lighting</h6>
                              <CardTitle tag="h4">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Illuminate Your Property's Full Potential
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                Professionally designed landscape lighting that adds security, curb appeal, and ambiance — turning your outdoor space into a private retreat you'll actually use after dark.
                              </p>
                        
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" md="6">
                          <Card className="card-blog card-plain">
                            <div className="card-image">
                              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img
                                  alt="..."
                                  className="img rounded"
                                  src={require("assets/img/waterfall.JPG")}
                                />
                              </a>
                            </div>
                            <CardBody>
                              <h6 className="category text-info">Custom Waterfalls</h6>
                              <CardTitle tag="h4">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Water Features That Command Attention
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                A custom waterfall feature becomes the centerpiece of your landscape — adding tranquility, beauty, and measurable value to your home. Built to last, crafted to impress.
                              </p>
                              {/* <CardFooter>
                                <div className="author">
                                  <img
                                    alt="..."
                                    className="avatar img-raised"
                                    src={require("assets/img/johana.jpg")}
                                  />
                                  <span className="ml-1">Johanna Zmud</span>
                                </div>
                                <div className="stats stats-right">
                                  <i className="tim-icons icon-watch-time" /> 5 min read
                                </div>
                              </CardFooter> */}
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" md="6">
                          <Card className="card-blog card-plain">
                            <div className="card-image">
                              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img
                                  alt="..."
                                  className="img rounded"
                                  src={require("assets/img/c.JPG")}
                                />
                              </a>
                            </div>
                            <CardBody>
                              <h6 className="category text-warning">Retaining Walls</h6>
                              <CardTitle tag="h4">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Engineered to Last. Designed to Impress.
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                Our retaining walls solve real drainage and erosion problems while elevating your property's aesthetic. Durable construction, clean lines, and zero shortcuts — every time.
                              </p>
                              {/* <CardFooter>
                                <div className="author">
                                  <img
                                    alt="..."
                                    className="avatar img-raised"
                                    src={require("assets/img/christian.jpg")}
                                  />
                                  <span className="ml-1">Marc Oliver</span>
                                </div>
                                <div className="stats stats-right">
                                  <i className="tim-icons icon-heart-2" /> 2.4K
                                </div>
                              </CardFooter> */}
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" md="6">
                          <Card className="card-blog card-plain">
                            <div className="card-image">
                              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img
                                  alt="..."
                                  className="img rounded"
                                  src={require("assets/img/1130.jpg")}
                                />
                              </a>
                            </div>
                            <CardBody>
                              <h6 className="category text-warning">Concrete Curbing</h6>
                              <CardTitle tag="h4">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  The Finishing Touch That Transforms Everything
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                Precision-poured concrete curbing defines your landscape, prevents mulch runoff, and gives your driveway and garden beds a polished, professional appearance that holds up for years.
                              </p>
                              {/* <CardFooter>
                                <div className="author">
                                  <img
                                    alt="..."
                                    className="avatar img-raised"
                                    src={require("assets/img/christian.jpg")}
                                  />
                                  <span className="ml-1">Marc Oliver</span>
                                </div>
                                <div className="stats stats-right">
                                  <i className="tim-icons icon-heart-2" /> 2.4K
                                </div>
                              </CardFooter> */}
                            </CardBody>
                          </Card>
                        </Col>
                     
                      </Row>
                    </Container>

 

               <div className="testimonials-2">
                        <Container>
                          <Row>
                            <Col className="text-center" xs="12" style={{paddingTop:'2.5rem', paddingBottom:'1rem'}}>
                              <p style={{letterSpacing:'0.2em', fontSize:'0.72rem', fontWeight:700, color:'#f5a623', textTransform:'uppercase', marginBottom:'0.5rem'}}>
                                Real Clients. Real Results.
                              </p>
                              <h2 style={{color:'#ffffff', fontWeight:800, fontSize:'clamp(1.5rem,3.5vw,2.4rem)', marginBottom:'0.25rem'}}>
                                What Florida Homeowners Are Saying
                              </h2>
                              <p style={{color:'rgba(255,255,255,0.55)', fontSize:'0.9rem', marginBottom:'0'}}>
                                5-star service from first contact to final walkthrough
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                              <Carousel
                                activeIndex={carousel2Index}
                                next={() => next(2, items2)}
                                previous={() => previous(2, items2)}
                              >
                                <CarouselIndicators
                                  items={items2}
                                  activeIndex={carousel2Index}
                                  onClickHandler={(newIndex) => goToIndex(newIndex, 2)}
                                />
                                {items2.map((item, key) => {
                                  return (
                                    <CarouselItem
                                      onExiting={() => onExiting(2)}
                                      onExited={() => onExited(2)}
                                      key={key}
                                      className="justify-content-center"
                                    >
                                      {item.content}
                                    </CarouselItem>
                                  );
                                })}
                                <a
                                  className="carousel-control-prev"
                                  data-slide="prev"
                                  href="#pablo"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    previous(2, items2);
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
                                    next(2, items2);
                                  }}
                                  role="button"
                                >
                                  <i className="tim-icons icon-minimal-right" />
                                </a>
                              </Carousel>
                            </Col>
                          </Row>
                        </Container>
                      </div>
        {/* Urgency / Lead Conversion Section */}
        <div style={{
          background:'linear-gradient(135deg,rgba(245,166,35,0.12) 0%,rgba(245,166,35,0.04) 100%)',
          borderTop:'1px solid rgba(245,166,35,0.2)',
          borderBottom:'1px solid rgba(245,166,35,0.2)',
          padding:'4rem 0'
        }}>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8" md="10" xs="12">
                <p style={{letterSpacing:'0.2em', fontSize:'0.72rem', fontWeight:700, color:'#f5a623', textTransform:'uppercase', marginBottom:'0.6rem'}}>
                  Now Scheduling in Your Area
                </p>
                <h2 style={{color:'#ffffff', fontWeight:800, fontSize:'clamp(1.6rem,4vw,2.8rem)', lineHeight:1.2, marginBottom:'1rem'}}>
                  Ready to Restore Your Pavers, Driveway, or Pool Deck?
                </h2>
                <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.05rem', lineHeight:1.75, marginBottom:'0.5rem', maxWidth:'540px', margin:'0 auto 0.75rem'}}>
                  Spots fill up fast — especially heading into peak season. Get your free on-site estimate before your preferred dates are gone.
                </p>
                <ul style={{listStyle:'none', padding:0, margin:'0 auto 2rem', display:'inline-block', textAlign:'left', color:'rgba(255,255,255,0.75)', fontSize:'0.95rem', lineHeight:2}}>
                  <li><span style={{color:'#f5a623', marginRight:'8px'}}>✓</span> No-pressure, no-obligation estimate</li>
                  <li><span style={{color:'#f5a623', marginRight:'8px'}}>✓</span> Transparent, upfront pricing</li>
                  <li><span style={{color:'#f5a623', marginRight:'8px'}}>✓</span> Residential &amp; commercial — we handle both</li>
                  <li><span style={{color:'#f5a623', marginRight:'8px'}}>✓</span> Results you can see the same day</li>
                </ul>
                <div>
                  <Button
                    className="btn-round"
                    color="warning"
                    href="/about-us"
                    style={{fontWeight:700, fontSize:'1.05rem', padding:'14px 40px', marginRight:'12px'}}
                  >
                    Request Your Free Quote
                  </Button>
                  <Button
                    className="btn-round btn-outline-default"
                    color="default"
                    href="/gallery"
                    style={{fontWeight:600, fontSize:'1rem', padding:'13px 32px'}}
                  >
                    View Our Work
                  </Button>
                </div>
                <p style={{color:'rgba(255,255,255,0.35)', fontSize:'0.78rem', marginTop:'1.2rem'}}>
                  Serving homeowners, HOAs &amp; property managers across Florida — Paver Cleaning · Sealing · Pool Decks · Pressure Washing
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
   

    </>
  );
}
