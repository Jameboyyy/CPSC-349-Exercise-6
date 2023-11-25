import Calculator from './calculator';
import Game from './tic';

function App() {
  return (
    <div className="App">
      <section className="tic-tac-toe-section">
        <Game />
      </section>
      <section className="calculator-section">
        <Calculator />
      </section>
    </div>
  );
}

export default App;
