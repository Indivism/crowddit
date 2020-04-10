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
import { Link, Redirect } from 'react-router-dom'

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  console.log(props)

    return (
    <div>
      {props.page === "/settings" && <Redirect to="/settings" />}
      {props.page === "/about" && <Redirect to="/about" />}
      <Navbar color="light" light expand="md">
        <NavbarBrand href={'https://indivism.github.io/crowddit/'}>crowddit</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Indivism/crowddit">GitHub</NavLink>
            </NavItem>
            { props.cookie && <NavItem>
              <NavLink onClick={() => { props.setPage("/settings") }} style={{cursor: "pointer"}}>Settings</NavLink>
            </NavItem>}
          </Nav>
        </Collapse>
        
        {props.cookie && <NavbarText style={{paddingRight: "1rem"}}>{props.username}</NavbarText>}
        {props.cookie && <Button outline color="secondary" onClick={ () => props.logout() }>Log Out</Button>}
        {!props.cookie && <Button outline color="secondary" onClick={ () => props.login() }>Log In</Button>}
        
      </Navbar>
    </div>
    )
}

export default NavigationBar
