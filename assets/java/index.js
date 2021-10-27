fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    .then(response => response.json())
    .then(data => console.log(data));

var button= document.getElementById("first");
button.addEventListener("click",check);

var button= document.getElementById("second");
button.addEventListener("click",check);

function check() {
    console.log("Reach for the stars");
};