import React, { useState } from "react";
import {
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="px-5" {...args} dark color="dark">
        <NavbarBrand href="/">FishLog </NavbarBrand>
        <NavItem className="list-unstyled">
          <Input placeholder="search" />
        </NavItem>
        <div className="d-flex gap-2">
        <NavItem className="list-unstyled">
          <Button color="danger">Register</Button>
        </NavItem>
        <NavItem className="list-unstyled">
          <Button color="primary">Login</Button>
        </NavItem>
        </div>
        
      </Navbar>
    </div>
  );
}

export default Example;
