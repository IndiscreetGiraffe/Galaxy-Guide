var buttonOne= document.getElementById("first");
var buttonTwo= document.getElementById("second");
var searchText= document.getElementById("planet");
var planetName= document.getElementById('planet-name')


function check() {
    var planetSearch = searchText.value;
    searchText.value = "";
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetSearch}`)
    .then(response => response.json())
    .then(data => console.log(data));

};

buttonOne.addEventListener("click",check);
buttonTwo.addEventListener("click",check);