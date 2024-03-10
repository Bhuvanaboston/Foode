import React, { useState } from 'react';
import Rescard from './Rescard';
import ResData from '../utils/mockdata';

const Body = () => {
  const [cardData, setCarddata] = useState(ResData);
  const [inputText, setInputText] = useState('');
  const handleChange = (e) => {
    // 👇 Store the input value to local state
    console.log('hello');

    setInputText(e.target.value);
    console.log(inputText);
    setCarddata(cardData.filter((e) => e.resName == 'KFC'));
  };

  return (
    <div>
      <div className="care-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            name="search-bar"
            onChange={handleChange}
            value={inputText}
          ></input>
        </div>
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              setCarddata(cardData.filter((e) => e.resRating > 4.0));
            }}
          >
            {' '}
            Top rated Restaurents
          </button>
        </div>
      </div>
      <div className="res-card-container">
        {cardData.map((rest) => (
          <Rescard key={rest.id} resObject={{ rest }} />
        ))}
      </div>
    </div>
  );
};

export default Body;
