import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { ISpell } from '../types/spell';
import { getSpells } from '../services/api';

export const Spells = () => {
  const [spells, setSpells] = useState<ISpell[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getSpells();
        setSpells(data);
      } catch (err) {
        setError('Failed to fetch spells. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSpells();
  }, []);

  const messageClasses = "text-center text-2xl mt-20 text-hp-light-paper";

  if (loading) {
    return <div className={messageClasses}>Loading spells...</div>;
  }

  if (error) {
    return <div className={messageClasses}>{error}</div>;
  }

  return (
    <div className="w-full px-[5%]">
      <h2 className="text-center text-4xl font-bold my-8 text-white">Hogwarts spells</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 justify-items-center pb-12">
        {spells.map((spell) => (
          <Card
            key={spell.id}
            type="spell"
            name={spell.name}
            description={spell.description}
          />
        ))}
      </div>
    </div>
  );
};