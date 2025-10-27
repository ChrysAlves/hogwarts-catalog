import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';

// CORRIGIDO AQUI
import gryffindorImg from '../assets/images/gryffindor-crest.png';
import slytherinImg from '../assets/images/slytherin-crest.png';
import ravenclawImg from '../assets/images/ravenclaw-crest.jpg';
import hufflepuffImg from '../assets/images/hufflepuff-crest.jpg';

export const Houses = (/* ... (resto do componente em inglês) */) => {
  const navigate = useNavigate();

  const handleHouseClick = (houseName: string) => {
    navigate(`/students/house/${houseName.toLowerCase()}`);
  };

  return (
    <div className="w-full px-[5%]">
      <h2 className="text-center text-4xl font-bold my-8 text-white">Hogwarts houses</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 justify-items-center pb-4">
        <Card
          type="house"
          name="Gryffindor"
          imageUrl={gryffindorImg}
          house="gryffindor"
          onClick={() => handleHouseClick('gryffindor')}
        />
        <Card
          type="house"
          name="Slytherin"
          imageUrl={slytherinImg}
          house="slytherin"
          onClick={() => handleHouseClick('slytherin')}
        />
        <Card
          type="house"
          name="Ravenclaw"
          imageUrl={ravenclawImg}
          house="ravenclaw"
          onClick={() => handleHouseClick('ravenclaw')}
        />
        <Card
          type="house"
          name="Hufflepuff"
          imageUrl={hufflepuffImg}
          house="hufflepuff"
          onClick={() => handleHouseClick('hufflepuff')}
        />
      </div>
      <h3 className="text-center text-2xl my-8 mb-12 text-hp-light-paper">Select one to explore...</h3>
    </div>
  );
};