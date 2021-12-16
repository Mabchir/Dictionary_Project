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
        <footer className="App-footer">Coded by Mariem Bchir</footer>
      </div>
    </div>
  );
}

export default App;
