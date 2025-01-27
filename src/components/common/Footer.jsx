import React, { useState } from 'react';

const Footer = () => {
  const [currency, setCurrency] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // SVG Icons for each currency
  const currencyIcons = {
    USD: (
      <svg fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z" />
      </svg>
    ),
    RUB: (
      <svg fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14,12A5,5,0,0,0,14,2H9A1,1,0,0,0,8,3V14H6a1,1,0,0,0,0,2H8v5a1,1,0,0,0,2,0V16h5a1,1,0,0,0,0-2H10V12ZM10,4h4a3,3,0,0,1,0,6H10Z" />
      </svg>
    ),
    EUR: (
      <svg width="16px" height="16px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.374 3C12.2848 1.48593 10.5075 0.5 8.5 0.5C5.18629 0.5 2.5 3.18629 2.5 6.5V8.5C2.5 11.8137 5.18629 14.5 8.5 14.5C10.5075 14.5 12.2848 13.5141 13.374 12M0 5.5H7M0 9.5H7" stroke="#000000" />
      </svg>
    ),
    INR: (
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13h3.75c1.393 0 2.728-.474 3.713-1.318C15.447 10.838 16 9.693 16 8.5c0-1.193-.553-2.338-1.537-3.182C13.478 4.474 12.143 4 10.75 4H7M7 13l8.2 7M7 8.5h11M11 4h7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };

  const handleCurrency = (selected) => {
    setSelectedCurrency(selected);
    setCurrency(false);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative inline-block">
          {/* Dropdown Button */}
          <button
            onClick={() => setCurrency(!currency)}
            className="flex items-center py-2 px-3 border rounded shadow-sm"
          >
            {currencyIcons[selectedCurrency]}
            <h2 className="font-mulish_regular text-xs leading-5 text-gray-600 pl-2">
              {selectedCurrency}
            </h2>
          </button>

          {/* Dropdown Menu */}
          {currency && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-32 z-10">
              {Object.entries(currencyIcons).map(([key, icon]) => (
                <div
                  key={key}
                  className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCurrency(key)}
                >
                  {icon}
                  <span className="pl-2">{key}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
