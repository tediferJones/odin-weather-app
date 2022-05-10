const DOMDisplayController = ((superObj) => {
  if (document.querySelector('.gridContainer')) {
    document.querySelector('.gridContainer').remove();
  }
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('gridContainer');
  for (const objKey in superObj) {
    const dataContainer = document.createElement('div');
    dataContainer.classList.add(objKey);
    dataContainer.classList.add('dataContainer');

    const dataContainerLabel = document.createElement('div');
    dataContainerLabel.classList.add('dataTitle');
    dataContainerLabel.textContent = (objKey[0].toUpperCase() + objKey.slice(1));
    dataContainer.appendChild(dataContainerLabel);

    for (const key in superObj[objKey]) {
      let data = null;
      if (key === 'icon') {
        console.log(key, superObj[objKey][key]);
        data = document.createElement('img');
        data.src = `https://openweathermap.org/img/wn/${superObj[objKey][key]}@2x.png`;
      } else {
        data = document.createElement('div');
        data.textContent = `${key[0].toUpperCase() + key.slice(1).replace(/_/, ' ')}: ${superObj[objKey][key]}`;
      }
      data.classList.add(key);
      data.classList.add('data');
      dataContainer.appendChild(data);
    }
    gridContainer.appendChild(dataContainer);
  }
  document.querySelector('#content').appendChild(gridContainer);
});

export default DOMDisplayController;
