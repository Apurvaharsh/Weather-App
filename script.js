const apiKey="462f52f3242ab474989f7718b751423e";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherlogo img");

async function checkWeather(city) {
    const response= await fetch(apiURL+city+`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".error").style.display = "none";
        var data= await response.json();

    console.log(data);

    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temp1").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Mists"){
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }
   
}
    }

    

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})


