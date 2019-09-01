import React, { useState, useEffect } from 'react'
import API from '../adapters/API';
import FlightDetails from '../components/FlightDetails';

const Home = ({user}) => {

    const [currentUser, setCurrentUser] = useState(user)
    const [flightNumber, setFlightNumber] = useState('')
    const [airport, setAirport] = useState('')
    const [myFlight, setMyFlight] = useState('')

    useEffect(() => {
        setCurrentUser(user)
    });

    const handleFlightNumberChange = (event) => {
        setFlightNumber(event.target.value)
    }

    const handleAirportChange = (event) => {
        setAirport(event.target.value)
    }

    const handleSubmit = () => {
        API.getFlightInfo(airport)
        .then(data => findFlight(data))
    }

    const findFlight = (data) => {
        data.map(arrival =>  arrival.flight.number === flightNumber && setMyFlight(arrival))
    }


    return (
        <div className="home-page-wrap">
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
            {
                currentUser ? <p>welcome home {currentUser.userName}</p> : <p>loading</p>
            }
            <p>Find a Flight</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <input type="text" name="flight_number" placeholder="Flight Number" value={flightNumber} onChange={handleFlightNumberChange}/>
                <select name="airport" value={airport} onChange={handleAirportChange}>
                    <option>LHR</option>
                    <option>LGW</option>
                    <option>LCY</option>
                </select>
                <button type="submit">find that flight</button>
            </form> 
            {
                myFlight && <FlightDetails {...myFlight}/> 
                
            }
           
          
        </div>
    )
}

export default Home;
