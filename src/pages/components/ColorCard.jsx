"use client";
import React, { useState } from "react";

const ColorCard = ({ color }) => {
  const [copied, setCopied] = useState(false);

  const copyColorToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <div className="rounded-lg shadow-lg p-2 cursor-pointer">
        <div
          className="w-full h-56 mx-auto rounded"
          style={{ backgroundColor: color }}
          onClick={copyColorToClipboard}
        ></div>
        <div className="text-center text-black relative backdrop-blur-lg">
          <p className="absolute right-0 bottom-0 bg-zinc-50 color-code">
            {color}
          </p>
        </div>
      </div>
      {copied && <div className="text-green-500 text-right mt-2">Copied</div>}
    </div>
  );
};

export default ColorCard;
