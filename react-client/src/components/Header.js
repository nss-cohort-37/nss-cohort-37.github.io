import React, { useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarText,
  Navbar,
  NavbarToggler,
  Collapse,
  NavLink,
  NavItem,
} from "reactstrap";
import logo from "../images/nss-logo-compact.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            src={logo}
            className="d-inline-block align-top logo"
            alt="NSS Logo"
          />
          <NavbarText style={{ padding: "8px" }}>
            Cohort 37 | Demo Day May 21
          </NavbarText>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Developers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Technologies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Thanks
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
