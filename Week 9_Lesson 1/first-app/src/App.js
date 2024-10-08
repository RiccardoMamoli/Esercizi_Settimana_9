import logo from './logo.svg';
import './App.css';
import NewButton from './components/NewButton';
import NewImage from './components/NewImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewImage src={logo} alt="logo"/>
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
       <NewButton name="ao"/>
       <NewButton name="tutto"/>
       <NewButton name="bene"/>
      </header>
    </div>
  );
}

export default App;
