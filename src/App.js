import './App.css';
import './ReactCounter.css';
import { useState } from 'react'


function ReactCounter(){

  const [count, setCount] = useState(0);

  function decrease(){
    setCount(count - 1)
  }

  function increase(){
    setCount(count + 1)
  }

  function reset(){
    setCount(0)
  }

  return(
    <div className='ReactCounter'>
      <div className='Counter-section'>
        <h1>React Counter</h1>

        <p> Your Current Count is</p>

        <div className='Counter'>
          <p>{count}</p>
        </div>

        <div className='buttons'>
          <button onClick={decrease} className='minus'>-</button>
          <button onClick={reset} className='reset'>Reset</button>
          <button onClick={increase} className='add'>+</button>

        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ReactCounter /> 
    </div>
  );
}

export default App;

