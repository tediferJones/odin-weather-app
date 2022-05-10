import './style.css';
import DOMInputForm from './DOMInputForm';
import DOMDisplayController from './DOMDisplayController';

function cleanUpData001(weatherDataObj, units) {
  console.log(weatherDataObj.name); //
  const sanitizedWeatherData = {
    station: { location: weatherDataObj.name }, //
    main: weatherDataObj.main,
    sunriseSunset: {
      sunrise: new Date(weatherDataObj.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(weatherDataObj.sys.sunset * 1000).toLocaleTimeString(),
    },
    general: {
      weather: weatherDataObj.weather[0].description,
      icon: weatherDataObj.weather[0].icon,
    },
    wind: weatherDataObj.wind,
  };
  console.log(sanitizedWeatherData);
  let myUnits = null;
  if (units === 'imperial') {
    myUnits = { temp: '°F', speed: 'MPH' };
  } else if (units === 'metric') {
    myUnits = { temp: '°C', speed: 'm/s' };
  }
  for (const objKey in sanitizedWeatherData) {
    for (const key in sanitizedWeatherData[objKey]) {
      if (key === 'temp' || key === 'feels_like' || key === 'temp_min' || key === 'temp_max') {
        sanitizedWeatherData[objKey][key] += myUnits.temp; // '℉';
      } else if (key === 'pressure') {
        sanitizedWeatherData[objKey][key] += 'hPa';
      } else if (key === 'humidity') {
        sanitizedWeatherData[objKey][key] += '%';
      } else if (key === 'speed') {
        sanitizedWeatherData[objKey][key] += myUnits.speed;
      } // else if (key === 'weather') {
      //   let arrOfWords = superObj[objKey[key]].split(' ');
      //   console.log(arrOfWords)
      // }
    }
  }
  DOMDisplayController(sanitizedWeatherData);
}

async function getWeatherData(lat, lon, units) {
  const myData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=41abf8f82ecf917e239e4a79363e88bc&units=${units}`, { mode: 'cors' });
  const weatherData = await myData.json();
  cleanUpData001(weatherData, units);
}

async function getWeatherFromZip(zipcode, country = 'us', units = 'imperial') {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${country}&appid=41abf8f82ecf917e239e4a79363e88bc`, { mode: 'cors' });
  const coors = await response.json();
  return getWeatherData(coors.lat, coors.lon, units);
}

DOMInputForm();

document.querySelector('.submitBtn').addEventListener('click', () => {
  getWeatherFromZip(document.querySelector('.formContainer').location.value, 'us', document.querySelector('.formContainer').units.value)
});

// Need to clean up zip input
//    - number between 0 and 99999, if less than 5 digits, prepend 0s till length === 5
