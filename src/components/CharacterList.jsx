import useCharacter from '../hooks/useCharacter'
import CharacterCard from './CharacterCard';

export default function CharacterList() {
    const {characters}=useCharacter()

  return (
    <div className="grid grid-cols-4 gap-10">
      {
        characters.map((character, index) => 
          <CharacterCard key={index} character={character} />
        )
      }
      
    </div>
  );
}
