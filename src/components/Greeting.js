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
        <div>
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
