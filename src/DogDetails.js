import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Navigate to="/dogs" replace={true} />;

  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
