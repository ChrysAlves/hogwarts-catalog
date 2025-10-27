export interface ICharacter {
  id: string;
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
  patronus: string;
  image: string;
  actor: string;
}