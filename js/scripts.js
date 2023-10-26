const getRandomColorBtn = document.querySelector('#getColorBtn');
const saveYourColorBtn = document.querySelector('#save-btn');
const colorPalleteContainer = document.querySelector('.color-pallete');
const colorResult = document.querySelector('#color-result');
const body = document.querySelector('body');

//Generate a random hex color and change background
function getRandomColor() {
  const randomHexCode = () => {
    let randomHex = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + randomHex.slice(0, 6);
  };
  const resCol = randomHexCode();
  colorResult.textContent = resCol;
  console.log(resCol);
  body.style.backgroundColor = resCol;
  return randomHexCode();
};

//Save color to div function
function saveColor() {
  const savedContainer = document.getElementById("color-list-item");
  const newDiv = document.createElement("div");
  newDiv.appendChild(document.createTextNode(colorResult.textContent));
  newDiv.style.background = colorResult.textContent;
  savedContainer.appendChild(newDiv);
};


//btn actions
getRandomColorBtn.addEventListener('click', function () {  
  getRandomColor();  
});

saveYourColorBtn.addEventListener('click', function () {
  saveColor();
});