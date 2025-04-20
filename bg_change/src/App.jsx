

import { React } from "react";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("green");
  const red = () => {
    setColor("red");
  };

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="footer">
        <div className="fixed flex flex-wrap bottom-9 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg m-auto px-2 py-1 rounded-3xl">
            <button
              onClick={red}
              className="bg-red-600 px-3 rounded-2xl text-white"
            >
              Red
            </button>
            <button
              className="bg-yellow-400 px-3 rounded-2xl text-white"
              onClick={() => {
                setColor("yellow");
              }}
            >
              Yellow
            </button>
           
            <button
              className="bg-blue-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="bg-purple-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("purple")}
            >
              Purple
            </button>

            <button
              className="bg-pink-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("pink")}
            >
              Pink
            </button>

            <button
              className="bg-orange-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("orange")}
            >
              Orange
            </button>

            <button
              className="bg-gray-700 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("gray")}
            >
              Gray
            </button>
            <button
              className="bg-indigo-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("indigo")}
            >
              Indigo
            </button>

            <button
              className="bg-teal-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("teal")}
            >
              Teal
            </button>

            <button
              className="bg-lime-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("lime")}
            >
              Lime
            </button>

            <button
              className="bg-cyan-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("cyan")}
            >
              Cyan
            </button>

            <button
              className="bg-fuchsia-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("fuchsia")}
            >
              Fuchsia
            </button>
         

            <button
              className="bg-violet-500 px-3 py-1 rounded-2xl text-white"
              onClick={() => setColor("violet")}
            >
              Violet
            </button>
            <button
              onClick={() => {
                const newColor = getRandomColor();
                setColor(newColor);
              }}
              className="px-3 rounded-2xl text-white"
              style={{ backgroundColor: color }}
            >
              Random Color
            </button>
            

            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// onClick ko function chhahiye hota hai