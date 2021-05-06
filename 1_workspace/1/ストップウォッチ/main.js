const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  display.textContent = count / 100
}
button.onclick = function() {
  setInterval(countUp, 10)
  button.textContent = "stop"
}
