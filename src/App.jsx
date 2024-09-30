import './App.css';
import Coin2 from './components/Coin2'; // Mantendo o gráfico conforme seu código

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Activity</h2>
        <p>Last 7 days</p>
        <div>
          <h1>24,9</h1>
          <h3>Hours spent</h3>   
        </div>
      </header>
      <Coin2 />
      <div className="plataform">
        <p>By Platform</p>
        <div className="aplicativo">
          <p> Mondly platform <span>12.5h</span></p>
          <p> Zoom <span>6.8h</span></p>
          <p> Google Meet <span>4.2h</span></p>
          <p> Skype <span>2.5h</span></p>
        </div>
      </div>


    </div>
  );
}

export default App;
