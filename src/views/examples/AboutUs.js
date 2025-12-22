
import React from "react";
import LazyLoad from 'react-lazyload';
import {Helmet} from "react-helmet";

// reactstrap components
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Card, 
  CardBody,
  CardTitle
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
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <LazyLoad><img
            alt="..."
            className="path path3"
            src={require("assets/img/path3.png")}
          /></LazyLoad>
          <svg className="hidden">
            {/* All deco shapes */}
            <defs>
              <path
                d="M292,517.91s-15.55-56.18-82.16-38.13C144.29,497.54,155.58,363.16,162,313.12S224.89,15.59,387.71,4.49,515.3,133.38,499.28,174.22s-48.71,85.09,11,218.26S455,582.74,430.06,588.37,339.71,621.12,292,517.91Z"
                id="deco2"
              />
            </defs>
          </svg>
          <div className="content-center">

          
            <Container>
              <hr/>
              <hr/>
              <hr/>
              <Row className="align-items-center text-left">
                <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                  <h1 className="title">
                     <br />
                    <strong style={{color:'gold'}} >Solafide</strong>
                  </h1>
                  <Helmet>
                    Solafide Services is dedicated to enhancing the beauty of Floridas residential and commercial outdoors. Edgar and his team of experts specialize in crafting breathtaking waterfalls, durable stone decks, elegant concrete landscape curbing, inviting gazebos, cozy fire pits, and a wide array of other outdoor stone, concrete, paver features. The name "Solafide," meaning "by faith alone," reflects Edgar's deep-rooted faith and the principles of integrity and trust that guide his business. 
                      <meta name="description" content="Florida beauty residential gazebo fire pit masonry sealer commercial edgar mena  experts waterfalls outdoors stone decks concrete landscaping curbing " />
                      </Helmet>
                  <p className="description">     Solafide Services is dedicated to enhancing the beauty of Floridas residential and commercial outdoors. Edgar and his team of experts specialize in crafting breathtaking waterfalls, durable stone decks, elegant concrete landscape curbing, inviting gazebos, cozy fire pits, and a wide array of other outdoor stone, concrete, paver features. The name "Solafide," meaning "by faith alone," reflects Edgar's deep-rooted faith and the principles of integrity and trust that guide his business. 

                  </p>
               
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                  {/* SVG Illustration */}
                  <figure className="ie-non-standard-hero-shape">
                    <svg
                      className="injected-svg js-svg-injector"
                      data-img-paths={
                        "[{&quot;targetId&quot;: &quot;#imageShape1&quot;, &quot;newPath&quot;: &quot;" +
                        require("assets/img/edgar.jpg") +
                        "&quot;},{&quot;targetId&quot;: &quot;#imageShape2&quot;, &quot;newPath&quot;: &quot;" +
                        require("assets/img/edgar.jpg") +
                        "&quot;}]"
                      }
                      data-parent="#SVGNonStandardHeroShape"
                      style={{ enableBackground: "new 10 12 878.9 907" }}
                      viewBox="10 12 878.9 907"
                      x="0px"
                      y="0px"
                      xmlSpace="preserve"
                    >
                      <g>
                        <defs>
                          <path
                            d="M299.27,772.72s-24.67-76.08-131.42-51.33C62.82,745.74,81.48,563.56,92,495.71S193.94,92.18,454.77,76.46,658.58,250.62,632.75,306s-78.37,115.53,16.76,295.77-89.33,258.1-129.36,265.84S375.3,912.41,299.27,772.72Z"
                            id="firstShape"
                          />
                        </defs>
                        <clipPath id="secondShape">
                          <use
                            style={{ overflow: "visible" }}
                            xlinkHref="#firstShape"
                          />
                        </clipPath>
                        <g clipPath="url(#secondShape)">
                          <image
                            height="1000"
                            id="imageShape1"
                            style={{ overflow: "visible" }}
                            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                            width="1000"
                            xlinkHref={require("assets/img/edgar.jpg")}
                          />
                        </g>
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M741.49,643q-2.58-.31-5.17-.4c-12-.45-46.58-14.37-79.24-71.85-17.81-31.35-47.32-96.41-37.88-167.21,7.84-58.79,38.38-97.1,48.34-130.64,24.82-83.61,66.62-77.07,98-77.07,15.93,0,31.1,14.82,39.21,26.39,11.55,16.48,19.72,46.24-9.1,93.32-60.66,99.07,14.09,139.33-.93,239.68C781.72,641.8,750,644,741.49,643Z"
                            id="thirdShape"
                          />
                        </defs>
                        <clipPath id="fourthShape">
                          <use
                            style={{ overflow: "visible" }}
                            xlinkHref="#thirdShape"
                          />
                        </clipPath>
                        <g
                          clipPath="url(#fourthShape)"
                          transform="matrix(1 0 0 1 0 0)"
                        >
                          <image
                            height="1000"
                            id="imageShape2"
                            style={{ overflow: "visible" }}
                            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                            width="1000"
                            xlinkHref={require("assets/img/edgar.jpg")}
                          />
                        </g>
                      </g>
                    </svg>
                  </figure>
                  {/* End SVG Illustration */}
                </Col>
              </Row>
            </Container>
          </div>
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
                <h2 style={{color:'gold'}} className="title">Specialized in Masonry</h2>
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
                <h1 style={{color:'gold'}} className="title">You should contact us!</h1>
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
                                                    
                                  <FormGroup>
                                    <Input defaultValue="Full Name" type="text" name="subject" />
                                  </FormGroup>
                                  <FormGroup>
                                    <Input defaultValue="Your Email" type="text" name="text" />
                                  </FormGroup>
                                   <FormGroup>
                                    <Input defaultValue="Message" type="textarea" name="extra_Message" />
                                  </FormGroup>
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
                <h1 style={{color:'gold'}} className="title">Solafide Paver Sealer</h1>
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
