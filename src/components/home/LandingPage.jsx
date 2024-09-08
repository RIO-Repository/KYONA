import Particle from "./Particle.jsx";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="h-screen">
      <div className="relative">
        <Particle />

        <div className="relative z-20 flex flex-col items-center justify-center h-screen text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Your Vision, Our AI!
          </h1>
          <h2 className="text-white text-3xl md:text-4xl mb-6">
            Create. Imagine. Generate.
          </h2>
          <p className="text-white text-lg md:text-xl mb-12 max-w-2xl">
          Unleash your creativity with our AI-powered image generator. 
          Turn simple text prompts into stunning visuals effortlessly and instantly.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/home"
              className="px-8 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              Get started
            </Link>
            <Link
              to="/ecosystems"
              className="px-8 py-3 bg-transparent border border-white text-white text-lg rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
