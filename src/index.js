import './style.css';

function makeDiv(superObj) {
  for (const objKey in superObj) {
    // console.log(objKey, superObj[objKey]);
    const dataContainer = document.createElement('div');
    dataContainer.classList.add(objKey);
    dataContainer.innerHTML = objKey;
    for (const key in superObj[objKey]) {
      // console.log(key, superObj[objKey][key]);
      const data = document.createElement('div');
      data.classList.add(key);
      data.innerHTML = `${key}: ${superObj[objKey][key]}`;
      dataContainer.appendChild(data);
    }
    document.querySelector('#content').appendChild(dataContainer);
  }
}

function displayController(weatherDataObj) {
  const sanitizedWeatherData = {
    main: weatherDataObj.main,
    sunRiseSunSet: {
      sunrise: weatherDataObj.sys.sunrise,
      sunset: weatherDataObj.sys.sunset,
    },
    weather: { weather: weatherDataObj.weather[0].description },
    wind: weatherDataObj.wind,
  };
  // console.log(stuffIWant);
  makeDiv(sanitizedWeatherData);
}

async function getWeatherData(lat, lon) {
  const myData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=41abf8f82ecf917e239e4a79363e88bc`, { mode: 'cors' });
  const weatherData = await myData.json();
  // NEED TO GET VALUES FROM weatherData.main .sys .weather and .wind
  displayController(weatherData);
}

async function getWeatherFromZip(zipcode, country = 'us') {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${country}&appid=41abf8f82ecf917e239e4a79363e88bc`, { mode: 'cors' });
  const coors = await response.json();
  return getWeatherData(coors.lat, coors.lon);
}

getWeatherFromZip(15215);

const searchbar = document.createElement('input');
document.querySelector('#content').appendChild(searchbar);

// need to create a display function that will take weatherData attrs as args
