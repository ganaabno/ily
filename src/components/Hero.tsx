import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [noButtonStyle, setNoButtonStyle] = useState({}); // State for No button position

  const moveNoButton = () => {
    const randomX = Math.random() * (window.innerWidth - 150); // Random X position
    const randomY = Math.random() * (window.innerHeight - 600); // Random Y position

    setNoButtonStyle({
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-36">
        <img
          src="https://media.tenor.com/t-RThLaACGQAAAAi/porfa.gif" // Replace with your GIF URL
          alt="Description of the GIF"
          className="max-w-full h-auto"
        />
      </div>
      <h1 className="font-serif text-rose-400 font-semibold text-5xl flex justify-center items-center mt-8">
        Will You Go Out With Me?
      </h1>
      <div className="flex gap-52 mt-10 justify-center font-serif text-white relative">
        {/* Yes Button */}
        <Link to="/yes">
          <button className="rounded-xl bg-pink-400 py-2 px-16 hover:bg-pink-700">
            Yes!
          </button>
        </Link>

        {/* No Button */}
        <button
          className="rounded-xl bg-pink-400 py-2 px-16 hover:bg-pink-700"
          style={noButtonStyle}
          onMouseEnter={moveNoButton}
        >
          No :(
        </button>
      </div>
    </div>
  );
}

export default Hero;
