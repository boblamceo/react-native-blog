import axios from 'axios';

let response;
let country;

try {
    response = axios.get('https://corona.lmao.ninja/v2/countries');
    response.then((res) => {
        country = res.data;
    });
} catch (e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
}

export const data = response;
