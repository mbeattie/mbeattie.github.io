
const lat = document.getElementById("lat");
const long = document.getElementById("long");
const acc = document.getElementById("acc");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser";
    }
}

function showPosition(position) {
    lat.innerHTML = position.coords.latitude;
    long.innerHTML = position.coords.longitude;
    acc.innerHTML = position.coords.accuracy;
}

document.getElementById("get_loc").addEventListener("click", () => {
    getLocation(); 
});
