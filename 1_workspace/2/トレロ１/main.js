const inputElemet = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
// 追加ボタンを押したら
addButton.onclick = function() {
  // 入力欄の値(テキスト)を取り出して、textに入れる
  const text = inputElemet.value

  const card = document.createElement("div")
  card.className("card")
}
