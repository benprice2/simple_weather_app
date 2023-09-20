import search_icon from "../assets/images/search.png"
import clear from "../assets/images/clear.png"
import clouds from "../assets/images/clouds.png"
import drizzle from "../assets/images/drizzle.png"
import humidity from "../assets/images/humidity.png"
import rain from "../assets/images/rain.png"
import snow from "../assets/images/snow.png"
import wind from "../assets/images/wind.png"

export const Weather_App = () => {
    
    const apiKey = "85cffdf71c5e0e3b174f2146f103b5a3";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

    const searchBox = document.querySelector(".search input")
    const searchBtn = document.querySelector(".search button")


    async function checkWeather(cityName){
        const response = await fetch(apiUrl + cityName +`&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    }
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })



    return(
        <div className="card">
            <div className="search">
                <input type="text" placeholder="Enter city name" spellCheck="false"/>
                <button><img src={search_icon} alt="search_icon"/></button>
            </div>
            <div className="weather">
                <img src={wind} alt="weather_image" class="weather-icon"/>
                <h1 className="temp">22°C</h1>
                <h2 className="city">New York</h2>
                <div className="details">
                    <div className="col">'
                        <img src={humidity} alt="humidty-img"/>
                        <div>
                            <p class="humidity">50%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">'
                        <img src={wind} alt="wind-img"/>
                        <div>
                            <p className="wind">15km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather_App;