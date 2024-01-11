const paragraph = document.querySelector(`p`);
console.log(paragraph);

function generateRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  paragraph.innerText = `rgb(${r},${g},${b})`;
  paragraph.style.backgroundColor = `rgb(${r},${g},${b})`;
}

generateRandomRGB();
