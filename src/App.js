import logo from './logo.svg';
import './App.css';
import Log_in from './Components/Log_in';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Log_in />
      <Footer />
      {/* <header className="App-header">
      <h1 className="text-3xl font-bold underline text-green-600">
      Hello world!
       </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
