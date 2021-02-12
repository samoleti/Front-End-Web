"use strict"
function addKeyword() {
    var keyword = document.createElement("input");
    keyword.setAttribute("type", "text");
    keyword.setAttribute("class", "new-keyword");
    var button = document.getElementById("button-add-keyword");
    var parentDiv = document.getElementById("keywords");
    parentDiv.insertBefore(keyword, button);
}
var button = document.getElementById("button-add-keyword");
button.addEventListener("click", addKeyword);