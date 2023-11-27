import React, { useState } from 'react';
import './App.css';

const DisplayTab = ({ table }) => {
  return (
    <ul>
      {table.map((item, index) => (
        <li key={index}>
          {`Element ${index + 1} is: ${item}${index === 2 && table.length > 3 ? ' etc.' : ''}`}
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [tab, setTab] = useState(["hello", "world", "from", "react"]);
  const table2 = ["apple", "orange", "banana", "grape"];

  const handleItemClick = (index) => {
    const newTab = [...tab];
    newTab.splice(index, 1);
    setTab(newTab);
  };

  return (
    <div>
      <div>
        <h1>Exo2 part1</h1>
        <ul>
          {tab.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
       
        <h1>Exo2 part2</h1>
        <ul>
          {tab.map((item, index) => (
            <li key={index}>
              {index <3 ?`Element ${index + 1} is: ${item}` : 'etc.' }
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Exo2 part3</h1>
        <ul>
          {tab.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(index)}>
              {`Element ${index + 1} is: ${item}`}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Exo2 part4</h1>
        <ul>
          {table2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Exo2 part5</h1>
        <h2>DisplayTab 1</h2>
        <DisplayTab table={tab} />

        <h2>DisplayTab 2</h2>
        <DisplayTab table={table2} />
      </div>
    </div>
  );
}

export default App;
