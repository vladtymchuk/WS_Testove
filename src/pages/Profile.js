import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setUserEmail, setUserPass} from "../store/actions/user";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export const Profile = () => {
    const navigate = useNavigate()

    const userMail = useSelector(state => state.user.email)
    const userPass = useSelector(state => state.user.pass)

    const dispatch = useDispatch()

    return (
        <div>
            <p style={{color: "#fff", fontSize: 40}}>{userMail}</p>
            <p style={{color: "#fff", fontSize: 40}}>{userPass}</p>

            <Button variant="danger"
                onClick={() => {
                    dispatch(setUserEmail(null))
                    dispatch(setUserPass(null))
                    localStorage.clear()
                    return navigate("/login")
                }}
            >Sign Out!</Button>
        </div>
    );
};
