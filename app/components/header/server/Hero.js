import CharacterCard from "./CharacterCard";
import IconButtonList from "../client/IconButtonList";

const Hero = ({ section }) => {
  const sectionData = {
    girls: {
      title: "Into a bit danger?",
      description: "Explore characters from the Girls section.",
      characters: [
        {
          name: "Mellow",
          image: "/images/girls/mellow.png",
          description: "He is your enemy but you guys are in the same friend group.",
        },
        {
          name: "Jay Smith",
          image: "/images/girls/mellow.png",
          description: "A complex character with a mysterious past.",
        },
        {
          name: "Milo",
          image: "/images/girls/mellow.png",
          description: "Milo is unpredictable and always keeps you guessing.",
        },
      ],
    },
    anime: {
      title: "Love Anime?",
      description: "Discover amazing anime characters.",
      characters: [
        {
          name: "Katsu",
          image: "/images/anime/milo.png",
          description: "A skilled fighter with a fiery personality.",
        },
        {
          name: "Hikaru",
          image: "/images/anime/milo.png",
          description: "The calm strategist of the group.",
        },
        {
          name: "Rina",
          image: "/images/anime/milo.png",
          description: "A cheerful soul with a passion for adventure.",
        },
      ],
    },
    guys: {
      title: "Looking for Action?",
      description: "Meet the coolest characters from the Guys section.",
      characters: [
        {
          name: "Max",
          image: "/images/guys/jay.png",
          description: "The charming leader of the group.",
        },
        {
          name: "Leo",
          image: "/images/guys/jay.png",
          description: "Strong, silent, and dependable.",
        },
        {
          name: "Ethan",
          image: "/images/guys/jay.png",
          description: "Always ready to crack a joke and lighten the mood.",
        },
      ],
    },
  };

  const data = sectionData[section] || sectionData.girls;

  return (
    <section className="bg-gray-900 text-white lg:flex flex-row items-center justify-around p-8 rounded-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-400 pb-3">Are you</h1>
        <h2 className="text-4xl font-bold pb-3">{data.title}</h2>
        <p className="text-gray-400 pb-4">{data.description}</p>
        <IconButtonList />
      </div>

      <div className="flex space-x-4">
        {data.characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
