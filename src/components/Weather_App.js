import search_icon from "../assets/images/search.png"
import clear from "../assets/images/clear.png"
import clouds from "../assets/images/clouds.png"
import drizzle from "../assets/images/drizzle.png"
import humidity from "../assets/images/humidity.png"
import rain from "../assets/images/rain.png"
import snow from "../assets/images/snow.png"
import wind from "../assets/images/wind.png"

export const Weather_App = () => {
    return(
        <div class="card">
            <div class="search">
                <input type="text" placeholder="Enter city name" spellCheck="false"/>
                <button><img src={search_icon} alt="search_icon"/></button>
            </div>
            <div class="weather">
                <img src={wind} alt="weather_image" class="weather-icon"/>
                <h1 class="temp">22°c</h1>
                <h2 class="city">New York</h2>
                <div class="details">
                    <div class="col">'
                        <img src={humidity} alt="humidty-img"/>
                        <div>
                            <p class="humidity">50%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div class="col">'
                        <img src={wind} alt="wind-img"/>
                        <div>
                            <p class="wind">15 km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather_App;