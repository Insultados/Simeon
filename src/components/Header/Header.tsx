import React from "react";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import classes from './Header.module.css'
import logo from '../../images/logo.png'

const Header = () => {

    return (
        <header className={classes.header} >
            <Container className={classes.logo_container}>
                <div className={classes.logo}>
                    <img draggable={'false'} src={logo} alt="" />
                </div>
            </Container>
            <Navbar className={classes.navbar} variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={classes.navlink} href="/">Главная</Nav.Link>
                        <NavDropdown title="О храме" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/history">История храма</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/simeon">О храмовом святом</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/clergy">Духовенство храма</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/schedule">Расписание Богослужений</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className={classes.navlink} href="/school">Воскресная школа</Nav.Link>
                        <Nav.Link className={classes.navlink} href="/contact">Контакты</Nav.Link>
                        <Nav.Link className={classes.navlink} href="/album">Фотоальбом</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;