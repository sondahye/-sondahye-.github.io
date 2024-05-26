const API_KEY = 'e5a8d4c627a968ca0025e3df7f27a81d';

function GeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${e5a8d4c627a968ca0025e3d}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
}

function GeoErr(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoErr);