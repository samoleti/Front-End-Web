"use strict"
function addEvents() {
    fetch("https://api.jsonbin.io/b/602650153b303d3d964f8990")
    .then((blob) => {
        return blob.json();
    })
    .then((result) => {
        document.body.innerText = `price: ${result.events[0].price}`
    })
    .catch((err) => {
        console.log(err);
    });
}
var button = document.getElementById("button-see-more-events");
button.addEventListener("click", addEvents);
