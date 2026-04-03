


let search = document.querySelector("button");

search.addEventListener("click",() =>{
    let city = document.querySelector("input").value;
    console.dir(city);
    getWeather(city);
})

async function getWeather(city){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b630ff04fd9c87fb406cf269561f2821&units=metric`);
    let data = await response.json();
    console.log(data.main.pressure);
}

