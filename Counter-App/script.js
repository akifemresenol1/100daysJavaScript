const counts = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    counts.innerHTML++;
  }
  if (e.target.classList.contains("subtract")) {
    counts.innerHTML--;
  }
  if (e.target.classList.contains("reset")) {
    counts.innerHTML = 0;
  }
  setColor();
});

function setColor() {
  if (counts.innerHTML > 0) {
    counts.style.color = "green";
  } else if (counts.innerHTML < 0) {
    counts.style.color = "orangered";
  } else {
    counts.style.color = "#fff";
  }
}

// add.addEventListener("click", () => {
//   counts.innerHTML++;
// });

// sub.addEventListener("click", () => {
//   counts.innerHTML--;
// });

// resetCount.addEventListener("click", () => {
//   counts.innerHTML = 0;
// });
