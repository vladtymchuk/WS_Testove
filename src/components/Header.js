import React, {useEffect, useState} from 'react';
import styles from "./Header.module.css"
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {

    const [hrefForLog, setHrefForLog] = useState("/login");

    useEffect(() => {
        if (localStorage.getItem("signIn")) setHrefForLog('/profile')
    }, [localStorage.getItem("signIn")])


    return (
        <Navbar  className={styles.wrapper} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Breaking News!</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/news">News</Nav.Link>
                    <Nav.Link href={hrefForLog}>Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;