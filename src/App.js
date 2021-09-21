
import './App.css';
import logo from './mariana-img.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="mariana-logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          My name is Mariana :) and im going to master React!!
        </p>
        <a
          className="App-link"
          href="https://github.com/marmar897"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out! 
        </a>
      </header>
    </div>
  );
}

export default App;
