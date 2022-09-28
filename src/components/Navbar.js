import React from "react";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavItem,
  Button,
} from "reactstrap";

function Example(args) {


  return (
    <div className="w-full fixed-top  bg-danger " >
      <Navbar className="px-5 w-full bg-danger" {...args} dark color="dark">
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
