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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Logo2 from "assets/img/ss3logo2.png"
import Logo from "assets/img/ss3logo.png"



export default function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-default");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>

      <Navbar className={"fixed-top " + navbarColor} expand="lg">

        <Container>
          <div className="navbar-translate">
          <NavbarBrand to="/home" tag={Link} >
              <span>Solafide•</span> Services
              &emsp;
              <img src={Logo} alt="logo"/>

            </NavbarBrand>
            {/* <UncontrolledTooltip delay={0} target="tooltip6619950104">
              Designed and Coded by DC7
            </UncontrolledTooltip> */}
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Solafide <span>Services</span>
                  </a>

                  
                </Col>

                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about-us">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/gallery">Gallery</NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <p>Services</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/residential" tag={Link}>
                    <i className="tim-icons icon-square-pin" />
                    Residential
                  </DropdownItem>
                  <DropdownItem to="/commercial" tag={Link}>
                    <i className="tim-icons icon-delivery-fast" />
                    Commercial
                  </DropdownItem>
                  <DropdownItem to="/clean-seal" tag={Link}>
                    <i className="tim-icons icon-vector" />
                    Clean & Seal
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
         
              {/* <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i
                    aria-hidden={true}
                    className="tim-icons icon-book-bookmark"
                  />
                  <p>Examples</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="tim-icons icon-bulb-63" />
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="tim-icons icon-align-center" />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="tim-icons icon-chart-bar-32" />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="tim-icons icon-square-pin" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/pricing" tag={Link}>
                    <i className="tim-icons icon-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/ecommerce" tag={Link}>
                    <i className="tim-icons icon-basket-simple" />
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="tim-icons icon-bag-16" />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="tim-icons icon-lock-circle" />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/404-error" tag={Link}>
                    <i className="tim-icons icon-button-power" />
                    404 Error Page
                  </DropdownItem>
                  <DropdownItem to="/500-error" tag={Link}>
                    <i className="tim-icons icon-alert-circle-exc" />
                    500 Error Page
                  </DropdownItem>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="default"
                      className="dropdown-item"
                      tag="a"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        aria-hidden={true}
                        className="tim-icons icon-book-bookmark"
                      />
                      App Pages
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/account-settings" tag={Link}>
                        <i className="tim-icons icon-lock-circle" />
                        Account Settings
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        <i className="tim-icons icon-tablet-2" />
                        Login Page
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        <i className="tim-icons icon-laptop" />
                        Register Page
                      </DropdownItem>
                      <DropdownItem to="/reset-page" tag={Link}>
                        <i className="tim-icons icon-molecule-40" />
                        Reset Page
                      </DropdownItem>
                      <DropdownItem to="/invoice-page" tag={Link}>
                        <i className="tim-icons icon-notes" />
                        Invoice Page
                      </DropdownItem>
                      <DropdownItem to="/checkout-page" tag={Link}>
                        <i className="tim-icons icon-basket-simple" />
                        Checkout Page
                      </DropdownItem>
                      <DropdownItem to="/chat-page" tag={Link}>
                        <i className="tim-icons icon-email-85" />
                        Chat Page
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <Button to="/contact-us" tag={Link}>
                <img  style={{
                    height:
                      "80px", width:"80px"

                  }} id="tooltip6619950104" src= {Logo2} alt="logo2" ></img>

                </Button>
                <UncontrolledTooltip delay={0} target="tooltip6619950104">
              Any questions? Call us now at 941.518.1657
              



            </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>  
      </Navbar>
         
     
    </>
  );
}
