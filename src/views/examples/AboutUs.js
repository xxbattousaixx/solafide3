
import React from "react";
import LazyLoad from 'react-lazyload';
import {Helmet} from "react-helmet-async";
import Repairs from "components/Repairs.tsx";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  Card, 
  CardBody,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";



export default function AboutUs() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("about-us");
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  }, []);
  // const onExiting = () => {
  //   setAnimating(true);
  // };

  // const onExited = () => {
  //   setAnimating(false);
  // };

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };
  return (
    <>
      <Helmet>
        <title>About Us | Solafide Services — Florida Masonry Specialists</title>
        <meta name="description" content="Learn about Solafide Services — a Florida-based masonry company specializing in interlocking pavers, pool decks, waterfall features, stone work, and concrete landscaping." />
        <link rel="canonical" href="https://solafide-services.com/about-us" />
        <meta property="og:title" content="About Solafide Services | Florida Masonry & Stonework" />
        <meta property="og:url" content="https://solafide-services.com/about-us" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div style={{
          position:'relative',
          overflow:'hidden',
          paddingTop:'80px',
          background:'linear-gradient(180deg,#1d1f3a 0%,#1a1c35 100%)'
        }}>
          {/* decorative path image */}
          <LazyLoad><img
            alt=""
            className="path path3"
            src={require("assets/img/path3.png")}
            style={{position:'absolute',top:0,right:0,pointerEvents:'none',opacity:0.5}}
          /></LazyLoad>
          <Container style={{paddingTop:'40px', paddingBottom:'60px'}}>

              {/* — Hero headline — */}
              <Row className="justify-content-center text-center">
                <Col lg="10" md="11" xs="12">
                  <p style={{
                    letterSpacing:'0.22em',
                    fontSize:'0.72rem',
                    fontWeight:700,
                    color:'#f5a623',
                    textTransform:'uppercase',
                    marginBottom:'0.6rem'
                  }}>
                    Florida&rsquo;s Premier Masonry &amp; Stonework Specialists
                  </p>
                  <h1 style={{
                    fontSize:'clamp(2.4rem, 6vw, 4rem)',
                    fontWeight:800,
                    lineHeight:1.1,
                    marginBottom:'1rem',
                    color:'#ffffff'
                  }}>
                    <span style={{color:'#f5a623'}}>Solafide</span> Services
                  </h1>
                  <p style={{
                    fontSize:'clamp(1rem, 2.5vw, 1.25rem)',
                    fontWeight:500,
                    color:'rgba(255,255,255,0.75)',
                    marginBottom:'2rem',
                    fontStyle:'italic'
                  }}>
                    &ldquo;Trained Professionals. Exceptional Results. Sensible Investment.&rdquo;
                  </p>
                  <div style={{
                    width:'60px',
                    height:'3px',
                    background:'#f5a623',
                    margin:'0 auto 2.4rem'
                  }} />
                </Col>
              </Row>

              {/* — Company story — */}
              <Row className="justify-content-center text-center" style={{marginBottom:'2.4rem'}}>
                <Col lg="8" md="10" xs="12">
                  <p style={{
                    fontSize:'clamp(0.95rem, 2vw, 1.1rem)',
                    lineHeight:1.85,
                    color:'rgba(255,255,255,0.88)',
                    marginBottom:'1.4rem'
                  }}>
                    Solafide Services is a Florida-based masonry and stonework company built on a single promise:
                    to transform your outdoor spaces with craftsmanship that lasts a lifetime.
                    From interlocking pavers and pool decks to retaining walls, waterfall features,
                    concrete landscaping, and pressure washing &mdash; we deliver solutions that are as
                    durable as they are beautiful.
                  </p>
                  <p style={{
                    fontSize:'clamp(0.95rem, 2vw, 1.1rem)',
                    lineHeight:1.85,
                    color:'rgba(255,255,255,0.88)'
                  }}>
                    The name <strong style={{color:'#f5a623'}}>Solafide</strong> &mdash; meaning
                    &ldquo;by faith alone&rdquo; &mdash; reflects the trust and accountability we
                    bring to every client relationship. Guided by integrity, we approach every project
                    with full transparency, meticulous attention to detail, and an unwavering commitment
                    to exceeding your expectations.
                  </p>
                </Col>
              </Row>

              {/* — Service pillars — */}
              <Row className="justify-content-center text-center" style={{marginBottom:'3rem', gap:'0.5rem 0'}}>
                {[
                  {icon:'icon-atom', label:'Interlocking Pavers'},
                  {icon:'icon-spaceship', label:'Pool Decks'},
                  {icon:'icon-components', label:'Retaining Walls'},
                  {icon:'icon-single-02', label:'Waterfall Features'},
                  {icon:'icon-settings-gear-63', label:'Concrete Landscaping'},
                  {icon:'icon-zoom-split', label:'Pressure Washing'},
                ].map(({icon, label}) => (
                  <Col key={label} xs="6" sm="4" md="2" style={{marginBottom:'1rem'}}>
                    <div style={{
                      display:'flex',
                      flexDirection:'column',
                      alignItems:'center',
                      gap:'0.5rem'
                    }}>
                      <div style={{
                        width:'48px',
                        height:'48px',
                        borderRadius:'50%',
                        background:'rgba(245,166,35,0.12)',
                        border:'1px solid rgba(245,166,35,0.4)',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                      }}>
                        <i className={`tim-icons ${icon}`} style={{color:'#f5a623', fontSize:'1.1rem'}} />
                      </div>
                      <span style={{
                        fontSize:'0.75rem',
                        fontWeight:600,
                        color:'rgba(255,255,255,0.8)',
                        letterSpacing:'0.04em'
                      }}>{label}</span>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* — Core values — */}
              <Row className="justify-content-center" style={{marginBottom:'3rem'}}>
                {[
                  {title:'Transparency', body:'No hidden costs or surprises. We keep you informed at every stage of the project.'},
                  {title:'Craftsmanship', body:'Every stone, paver, and pour is executed to the highest standard of quality and precision.'},
                  {title:'Accountability', body:'We stand behind our work. If it isn\'t right, we make it right — no excuses.'},
                ].map(({title, body}) => (
                  <Col key={title} md="4" xs="12" style={{marginBottom:'1.2rem', padding:'0 0.75rem'}}>
                    <div style={{
                      background:'rgba(255,255,255,0.04)',
                      border:'1px solid rgba(245,166,35,0.2)',
                      borderRadius:'12px',
                      padding:'1.6rem 1.4rem',
                      height:'100%'
                    }}>
                      <h5 style={{color:'#f5a623', fontWeight:700, marginBottom:'0.6rem', fontSize:'1rem'}}>{title}</h5>
                      <p style={{color:'rgba(255,255,255,0.78)', fontSize:'0.9rem', lineHeight:1.7, margin:0}}>{body}</p>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* — Repair widget — */}
              <Row className="justify-content-center">
                <Col lg="10" xs="12">
                  <Repairs />
                </Col>
              </Row>

            </Container>
        </div>
        <div className="features-1">
          {/* <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Badge color="warning">Insight</Badge>
                <h1 className="title">Full-Funnel Social Analytics</h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <LazyLoad><img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/primary.png")}
                    />
                    <i className="tim-icons icon-user-run" />
                  </div>
                  <h4 className="info-title">Social Conversations</h4>
                  <p className="description">
                    Gain access to the demographics, psychographics, and
                    location of unique people.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <LazyLoad><img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/success.png")}
                    />
                    <i className="tim-icons icon-atom" />
                  </div>
                  <h4 className="info-title">Analyze Performance</h4>
                  <p className="description">
                    Unify data from Facebook, Instagram, Twitter, LinkedIn, and
                    Youtube to gain rich insights.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <LazyLoad><img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="tim-icons icon-gift-2" />
                  </div>
                  <h4 className="info-title">Measure Conversions</h4>
                  <p className="description">
                    Track actions taken on your website, understand the impact
                    on your bottom line.
                  </p>
                </div>
              </Col>
            </Row>
          </Container> */}
        </div>
        <div className="section about-description">
          <LazyLoad><img
            alt="..."
            className="path path4"
            src={require("assets/img/path4.png")}
          /></LazyLoad>
          <Container>
            <Row className="mb-5">
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 style={{color:'orange'}} className="title">Specialized in Masonry</h2>
                <h4 className="description">
                  Dedicatedly performing artisanal work in the state of Florida -- we provide residential and commercial services.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <LazyLoad><img
                  alt="..."
                  className="d-block"
                  src={require("assets/img/based.jpg")}
                /></LazyLoad>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section about-pricing">
          <Container>
            <Row className="align-items-center">
              <Col className="mx-auto" lg="5" md="10" xs="12">
                <h1 style={{color:'orange'}} className="title">You should contact us!</h1>
                <p className="description">
                  Our labor is performed with the utmost attention to detail, providing lasting value and a pleasant experience for our customers.
                </p>
                 <Row>
                                <Col className="mb-3" md="12" sm="12">
                                <Form
                                                 action="https://postmail.invotes.com/send"
                                                  className="p-3"
                                                  id="contact_form"
                                                  method="post"
                                                  role="form"
                                                >
                                                    <input
                                                      type="hidden"
                                                      name="access_token"
                                                      value="u3i8mym4hhvek1bb4z1p5qqv"
                                                    />
                                                    <input
                                                      type="hidden"
                                                      name="success_url"
                                                      value=".?message=Email+Successfully+Sent%21&isError=0"
                                                    />
                                                    <input
                                                      type="hidden"
                                                      name="error_url"
                                                      value=".?message=Email+could+not+be+sent.&isError=1"
                                                    />
                                                    
                                  <InputGroup>
                                    <Input defaultValue="Full Name" type="text" name="subject" />
                                  </InputGroup>
                                  <InputGroup>
                                    <Input defaultValue="Your Email" type="text" name="text" />
                                  </InputGroup>
                                   <InputGroup>
                                    <Input defaultValue="Message" type="textarea" name="extra_Message" />
                                  </InputGroup>
                                   <div className="submit">
                                    <input
                                      type="hidden"
                                      name="access_token"
                                      value="63yiwt3vt3p7kwh8m7zcdmd0"
                                    />
                                  <Button
                                    className="btn-icon btn-round"
                                    color="info"
                                     id="submit_form"
                                      type="submit"
                                  >
                                    <i className="tim-icons icon-send" />
                                  </Button></div>
                                   </Form>
                                </Col>
                              </Row>
              </Col>
          <Col className="mx-auto" lg="5" md="10" xs="12">
                <h1 style={{color:'orange'}} className="title">Solafide Paver Sealer</h1>
                <p className="description">
                  House product you can purchase for personal use
                </p>
               <Col lg="12">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/ps.jpg") + ")",
                  }}
                >
                  <CardBody className="text-right">
               
                    <Button
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Buy Now
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <div className="team-1">
            {/* <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Our Awesome Team 1</h2>
                  <h4 className="description">
                    This is the paragraph where you can write more details about
                    your team. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  className="carousel-team"
                >
                  {items.map((item, key) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={key}
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
                      previous();
                    }}
                    role="button"
                  >
                    <i className="tim-icons icon-minimal-left" />
                    <span className="sr-only">Previous</span>
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
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Row>
            </Container> */}
          </div>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
