import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Header">
            <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Volunteering Portal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/organization">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/checkin">Volunteering Sign In Page</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
