import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/students');
  };

  return (
    <div className="flex items-center justify-start min-h-screen box-border bg-hogwarts-castle bg-cover bg-center">
      <div className="max-w-xl text-left px-[5%]">
        <div className="pt-28">
          <h1 className="text-5xl md:text-6xl font-bold text-white m-0">
            Hogwarts Catalog
          </h1>
          <p className="text-xl text-hp-light-paper my-6">
            Magic is closer than you think. Step through the gate and discover what Hogwarts has in store for you…
          </p>
          <button 
            className="bg-hp-gold text-hp-dark-blue border-none py-3 px-10 text-lg font-bold cursor-pointer transition-all duration-200 ease-in-out rounded hover:scale-105 hover:bg-yellow-400"
            onClick={handleExploreClick}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};