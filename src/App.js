import './App.css';
import EightBall from './EightBall.js';
import answers from './answers.js';

function App() {
  return (
    <>
      <EightBall answers={answers} />
    </>
  );
};

export default App;
