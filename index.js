let count = 0;
let countElement = document.getElementById("count-element");
let saveElement = document.getElementById("save-element");

function increment() {
  count += 1;
  countElement.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveElement.textContent += countStr;
  count = 0;
  countElement.textContent = 0;
}
