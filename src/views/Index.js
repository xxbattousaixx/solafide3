
import React from "react";
import LazyLoad from 'react-lazyload';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  Button,
  Form,
  Card,
  CardBody,
  FormGroup,
  Input,
  CardTitle,
    Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import ColorNavbar from "../components/Navbars/ColorNavbar.js";

import IndexHeader from "../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter.js";


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
       <HelmetProvider><Helmet><p className="description">
          I would highly recommend this company because of the quality of the work and of the personnel hired to perform the job. I have future plans for pavers and will use Solafide again.
        </p>
          <meta name="description" content="personnel quality hired job pavers Solafide" /></Helmet></HelmetProvider><p className="description">
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
       <HelmetProvider> <Helmet><p className="description">
          What a pleasure working with Edgar. Great service very polite such a great experience and amazing work results !! Very satisfied and would recommend them 200% Thank You
        </p>  <meta name="description" content="amazing work service experience results satisfied" /></Helmet></HelmetProvider><p className="description">
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
export default function Index() {
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
    document.body.classList.add("index-page");
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <IndexHeader />
  </div>
  <Container fluid>
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
                        <h6 className="card-category"></h6>
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
                        <h6 className="card-category"></h6>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <CardTitle tag="h3">AFTER</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
           
              </Row>
  </Container>
<br/>
<br/>


       <Container>
                <h2 style={{color:'gold'}} className="title text-center">Repairs and Installs</h2>
                <br />
                <Row>
                  <Col md="4">
                    <Card className="card-profile"  to='/contact-us' tag={Link}>
                      <div className="card-image">
                        <h4 className="title">Residential</h4>
                        {/* <UncontrolledDropdown>
                          <DropdownToggle
                            aria-expanded={false}
                            caret
                            className="btn-icon"
                            color="link"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right x-placement="bottom-end">
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Edit Profile
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Settings
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Log out
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown> */}
                        <a href="/residential" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/2.jpg")}
                          />
                        </a>
                      </div>
                      {/* <CardBody>
                        <hr className="line-primary" />
                        <h3 className="job-title">UX Designer</h3>
                        <Table className="tablesorter" responsive>
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-atom" /> Skills
                              </td>
                              <td className="text-right">UI, UX, Creativity</td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-user-run" /> Hobbies
                              </td>
                              <td className="text-right">Photography</td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-chart-bar-32" />{" "}
                                Level
                              </td>
                              <td className="text-right">• • •</td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody> */}
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-profile"  to='/contact-us' tag={Link}>
                      <div className="card-image">
                        <h4 className="title">Commercial</h4>
                        {/* <UncontrolledDropdown>
                          <DropdownToggle
                            aria-expanded={false}
                            caret
                            className="btn-icon"
                            color="link"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right x-placement="bottom-end">
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Edit Profile
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Settings
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Log out
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown> */}
                        <a href="/commercial" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/3.jpg")}
                          />
                        </a>
                      </div>
                      {/* <CardBody>
                        <hr className="line-primary" />
                        <h3 className="job-title">Team Lead</h3>
                        <Table className="tablesorter" responsive>
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-atom" /> Skills
                              </td>
                              <td className="text-right">Leadership</td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-user-run" /> Hobbies
                              </td>
                              <td className="text-right">Skiing, Chess</td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-chart-bar-32" />{" "}
                                Level
                              </td>
                              <td className="text-right">• • • • •</td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody> */}
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-profile" to='/contact-us' tag={Link}>
                      <div className="card-image" >
                        <h4 className="title">Clean & Seal</h4>
                        {/* <UncontrolledDropdown>
                          <DropdownToggle
                            aria-expanded={false}
                            caret
                            className="btn-icon"
                            color="link"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right x-placement="bottom-end">
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Edit Profile
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Settings
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Log out
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown> */}
                        <a href="/clean-seal" >
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/4.jpg")}
                          />
                        </a>
                      </div>
                      {/* <CardBody>
                        <hr className="line-primary" />
                        <h3 className="job-title">Content writer</h3>
                        <Table className="tablesorter" responsive>
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-atom" /> Skills
                              </td>
                              <td className="text-right">Communication</td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-user-run" /> Hobbies
                              </td>
                              <td className="text-right">Reading, Writing</td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <i className="tim-icons icon-chart-bar-32" />{" "}
                                Level
                              </td>
                              <td className="text-right">• • • •</td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody> */}
                    </Card>
                  </Col>
                </Row>
              </Container>
<br/>
<br/>
<br/>
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
              
          
            </Row>
          </Container>
<br/>
<br/>
<br/>


  <div className="content-center">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h1 style={{color:'gold'}} className="title">
                  Crafting Exquisite Outdoor Spaces. Quality You Expect, Value You Appreciate.
                </h1>
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
                              <h6 className="category text-primary">Outdoor lighting</h6>
                              <CardTitle tag="h4">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Outside beacons
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                Welcome to your private oasis. Our outdoor lighting setups will take your home lounging experience to the next level.
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
                              <h6 className="category text-info">Waterfall</h6>
                              <CardTitle tag="h4">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Outdoor artwork 
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                Be amazed with the possibilities -- we create beautiful pieces that are easy on the eyes.
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
                              <h6 className="category text-warning">Retaining Wall</h6>
                              <CardTitle tag="h4">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Solid structures built to protect 
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                Our retaining walls have a neat look that takes full advantage of its surroundings.
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
                                  Ready for a new look?
                                </a>
                              </CardTitle>
                              <p className="card-description">
                                We design driveway and landscape layouts that are an experience for guests and residents alike.
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
        <DemoFooter />
   

    </>
  );
}
