import React, {useState} from 'react';
import styles from './styles/Login.module.css'
import {Button, Col, Form, Row, Toast, ToastContainer} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebase-config";
import {useDispatch} from "react-redux";
import {setUserEmail, setUserPass} from "../store/actions/user";

const Login = () => {
    let navigate = useNavigate();

    const [regEmail, setRegEmail] = useState("")
    const [regPass, setRegPass] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()


    const register = async () => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPass
            )
            dispatch(setUserEmail(regEmail))
            dispatch(setUserPass(regPass))
            localStorage.setItem("signIn", true.toString())
            return navigate("/profile")
        } catch (e) {
            console.log(e.message)
        }
    }
    
    const login = async () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                setShow(false)
                dispatch(setUserEmail(email))
                dispatch(setUserPass(pass))
                localStorage.setItem("signIn", true.toString())
                return navigate("/profile")
            })
            .catch(() => {
                setShow(true)
            });
    }

    const changeEmailHandler = (e) => {
      setEmail(e.target.value)
    }
    const changePassHandler = (e) => {
      setPass(e.target.value)
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.loginFormBox}>
                <p className={styles.title}>Sign Up!</p>
                <Form.Group as={Row} className={`mb-3 ${styles.formGroup}`} controlId="formPlaintextRegLogin">
                    <Form.Label column sm="2">
                        <p style={{color: "#fff"}}>Login</p>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Login"
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className={`mb-3 ${styles.formGroup}`} controlId="formPlaintextRegPassword">
                    <Form.Label column sm="2">
                        <p style={{color: "#fff"}}>Password</p>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={regPass}
                            onChange={(e) => setRegPass(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Button
                    variant="success"
                    onClick={register}
                >Register</Button>
            </div>



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
                    onClick={login}
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
                    <Toast.Body>The username or password you entered is incorrect!</Toast.Body>
                    </Toast>
                </ToastContainer>
                : null
            }
        </div>
    );
};

export default Login;