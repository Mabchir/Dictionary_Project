import logo from "./Dic_logo_svg.svg";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App_logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://goofy-easley-2c8717.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Mariem Bchir
          </a>
          . Source Code:{" "}
          <a
            href="https://github.com/Mabchir/Dictionary_Project"
            target="_blank"
            rel="noreferrer"
          >
            Git
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
