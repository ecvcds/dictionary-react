import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <div className="container">
        <header className="App-header fixed-top">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
          <Dictionary />
        
        <div className="row App-footer">
                <div className="col-8 pt-2 mx-0">
                    <p> 2022 💻 Designed and coded by <strong><a href="https://angry-kare-a79609.netlify.app/" title="Personal Website">Cátia Silva</a></strong>. Open-sourced code on <a href="https://github.com/CVCDS-GECAD/dictionary-react" title="GitHub">GitHub</a></p>
                </div>
                <div className="col-2 pt-2">
                    <a href="https://www.linkedin.com/in/ecvcs/" title="Linkedin">Linkedin</a> {" "}
                    <a href="https://www.instagram.com/x_wuzhere/" title="Instagram">Instagram</a> {" "}
                    <a href="https://www.facebook.com/catiavcsilva/" title="Facebook">Facebook</a> {" "}
                </div>
        </div>
     
        </div>
    </div>
  );
}

export default App;
