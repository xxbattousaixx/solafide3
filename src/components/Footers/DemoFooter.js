
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 style={{color:'gold'}} className="title">Solafide• Services</h1>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/residential" tag={Link}>
                    Residential
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/commercial" tag={Link}>
                    Commercial
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/clean-seal" tag={Link}>
                    Clean & Seal
                  </NavLink>
                </NavItem>
               
              </Nav>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink
                    to="/about-us"
                    tag={Link}
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/contact-us"
                    tag={Link}
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
             <NavItem>
                  <NavLink to="/gallery" tag={Link}>
                    Gallery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://opensource.org/licenses/MIT?ref=blkdspr-footer"
                    target="_blank"
                  >
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile text-left">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://instagram.com"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip39661217">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://www.facebook.com/SolafideL7/"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip206037619">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://tiktok.com/"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-tiktok" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip750293512">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
