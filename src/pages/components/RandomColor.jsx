import React, { useState, useEffect } from "react";
import ColorCard from "./ColorCard";

const RandomColor = ({ onRefreshClick }) => {
  const [colors, setColors] = useState([]);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateRandomColors = () => {
    const newColors = [];
    for (let i = 0; i < 500; i++) {
      newColors.push(generateRandomColor());
    }
    setColors((prevColors) => [...prevColors, ...newColors]);
  };

  useEffect(() => {
    generateRandomColors();
  }, []);

  const handleRefreshClick = () => {
    setColors([]);
    generateRandomColors();
  };

  return (
    <div>
      <button
        className="border-2 border-gray-700 rounded-lg bg-transparent transition-all ease-in duration-200 hover:bg-slate-600 text-white py-2 px-4 mb-4 absolute top-4 right-20"
        onClick={handleRefreshClick}
      >
        ↻
      </button>

      <div className="flex flex-wrap">
        {colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default RandomColor;
