import React, { useState } from "react";

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      className=" flex flex-wrap justify-center
       px-4 py-2 m-2 text-white rounded shadow-lg"
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    >
      {color}
    </button>
  );
};


const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("olive");
  const colors = ["red", "blue", "green", "yellow", "purple"]; // Add more colors if needed

  return (
    
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: bgColor }}>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-xl font-bold">Click a Color Button</h1>
        <h2 className="mb-4 text-lg font-semibold">I am {bgColor} color</h2>
        <div className="flex space-x-2">
          {colors.map((color) => (
            <ColorButton key={color} color={color} onClick={setBgColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
