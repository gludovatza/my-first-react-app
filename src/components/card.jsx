import React from 'react';
import '../css/card.css';

const Card = () => {
  return (
    <div className="card">
      <h1>Statikus komponens</h1>
      <span>Én vagyok az első komponensed! </span>
      <button className="gomb">Komponens gombja</button>
    </div>  
  )
}

export default Card