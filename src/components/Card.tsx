import React from 'react';
import defaultCharacterImg from '../assets/images/default-character.jpeg';
import defaultSpellImg from '../assets/images/default-spell.jpg';

interface CardData {
  label: string;
  value: string | number | null;
}

interface CardProps {
  type: 'character' | 'spell' | 'house';
  name: string;
  imageUrl?: string | null;
  house?: string;
  data?: CardData[];
  description?: string;
  onClick?: () => void;
}

const getHouseColorClass = (house: string = "") => {
  switch (house.toLowerCase()) {
    case 'gryffindor':
      return 'bg-hp-gryffindor';
    case 'slytherin':
      return 'bg-hp-slytherin';
    case 'ravenclaw':
      return 'bg-hp-ravenclaw';
    case 'hufflepuff':
      return 'bg-hp-hufflepuff';
    default:
      return 'bg-hp-gray';
  }
};

export const Card = ({
  type,
  name,
  imageUrl,
  house,
  data,
  description,
  onClick
}: CardProps) => {

  let colorLineClass: string;
  let imageSrc: string;

  if (type === 'character') {
    colorLineClass = getHouseColorClass(house);
    imageSrc = imageUrl || defaultCharacterImg;
  } else if (type === 'spell') {
    colorLineClass = 'bg-hp-spell';
    imageSrc = imageUrl || defaultSpellImg;
  } else {
    colorLineClass = getHouseColorClass(house);
    imageSrc = imageUrl || defaultCharacterImg;
  }
  
  const cardClasses = `
    bg-hp-light-paper rounded-lg overflow-hidden w-[280px] shadow-lg 
    transition-all duration-300 ease-in-out text-hp-dark-gray 
    flex flex-col 
    hover:scale-105 hover:shadow-2xl 
    ${onClick ? 'cursor-pointer' : ''}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      
      {/* 1. BARRA DE COR SUPERIOR (MAIS ALTA: 80px) */}
      <div className={`h-20 w-full ${colorLineClass}`}></div>
      
      {/* 2. AVATAR */}
      {/* - Centralizado com 'mx-auto'
        - Puxado 50px para cima com '-mt-[50px]' (metade da sua altura de 100px)
        - 'z-10' para garantir que fique por cima da barra de cor
      */}
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden 
                      border-4 border-hp-light-paper bg-hp-light-gray 
                      -mt-[50px] mx-auto relative z-10">
        
        {/* 3. IMAGEM COM FOCO NO ROSTO */}
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
      </div>
      
      {/* 4. NOME (COM MARGEM SUPERIOR PEQUENA) */}
      <h3 className="text-center text-2xl font-bold mt-4 mx-2 text-hp-dark-blue">{name}</h3>
      
      {/* 5. DADOS (COM PADDING SUPERIOR PEQUENO) */}
      {type === 'character' && data && (
        <div className="px-6 pb-6 pt-2 text-left"> 
          {data.map((item) => (
            <p key={item.label} className="text-sm my-1 text-hp-dark-gray">
              <strong className="font-bold text-hp-dark-blue">{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      )}
      
      {type === 'spell' && description && (
         <div className="px-6 pb-6 pt-2 text-left">
            <p className="text-sm my-1 text-hp-dark-gray">{description}</p>
         </div>
      )}
      
      {type === 'house' && (
         <div className="px-6 pb-6 pt-2 text-left min-h-[150px]">
            <p className="text-sm my-1 text-hp-dark-gray text-center">Click to explore</p>
         </div>
      )}
    </div>
  );
};