import { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);
  const [clickedB, setButton] = useState(null);

  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  const handleButtonClick = (button) => {
    setButton(button);
  };

  return (
    <div>
      <div>
        <h2>Exo1 part1-2</h2>
        <button onClick={handleClick}>Click Me</button>
        <p>{clicked ? 'Clicked' : 'Not Clicked'}</p>
      </div>

      <div>
        <h2>Exo1 part 3</h2>
        <button onClick={() => handleButtonClick(1)}>Button1</button>
        <button onClick={() => handleButtonClick(2)}>Button2</button>
        <button onClick={() => handleButtonClick(3)}>Button3</button>
        <p>{clickedB ? `Button #${clickedB} was clicked` : ''}</p>
      </div>
      <div>
        <h2>Exo1 part4</h2>
        <button onClick={()=>setCounter((prevCounter)=>prevCounter-1)}>Inc</button>
        <h1>{counter}</h1>
        
        <button onClick={()=>setCounter((prevCounter)=>prevCounter+1)}>Dec</button>

      </div>
    </div>
  );
}

export default App;
