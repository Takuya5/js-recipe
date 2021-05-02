const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusbutton = document.getElementById("minus-button")
const kakeruButton = document.getElementById("kakeru-button")
let count = 0
plusButton.onclick = function() {
  count += 1
  display.textContent = count
}
minusbutton.onclick = function() {
  count -= 1
  display.textContent = count
}
kakeruButton.onclick = function() {
  count *= 2
  display.textContent = count
}
