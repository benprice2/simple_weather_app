import './css/App.css';
import Weather_App from './components/Weather_App';
const api_key = "85cffdf71c5e0e3b174f2146f103b5a3";
const api_url = "https://api.openweathermap.org/data/2.5/weather?q=" //{city name}&appid={API key}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather_App/>
      </header>
    </div>
  );
}

export default App;
