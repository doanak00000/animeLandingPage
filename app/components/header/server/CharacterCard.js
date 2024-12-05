const CharacterCard = ({ character }) => {
    return (
      <div className="relative w-60 h-70 bg-gray-800 rounded-lg shadow-lg overflow-hidden">

        <img
          src={character.image}
          alt={character.name}
          className="object-cover w-full h-full"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <h3 className="text-white text-lg font-semibold">{character.name}</h3>
          <p className="text-gray-300 text-sm mt-1 line-clamp-2">{character.description}</p>
        </div>
      </div>
    );
  };
  
  export default CharacterCard;
