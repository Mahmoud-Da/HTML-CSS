for (let i = 0; i <= 100; i++) {
  document.write("JavaScriptでグループ処理" + i + "<BR>");
  if (i == 50) {
    break;
  }
}
function changeColor() {
  let changeColor = document.getElementById("green");
  changeColor.style.color = "red";
}
