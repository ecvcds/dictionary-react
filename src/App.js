import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <div className="container">
        <Dictionary />
      </div>
      <footer className ="App-footer">
          This project was coded by {" "}
          <a href = "https://angry-kare-a79609.netlify.app/" target ="_blank" rel="noreferrer">Cátia Silva</a> and is{" "}
          <a href="https://github.com/CVCDS-GECAD/dictionary-react" target ="_blank" rel="noreferrer" >Open-sourced</a>
          {" "}on Github and hosted on Netlify
        </footer>
    </div>
  );
}

export default App;
