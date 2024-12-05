'use client';

export default function Card({ character }) {
  const { name, description, image } = character;

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">

      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover"
      />


      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  );
}
