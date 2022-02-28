import React,{useState} from 'react';
import Town from './Town';

const City = ({id, cityName, towns}) => {
     const [showTowns, setShowTowns] = useState(false);
     const renderTowns = _ => {
          setShowTowns(!showTowns);
     }
  return (
    <div className="city-container">
      <div id={id} onClick={renderTowns}>
        {cityName}
      </div>
      {showTowns &&
        towns.map((town, idx) => (
          <Town
            key={`town${idx + 1}`}
            id={`town${idx + 1}`}
            townName={town.name}
          />
        ))}
    </div>
  );
}

export default City