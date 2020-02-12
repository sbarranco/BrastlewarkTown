import React from 'react';

function PopulationCard({ item }) {

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={item.thumbnail} alt="Avatar" className="profile-image"/>
          <div className="name">{item.name}</div>
        </div>
        <div className="flip-card-back">
          <div className="back-content">
            <div><strong>Age: </strong>{item.age}</div>
            <div><strong>Weight: </strong>{item.weight}</div>
            <div><strong>Height: </strong>{item.height}</div>
            <div><strong>Hair Color: </strong>{item.hair_color}</div>
            <div><strong>Professions: </strong>{item.professions.length > 0 ? item.professions.join(", ") : "No profession"}</div>
            <div><strong>Friends: </strong>{item.friends.length > 0 ? item.friends.join(", ") : "No friends"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopulationCard;