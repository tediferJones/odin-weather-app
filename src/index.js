import './style.css';

const idk = document.createElement('div')
idk.textContent = 'HELLO'


document.querySelector('#content').appendChild(idk)

async function getCoorsFromZip(zipcode, country = 'us') {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${country}&appid=41abf8f82ecf917e239e4a79363e88bc`, {mode: 'cors'})
    const coors = await response.json()
    console.log(coors.lat)
    console.log(coors.lon)
    return
}
let aLocation = getCoorsFromZip(15215)

async function getWeatherData() {
    const myData = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=40&lon=80&appid=41abf8f82ecf917e239e4a79363e88bc', {mode: 'cors'});
    const weatherData = await myData.json();
    console.log(weatherData);
}
// getWeatherData()

console.log('##########################')