/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const ContactUsMap = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "27.4956247";
    let lng = "-82.6345693";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [{ color: "#4b6878" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#64779e" }],
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [{ color: "#4b6878" }],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [{ color: "#334e87" }],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{ color: "#023e58" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#283d6a" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6f9ba5" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#1d2c4d" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#023e58" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#3C7680" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#304a7d" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#98a5be" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#1d2c4d" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#2c6675" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#9d2a80" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#9d2a80" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#b0d5ce" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#023e58" }],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [{ color: "#98a5be" }],
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#1d2c4d" }],
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [{ color: "#283d6a" }],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [{ color: "#3a4762" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#0e1626" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#4e6d70" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
title: "Solafide Services",
    });

    const contentString =
      '<div class="info-window-content"><h2>Masonry Hardscaping Services</h2>' +
      "<p>Trained professionals, Exceptional Results, Sensible Investment.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []);
  return <div className="map" ref={mapRef} />;
};

export default function ContactUs() {
  const [firstNameFocus, setFirstNameFocus] = React.useState(undefined);
  const [emailFocus, setEmailFocus] = React.useState(undefined);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("contact-page");
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header header-filter contactus-3">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/andre-benz.jpg") + ")",
            }}
          />
          <Container>
            <Row>
              <Col className="text-center" md="12">
                <h1 className="title">Got a question?</h1>
                <h3>We'd like to talk more about what you need</h3>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="main">
          <Container fluid>
            <Row className="infos mb-5">
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/primary.png")}
                    />
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <h4 className="info-title">Address</h4>
                  <p className="description">Bradenton, FL</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-info">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/info.png")}
                    />
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <h4 className="info-title">Email</h4>
                  <p className="description">edmena24@gmail.com</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <h4 className="info-title">Phone Number</h4>
                  <p className="description">+1(941) 518 1657</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/success.png")}
                    />
                    <i className="tim-icons icon-single-02" />
                  </div>
                  <h4 className="info-title">Contact</h4>
                  <p className="description">Edgar Mena</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 mb-4 pt-5">
              <Col className="ml-auto mr-auto text-center mt-5" md="8">
                <Badge color="info">Leave a message</Badge>
                <h1 className="title">
                  Tell us more about <b>yourself</b>
                </h1>
                <h4 className="desc">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto" md="10">
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
                  <CardBody>
                    <Row>
                      <Col md="12">
                        <label>Full name</label>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": firstNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="Full Name..."
                            placeholder="Full Name..."
                            type="text"
                            name="subject"
                            onFocus={(e) => setFirstNameFocus(true)}
                            onBlur={(e) => setFirstNameFocus(false)}
                          />
                        </InputGroup>
                      </Col>
                      {/* <Col md="6">
                        <FormGroup>
                          <label>Last name</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": lastNameFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-caps-small" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              placeholder="Last Name..."
                              type="text"
                              onFocus={(e) => setLastNameFocus(true)}
                              onBlur={(e) => setLastNameFocus(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col> */}
                    </Row>
                    <FormGroup>
                      <label>Email address</label>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": emailFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Here..."
                          type="text"
                          name="text"
                          onFocus={(e) => setEmailFocus(true)}
                          onBlur={(e) => setEmailFocus(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="message-1"
                                                name="extra_Message"
                        rows="6"
                        type="textarea"
                      />
                    </FormGroup>
                    <Row>
                      <Col className="ml-auto" md="6">
                        <Button
                          className="btn-round pull-right"
                          color="primary"
                          id="submit_form"
                        type="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                       <div className="submit text-center">
                      <input
                        type="hidden"
                        name="access_token"
                        value="63yiwt3vt3p7kwh8m7zcdmd0"
                      />

                      {/* <input
                        id="submit_form"
                        type="submit"
                        value="Contact Us"
                      /> */}
                    </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <ContactUsMap />
        <DemoFooter />
      </div>
    </>
  );
}
