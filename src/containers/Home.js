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
        <div>
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
