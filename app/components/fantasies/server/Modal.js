import Link from "next/link";
import Image from "next/image";
export function Modal({ fantasy, onClose }) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg max-w-lg w-full p-6 text-white relative">

          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            onClick={onClose}
          >
            ✕
          </button>
  
          <div className="text-center">
            <Image
              src={fantasy.image}
              alt={fantasy.title}
              width={400}
              height={250}
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{fantasy.title}</h3>
            <p className="text-gray-400 mb-6">{fantasy.description}</p>
            <Link href="https://www.nectar.ai">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
              Chat Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
}