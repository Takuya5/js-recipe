const FIRSTBUTTON = document.getElementById("first-button")
const SECONDBUTTON = document.getElementById("second-button")
const THIRDBUTTON = document.getElementById("third-button")
const DISPLAY = document.getElementById("display")
FIRSTBUTTON.onclick = function() {
  DISPLAY.textContent = "残念！それは筋肉バカです"
}
SECONDBUTTON.onclick = function() {
  DISPLAY.textContent = "正解！それが神の子です"
}
THIRDBUTTON.onclick = function() {
  DISPLAY.textContent = "残念！それはただの恐竜です"
}

const takuya = {
  name: "阿部拓哉",
  age: "21",
  hobby: ["サッカー", "筋トレ"],
  university: "中央大学",
  sayhello: function() {
    console.log("お願いします")
  },
}
