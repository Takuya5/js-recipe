const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.add("rounded")
  if (figure.classList.contains("rounded")) {
    figure.classList.remove("rounded")
  }
}
figure.onmouseover = function() {
  figure.classList.add("rounded")
}
