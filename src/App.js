import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a
          href="https://github.com/inksp0ts09/ReactWeatherProject"
          target="_blank"
          rel="noreferrer"
        >
          Weather App
        </a>
      </footer>
    </div>
  );
}
