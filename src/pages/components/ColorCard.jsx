import React, { useState, useEffect } from "react";

const ColorCard = ({ color }) => {
  const [copied, setCopied] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedColors = localStorage.getItem("savedColors");
    if (savedColors) {
      const savedColorsArray = JSON.parse(savedColors);
      setIsChecked(savedColorsArray.includes(color));
    }
  }, [color]);

  const copyColorToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    let savedColors = localStorage.getItem("savedColors");
    if (!savedColors) {
      savedColors = [];
    } else {
      savedColors = JSON.parse(savedColors);
    }

    if (isChecked) {
      savedColors = savedColors.filter((savedColor) => savedColor !== color);
    } else {
      savedColors.push(color);
    }

    localStorage.setItem("savedColors", JSON.stringify(savedColors));
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 cursor-pointer scale-100 transition-transform ease-in duration-200 hover:scale-105">
      <div className="rounded-lg shadow-lg p-2">
        <div
          className="w-full h-56 mx-auto rounded-lg"
          style={{ backgroundColor: color }}
          onClick={copyColorToClipboard}
        ></div>
        <div className="text-center text-black relative backdrop-blur-lg">
          <p className="absolute right-0 bottom-0 bg-zinc-50 color-code text-sm font-semibold">
            {color}
          </p>
        </div>
      </div>
      {copied && (
        <div className="relative">
          <span className="absolute copied-text bg-zinc-100 rounded-lg text-green-500 p-1">
            Copied
          </span>
        </div>
      )}
      <div className="relative">
        <label className="absolute bottom-2 left-2 bg-zinc-50 save-btn">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-500 rounded-lg"
          />
          <span className="ml-2 text-gray-700">Save</span>
        </label>
      </div>
    </div>
  );
};

export default ColorCard;
