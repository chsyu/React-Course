import React from "react";

export function CartIcon({size}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 32 32"
    >
      <path fill="none" stroke="#ffffff" strokeLinecap="square" strokeWidth="1.5" d="M20,4 L24,16 M12,4 L8,16 M3,12 L29,12 C28.3333333,22 26.3333333,27 23,27 C18,27 14,27 9,27 C5.66666667,27 3.66666667,22 3,12 Z"/>
    </svg>
  );
}

