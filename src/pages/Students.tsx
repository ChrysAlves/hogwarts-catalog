import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { ICharacter } from '../types/character';
import { getStudents, getStudentsByHouse } from '../services/api';

export const Students = () => {
  const [students, setStudents] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { houseName } = useParams<{ houseName: string }>();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError(null);
        let data: ICharacter[];
        if (houseName) {
          data = await getStudentsByHouse(houseName);
        } else {
          data = await getStudents();
        }
        setStudents(data);
      } catch (err) {
        setError('Failed to fetch students. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [houseName]);

  const getTitle = () => {
    if (houseName) {
      return `${houseName.charAt(0).toUpperCase() + houseName.slice(1)} Students`;
    }
    return "Hogwarts students";
  };

  const messageClasses = "text-center text-2xl mt-20 text-hp-light-paper";

  if (loading) {
    return <div className={messageClasses}>Loading students...</div>;
  }

  if (error) {
    return <div className={messageClasses}>{error}</div>;
  }

  return (
    <div className="w-full px-[5%]">
      <h2 className="text-center text-4xl font-bold my-8 text-white">{getTitle()}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 justify-items-center pb-12">
        {students.map((student) => (
          <Card
            key={student.id}
            type="character"
            name={student.name}
            imageUrl={student.image}
            house={student.house}
            data={[
              { label: 'Species', value: student.species },
              { label: 'Gender', value: student.gender },
              { label: 'House', value: student.house },
              { label: 'Date of Birth', value: student.dateOfBirth },
              { label: 'Ancestry', value: student.ancestry },
              { label: 'Patronus', value: student.patronus },
            ]}
          />
        ))}
      </div>
    </div>
  );
};