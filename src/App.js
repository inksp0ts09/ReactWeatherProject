import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
        This project was coded by Maryanne McGlone and is
        <a
          href="https://github.com/inksp0ts09/ReactWeatherProject"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
