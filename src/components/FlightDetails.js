import React from 'react'

const FlightDetails = ({arrival}) => {

    debugger

    return (
        <div>
            <p>estimated time - {arrival.estimatedTime.slice(11,16)}</p>
            <p>scheduled time - {arrival.scheduledTime.slice(11,16)}</p>
            <p>terminal - {arrival.terminal}</p> 
        </div>
    )
}

export default FlightDetails;
