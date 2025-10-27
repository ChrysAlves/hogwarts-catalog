import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { ICharacter } from '../types/character';
import { getStaff } from '../services/api';

export const Staff = () => {
  const [staff, setStaff] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getStaff();
        setStaff(data);
      } catch (err) {
        setError('Failed to fetch staff. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const messageClasses = "text-center text-2xl mt-20 text-hp-light-paper";

  if (loading) {
    return <div className={messageClasses}>Carregando funcionários...</div>;
  }

  if (error) {
    return <div className={messageClasses}>Falha ao buscar funcionários. Tente novamente mais tarde.</div>;
  }

  return (
    <div className="w-full px-[5%]">
      {/* TRADUÇÃO */}
      <h2 className="text-center text-4xl font-bold my-8 text-white">Funcionários de Hogwarts</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 justify-items-center pb-12">
        {staff.map((member) => (
          <Card
            key={member.id}
            type="character"
            name={member.name}
            imageUrl={member.image}
            house={member.house}
            data={[
              { label: 'Espécie', value: member.species },
              { label: 'Gênero', value: member.gender },
              { label: 'Casa', value: member.house },
              { label: 'Nascimento', value: member.dateOfBirth },
              { label: 'Ancestralidade', value: member.ancestry },
              { label: 'Patrono', value: member.patronus },
              { label: 'Cor dos Olhos', value: member.eyeColour },
              { label: 'Cor do Cabelo', value: member.hairColour },
              { label: 'Ator', value: member.actor },
            ]}
          />
        ))}
      </div>
    </div>
  );
};