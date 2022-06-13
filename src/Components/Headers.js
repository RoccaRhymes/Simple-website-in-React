import React, { Component } from "react"
import { Container, FormControl, Nav, Navbar, Button, Form, NavLink, NavbarBrand} from "react-bootstrap"
import logo from "./logo193.png";
import {Routes, Route, Link} from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Engine from "../Pages/Engine";

class Headers extends Component {
    render() {
        return (
            <>
                <Navbar sticky ="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/About"> About </Nav.Link>
                                <Nav.Link href="/Contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/Engine"> Engine </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route path='/About' element={<About />}/>
                        <Route path='/Contacts' element={<Contacts />}/>
                        <Route path='/Engine' element={<Engine />}/>
                    </Routes>
            </>
        );
    }
}
export { Headers }
console.log(Home, About, Contacts, Engine)