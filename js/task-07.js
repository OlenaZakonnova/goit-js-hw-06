const valueInput = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

console.log(valueInput);
console.log(spanText);

valueInput.addEventListener("input", onInputFontSize);

function onInputFontSize() {
  spanText.style.fontSize = `${valueInput.value}px`;
}
