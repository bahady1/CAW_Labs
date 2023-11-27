import React, { useState } from 'react';
import './App.css';


const DynamicDivs = () => {
  const [divStyle, setDivStyle] = useState({
    height: '',
    width: '',
    backgroundColor: '',
  });

  const [divs, setDivs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDivStyle((prevStyle) => ({ ...prevStyle, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivs((prevDivs) => [...prevDivs, divStyle]);
    setDivStyle({ height: '', width: '', backgroundColor: '' });
  };

  return (
    <div>
      <h1>Create Dynamic Divs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={divStyle.height}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={divStyle.width}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={divStyle.backgroundColor}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Div</button>
      </form>

      <div>
        {divs.map((style, index) => (
          <div
            key={index}
            style={{
              height: style.height + 'px',
              width: style.width + 'px',
              backgroundColor: style.backgroundColor,
              border: '1px solid black',
              margin: '5px',
            }}
          >
            {`Div ${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivs;
