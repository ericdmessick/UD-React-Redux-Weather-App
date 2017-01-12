import axios from 'axios';

//need PROMISE to USE
const API_KEY = '47bb5070724c623796cc10560ceb9324';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//assign string to variable.  typos in variable throw errors that you can find in the console.  strings do not

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    
    //NEED AXIOS instead of jQuery for Ajax method
    const request = axios.get(url);
    
    console.log('Request:', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

