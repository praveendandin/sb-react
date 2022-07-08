import React from "react";
import brandLogo from "../../../../src/assets/img/logo.webp";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import HeadrStyles from "./Header-styles";

import mobSearchIcon from "../../../../src/assets/img/mob-search-icon.svg"
import mapIcon from "../../../../src/assets/img/map-icon.svg"
import dtSerachIcon from "../../../../src/assets/img/yellow-search-icon.svg"

function Header() {
  return (
    <>
      <Navbar className={HeadrStyles.headerTopBG}>
        <Container>
          <div className={HeadrStyles.HeaderTopLinksMain}>
            <Navbar className={HeadrStyles.bestSeller}>
              <Nav.Link href="#" className={HeadrStyles.bestSellerLink}>
                Bestseller
              </Nav.Link>
              <div className="d-none d-md-flex"><Nav.Link href="#">CURRENCY SELECTOR</Nav.Link>
              <Nav.Link href="#">GOLD RATE</Nav.Link></div>
            </Navbar>
            <Navbar className={HeadrStyles.userDetails}>
              <div className="d-none d-md-flex"><Nav.Link href="#">ENCIRCLE</Nav.Link>
              <Nav.Link href="#">GOLDEN HARVEST</Nav.Link>
              <Nav.Link href="#">BOOK AN APPOINTMENT</Nav.Link>
              <Nav.Link href="#" className="">WISHLIST</Nav.Link></div>
              <div className="d-flex user-login">
                <Nav.Link href="#" className="">LOGIN</Nav.Link>
                <Nav.Link href="#">CART [0]</Nav.Link>
              </div>
              <div className="search-map d-none d-md-flex position-relative">
                  <a href='#' className=""><img src={mapIcon} alt='search' /></a>
                  <a href='#' className=""><img src={dtSerachIcon} alt='search' /></a>
              </div>
            </Navbar>
          </div>
        </Container>
      </Navbar>
      
      {/* brand logo */}
      <Container className={HeadrStyles.brandLogoMain}>
        <Navbar.Brand href="/" className={HeadrStyles.brandLogoClass}>
          <img src={brandLogo} alt="Brand Logo " />
        </Navbar.Brand>
        <span className="serchIcon d-md-none"><img src={mobSearchIcon} alt='search' /></span>
      </Container>

      {/* main links */}
      <Navbar expand="lg" className={HeadrStyles.headerMenuMain}>
        <Container className={HeadrStyles.headerMainLinks}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={HeadrStyles.hamburgerIcon} />
          <Navbar.Collapse className={HeadrStyles.mainNavLinkSec} id="basic-navbar-nav">
            <Nav className={HeadrStyles.mainLinkItems}>
              <Nav.Link href="#">ALL JEWELLERY</Nav.Link>
              <Nav.Link href="#">GOLD</Nav.Link>

              <NavDropdown title="DIAMOND" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">DIAMOND</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#">EARRINGS</Nav.Link>
              <Nav.Link href="#">RINGS</Nav.Link>
              <Nav.Link href="#">DIGITAL GOLD</Nav.Link>
              <Nav.Link href="#">COLLECTIONS</Nav.Link>
              <Nav.Link href="#">RIVAAH</Nav.Link>
              <Nav.Link href="#">MIA</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
