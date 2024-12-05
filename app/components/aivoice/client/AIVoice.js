'use client';

export default function AIVoice() {
  const companions = [
    { name: 'Character 1', image: '/images/anime/milo.png' },
    { name: 'Character 2', image: '/images/anime/milo.png' },
    { name: 'Character 3', image: '/images/anime/milo.png' },
    { name: 'Character 4', image: '/images/anime/milo.png' },
    { name: 'Character 5', image: '/images/anime/milo.png' },
  ];

  return (
    <main className="bg-black text-white">
      {/* Header Section */}
      <section className="my-8">
        <h2 className="text-red-500 font-semibold">AI Voice - Coming Soon</h2>
        <h1 className="text-3xl font-bold mt-2">Hear your Companions!</h1>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </section>

      {/* Voice Section */}
      <section className="w-full max-w-6xl bg-gray-800 rounded-xl p-6 relative">
        {/* Companion Circle Images */}
        <div className="flex justify-center items-center space-x-4">
          {companions.map((companion, index) => (
            <div
              key={index}
              className={`w-20 h-20 ${
                index === 2 ? 'w-28 h-28' : ''
              } rounded-full overflow-hidden border-2 ${
                index === 2 ? 'border-blue-500' : 'border-gray-700'
              }`}
            >
              <img
                src={companion.image}
                alt={companion.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Voice Wave & Description */}
        <div className="flex flex-col items-center mt-6">
          <div className="w-full h-8 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full flex items-center">
            <span className="sr-only">Audio Wave</span>
          </div>
          <blockquote className="text-gray-300 italic mt-4 text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          </blockquote>
        </div>

        {/* Volume Button */}
        <button
          className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          aria-label="Volume Control"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 8.75L6.75 12m0 0l4.5 3.25m-4.5-3.25h7.5a2.25 2.25 0 002.25-2.25V10.5m0 3v-.25c0-1.243-1.007-2.25-2.25-2.25H6.75m10.5 0v.75m-2.25-2.25v.5M16.5 12v.5"
            />
          </svg>
        </button>
      </section>
    </main>
  );
}
