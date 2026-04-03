


let search = document.querySelector("button");

search.addEventListener("click",() =>{
    
    let city = document.querySelector("input").value;
    
    getWeather(city);
})
let input = (document.querySelector("input"));

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        getWeather(input.value);
    }
});


async function getWeather(city){
    search.innerText = "Fetching...";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b630ff04fd9c87fb406cf269561f2821&units=metric`);
    search.innerText = "Search";
    let data = await response.json();

    if (data.cod === "404"){
        document.getElementById("pressure").innerText = "City NOT FOUND ! Try Again";
        return;
    }
    console.log(data);
    document.getElementById("pressure").innerText = `Pressure : ${data.main.pressure}`;
    document.getElementById("humidity").innerText = `Humidity : ${data.main.humidity}`;
    document.getElementById("temp_max").innerText = `Maximum Temperature : ${data.main.temp_max}`;
    document.getElementById("temp_min").innerText = `Minimum Temperature : ${data.main.temp_min}`;
    document.getElementById("ground_level").innerText = `Ground level : ${data.main.grnd_level}`;
    document.getElementById("weather").innerText = `Weather: ${data.weather[0].main}`;
    
}

