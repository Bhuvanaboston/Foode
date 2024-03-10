import React from 'react';

const Rescard = ({ resObject }) => {
  const { resName, resCusine, resRating, resTime, resImage } = resObject?.rest;
  return (
    <div className="res-card">
      <img className="food-img" src={resImage} alt="food1"></img>
      <h4>{resName}</h4>
      <h5>{resCusine}</h5>
      <h5>{resRating + ' stars'}</h5>
      <h6>{resTime + ' mins'}</h6>
    </div>
  );
};

export default Rescard;
