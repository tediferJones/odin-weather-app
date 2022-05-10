const DOMDisplayController = ((superObj) => {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('gridContainer');
  for (const objKey in superObj) {
    // console.log(objKey, superObj[objKey]);
    const dataContainer = document.createElement('div');
    dataContainer.classList.add(objKey);
    dataContainer.classList.add('dataContainer');
    dataContainer.innerHTML = (objKey[0].toUpperCase() + objKey.slice(1));
    for (const key in superObj[objKey]) {
      // console.log(key, superObj[objKey][key]);
      const data = document.createElement('div');
      data.classList.add(key);
      data.classList.add('data');
      data.innerHTML = `${key[0].toUpperCase() + key.slice(1).replace(/_/, ' ')}: ${superObj[objKey][key]}`;// `${key.replace(/_/, ' ')}: ${superObj[objKey][key]}`;
      dataContainer.appendChild(data);
    }
    gridContainer.appendChild(dataContainer);
  }
  document.querySelector('#content').appendChild(gridContainer);
});
export default DOMDisplayController;
