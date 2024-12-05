const IconButtonList = () => {
  const icons = ["😈", "🔥", "🤓", "😎"]; // List of emojis/icons

  return (
    <div className="flex space-x-4">
      {icons.map((icon, index) => (
        <button
          key={index}
          className="w-12 h-12 bg-gray-700 text-2xl text-white rounded-full flex items-center justify-center transition hover:bg-gray-500 hover:shadow-lg"
          aria-label={`Icon button ${index}`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default IconButtonList;
