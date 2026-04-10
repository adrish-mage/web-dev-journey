let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let leftPanel = document.getElementById("leftPanel");
let rightPanel = document.getElementById("rightPanel");
let errorMsg = document.getElementById("errorMsg");
let locationChip = document.getElementById("locationChip");

let conditionEmojis = {
    "Clear": "☀️",
    "Clouds": "⛅",
    "Rain": "🌧️",
    "Drizzle": "🌦️",
    "Thunderstorm": "⛈️",
    "Snow": "❄️",
    "Mist": "🌫️",
    "Fog": "🌫️",
    "Haze": "🌫️"
};

function showError(msg) {
    errorMsg.innerText = msg;
    errorMsg.style.display = "block";
    setTimeout(() => {
        errorMsg.style.display = "none";
    }, 3000);
}

async function getWeather(city) {
    if (city.trim() === "") return;

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b630ff04fd9c87fb406cf269561f2821&units=metric`);
    let data = await response.json();

    if (data.cod === "404") {
        showError("City not found. Try again.");
        return;
    }

    let emoji = conditionEmojis[data.weather[0].main] || "🌡️";

    document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°`;
    document.getElementById("condition").innerText = `${data.weather[0].main} ${emoji}`;
    document.getElementById("feelsLike").innerText = `Feels like ${Math.round(data.main.feels_like)} °`;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
    document.getElementById("pressure").innerText = `${data.main.pressure} hPa`;

    document.getElementById("chipCity").innerText = `${data.name}, ${data.sys.country}`;
    locationChip.style.display = "flex";

    leftPanel.classList.add("shifted");
    rightPanel.classList.add("open");
}

searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value);
});

cityInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        getWeather(cityInput.value);
    }
});