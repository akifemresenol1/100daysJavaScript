const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
  const randomColor = (color = Math.random().toString(16).substring(2, 8));
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

// console.log(color);
