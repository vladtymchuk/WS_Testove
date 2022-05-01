import React, {useState} from 'react';
import styles from './styles/Login.module.css'
import {Button, Col, Form, Row, Toast, ToastContainer} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [show, setShow] = useState(false)

    const changeEmailHandler = (e) => {
      setEmail(e.target.value)
    }
    const changePassHandler = (e) => {
      setPass(e.target.value)
    }

    const validateForm = () => {
        setShow(false)
        if (email === 'admin' && pass === "12345") {
            setShow(false)
            localStorage.setItem("signIn", true.toString())
            return navigate("/profile")
        } else {
            setShow(true)
        }
        console.log(localStorage.getItem("signIn"))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.loginFormBox}>
                <p className={styles.title}>Sign In!</p>
                <Form.Group as={Row} className={`mb-3 ${styles.formGroup}`} controlId="formPlaintextLogin">
                    <Form.Label column sm="2">
                        <p style={{color: "#fff"}}>Login</p>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Login"
                            value={email}
                            onChange={changeEmailHandler}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className={`mb-3 ${styles.formGroup}`} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        <p style={{color: "#fff"}}>Password</p>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={changePassHandler}
                        />
                    </Col>
                </Form.Group>
                <Button
                    variant="success"
                    onClick={() => {
                        validateForm()
                    }}
                >Accept</Button>
            </div>
            {show ?
                <ToastContainer show={show}
                    position="top-end" className="p-3"
                >
                    <Toast onClose={() => {
                        setShow(false)
                    }
                    }>
                        <Toast.Header>
                            <img src="" className="rounded me-2" alt="" />
                            <strong className="me-auto">Error</strong>
                        </Toast.Header>
                    <Toast.Body>Incorrect Data!</Toast.Body>
                    </Toast>
                </ToastContainer>
                : null
            }
        </div>
    );
};

export default Login;