import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link, withRouter } from "react-router-dom";

const Greeting = ({newUser, history}) => {

    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = () => {
        const user = ({userName: name})
        newUser(user)
        setName('')
        history.push("/home")
    }

    return (
        <div className="greeting-page-wrap">
            <div className="background">
            <svg viewBox="0 0 1749 2481" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
            <path fill="#ff00ef" d="M.855-.148h1748.672v2480.064H.855z"/>
            <path fill="url(#_Linear1)" d="M6.393 12.143h1733.83v2463.68H6.393z" transform="matrix(1.00856 0 0 1.00665 -5.593 -12.371)"/>
            <defs>
            <linearGradient id="_Linear1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1273.96 -2184.53 2180.39 1276.38 430.841 2038.78)">
            <stop offset="0" stop-color="#0010ff"/>
            <stop offset="1" stop-color="#0010ff" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
            </div>
            <p>hello and welcome to pickup</p>
            <br></br>
            <p>input your first name</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
            <input type="text" placeholder="Name" value={name} onChange={handleChange} required/>
            <button type="submit">Enter</button>
            </form>

            {/* <Link to="/home"><p>home</p></Link> */}
        </div>
    )
}

export default Greeting;
