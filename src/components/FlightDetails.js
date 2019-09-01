import React from 'react'

const FlightDetails = ({arrival}) => {

    return (
        <div className="arrival-details">
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
            <p>estimated time - {arrival.estimatedTime.slice(11,16)}</p>
            <p>scheduled time - {arrival.scheduledTime.slice(11,16)}</p>
            <p>terminal - {arrival.terminal}</p> 
        </div>
    )
}

export default FlightDetails;
