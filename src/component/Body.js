import React from 'react';
import Rescard from './Rescard';
import ResData from '../utils/mockdata';

const Body = () => {
  return (
    <>
      <div className="search-container">Search Bar</div>
      <div className="res-card-container">
        {ResData.data.map((rest) => (
          <Rescard key={rest.id} resObject={{ rest }} />
        ))}
      </div>
    </>
  );
};

export default Body;
