import { async } from "q";

const apiKey = 'e5afcd-79f8bd'


const getFlightInfo = async (airport) => {

    const rawData = await fetch(`http://aviation-edge.com/v2/public/timetable?key=${apiKey}&iataCode=${airport}&type=arrival`)
    const jsonData = await rawData.json();
    return jsonData;
}



export default {
    getFlightInfo
}