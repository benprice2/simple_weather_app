import search_icon from "../assets/images/search.png"

export const Weather_App = () => {
    return(
        <div class="card">
            <div class="search">
                <input type="text" placeholder="enter city name" spellCheck="false"/>
                <button><img src={search_icon} alt="search_icon"/></button>
            </div>
        </div>
    )
}

export default Weather_App;