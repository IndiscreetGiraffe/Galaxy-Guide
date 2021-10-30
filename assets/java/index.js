var buttonOne= document.getElementById("first");
var buttonTwo= document.getElementById("second");
var searchText= document.getElementById("planet");
var planetName= document.getElementById('planet-name')


function check() {
    var planetSearch = searchText.value;
    searchText.value = "";
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetSearch}`)
    .then(response => response.json())
    .then(data => {
        console.log("i am data object ", data)
        console.log("I am mass", data.mass);
        console.log("I am each moon ", data.moons[0].moon)
        document.getElementById("mass").innerHTML = ""
        document.getElementById("moons").innerHTML = ""
        
        planetName.innerHTML = "Planet Name: " + data.name

        document.getElementById("aphelion").innerHTML = "Aphelion: " + data.aphelion
        document.getElementById("mass").innerHTML += "mass: " + data.mass.massValue
        document.getElementById("mass").innerHTML += " mass exponent " + data.mass.massExponent
        document.getElementById("moons").innerText = "Moons"
        document.getElementById("argPeriapsis").innerHTML = "Arg Perispsis: " + data.argPeriapsis
        document.getElementById("aroundPlanet").innerHTML = "Around Planet: " + data.aroundPlanet
        document.getElementById("avgTemp").innerHTML = "Avg Temp: " + data.avgTemp
        document.getElementById("axialTilt").innerHTML = "Axial Tilt: " + data.axialTilt
        document.getElementById("density").innerHTML = "Density: " + data.density
        document.getElementById("dimension").innerHTML = "Dimension: " + data.dimension
        document.getElementById("discoveredBy").innerHTML = "Discoverd By: " + data.discoveredBy
        document.getElementById("discoveryDate").innerHTML = "Discovery Date: " + data.discoveryDate
        document.getElementById("eccentricity").innerHTML = "Eccentricity: " + data.eccentricity
        document.getElementById("equaRadius").innerHTML = "Equator Radius: " + data.equaRadius
        document.getElementById("escape").innerHTML = "Escaping gases: " + data.escape
        document.getElementById("flattening").innerHTML = "Flattening: " + data.flattening
        document.getElementById("gravity").innerHTML = "Gravity: " + data.gravity
        document.getElementById("inclination").innerHTML = "Inclination: " + data.inclination
        document.getElementById("longAscNode").innerHTML = "Long Asc Node: " + data.longAscNode
        document.getElementById("mainAnomaly").innerHTML = "Main Anomaly: " + data.mainAnomaly
        document.getElementById("meanRadius").innerHTML = "Mean Radius: " + data.meanRadius
        

        for (let index = 0; index < data.moons.length; index++) {
            var moonName = data.moons[index].moon;
            document.getElementById("moons").innerHTML+= "<li>" + moonName + "</li>"
            
        }

    });

};

buttonOne.addEventListener("click",check);
buttonTwo.addEventListener("click",check);