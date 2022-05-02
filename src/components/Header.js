import React, {useEffect, useState} from 'react';
import styles from "./Header.module.css"
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {useNavigate} from "react-router-dom";

const Header = () => {

    const [hrefForLog, setHrefForLog] = useState("/login");
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("signIn") === "true") setHrefForLog('/profile')
        else {setHrefForLog("/login")}
    }, [localStorage.getItem("signIn")])

    const checkStatus = () => {
        console.log("LST",localStorage.getItem("signIn") === "true")
        return navigate(hrefForLog)
    }


    return (
        <Navbar  className={styles.wrapper} bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Breaking News!</Navbar.Brand>
                </LinkContainer>

                <Nav className="me-auto">

                    <LinkContainer to="/news">
                        <Nav.Link>News</Nav.Link>
                    </LinkContainer>

                    <div onClick={checkStatus} >
                        <Nav.Link>Profile</Nav.Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;