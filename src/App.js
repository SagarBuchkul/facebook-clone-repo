import logo from './logo.svg';
import './App.css';
import Sign_in_page from './Components/sign_in_page';

function App() {
  return (
    <div className="App">
      <Sign_in_page />
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
