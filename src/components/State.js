import React, {useState} from "react";
import City from "./City";
const State = ({id, name, cities }) => {
     const [showCities, setShowCities] = useState(false);
  const renderCities = () => {
     setShowCities(!showCities);
  }
  return (
    <div className="state-container">
      <div id={id} onClick={renderCities}>
        {name}
      </div>
      {showCities &&
        cities.map((city, idx) => (
          <City
            key={`city${idx + 1}`}
            id={`city${idx + 1}`}
            cityName={city.name}
            towns={city.towns}
          />
        ))}
    </div>
  );
};

export default State;
