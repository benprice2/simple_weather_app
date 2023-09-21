import search_icon from "../assets/images/search.png"
import humidity_icon from "../assets/images/humidity.png"
import wind from "../assets/images/wind.png"
import clear from "../assets/images/clear.png"
import clouds from "../assets/images/clouds.png"
import drizzle from "../assets/images/drizzle.png"
import rain from "../assets/images/rain.png"
import snow from "../assets/images/snow.png"
import { useState } from "react"


const Weather_App = () => {
    const apiKey = "85cffdf71c5e0e3b174f2146f103b5a3";

    const [weatherIcon, setWeatherIcon] = useState(clouds);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value !== ""){
            let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${element[0].value}&appid=${apiKey}`
            console.log(url)
            let response = await fetch(url);
            let data = await response.json();
            console.log(data)
    
            const humidity_percent = document.getElementsByClassName("humidity_percent");
            const wind = document.getElementsByClassName("wind");
            const temp = document.getElementsByClassName("temp");
            const location = document.getElementsByClassName("city");
    
            humidity_percent[0].innerHTML = data.main.humidity + "%";
            wind[0].innerHTML = data.wind.speed + "km/h";
            temp[0].innerHTML =  Math.round(data.main.temp) + "°C";
            location[0].innerHTML = data.name;

            console.log(data.weather[0].icon)

            if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
                setWeatherIcon(clear)
            }
            else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                setWeatherIcon(clouds)
            }
            else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                setWeatherIcon(drizzle)
            }
            else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                setWeatherIcon(drizzle)
            }
            else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                setWeatherIcon(rain)
            }
            else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                setWeatherIcon(rain)
            }
            else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                setWeatherIcon(snow)
            }
            else
            {
                setWeatherIcon(clear)
            }

            console.log(weatherIcon)
        }
    }
    

        return(
            <div className="card">
                <div className="search">
                        <input className="cityInput" type="text" placeholder="Enter city name" spellCheck="false"/>
                        <button onClick={()=>{search()}}><img src={search_icon} alt="search_icon"/></button>
                </div>
                <div className="weather">
                    <img src={weatherIcon} alt="weather_image" className="weather-icon"/>
                    <h1 className="temp">22C</h1>
                    <h2 className="city">Auckland</h2>
                    <div className="details">
                        <div className="col">'
                            <img src={humidity_icon} alt="humidty-img"/>
                            <div>
                                <p className="humidity_percent">50%</p>
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