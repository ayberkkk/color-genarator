import React, { useEffect, useState } from "react";

const SaveBar = () => {
  const [savedColors, setSavedColors] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const savedColorsJSON = localStorage.getItem("savedColors");
    if (savedColorsJSON) {
      const savedColorsArray = JSON.parse(savedColorsJSON);
      setSavedColors(savedColorsArray);
    }
  }, []);

  const handleClearClick = () => {
    localStorage.removeItem("savedColors");
    setSavedColors([]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const savedColorsCount = savedColors.length; 

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className={`lg:fixed absolute right-10 top-0 p-2 m-4 border-2 border-gray-700 bg-transparent transition-all ease-in duration-200 hover:bg-slate-600 text-white rounded-lg cursor-pointer ${
          isSidebarOpen ? "hidden" : ""
        }`}
      >
        ☰
        {savedColorsCount > 0 && ( 
          <span className="bg-red-500 text-white ml-2 px-2 py-1 rounded-full">
            {savedColorsCount}
          </span>
        )}
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white p-4 w-60 z-10 ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-2 text-black">
            Kaydedilen Renkler
          </h2>
          <button
            onClick={toggleSidebar}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            X
          </button>
        </div>
        <ul>
          {savedColors.map((color, index) => (
            <li
              key={index}
              className="text-white mt-3 rounded-lg"
              style={{ backgroundColor: color }}
            >
              <span className="p-3">{color}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleClearClick}
          className="mt-4 bg-red-500 text-white px-2 py-1 rounded"
        >
          Temizle
        </button>
      </div>
    </div>
  );
};

export default SaveBar;
