import React, { useState } from 'react'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">crowddit</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Indivism/crowddit">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {props.cookie && <Button outline color="secondary" onClick={ () => props.login() }>Logged In</Button>}
        {!props.cookie && <Button outline color="secondary" onClick={ () => props.login() }>Log In</Button>}
      </Navbar>
    </div>
    )
}

export default NavigationBar