import React from "react";

export function CartIcon({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <path fill="none" stroke={color} strokeLinecap="square" strokeWidth="1.5" d="M20,4 L24,16 M12,4 L8,16 M3,12 L29,12 C28.3333333,22 26.3333333,27 23,27 C18,27 14,27 9,27 C5.66666667,27 3.66666667,22 3,12 Z" />
    </svg>
  );
}

export function Basket({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.138 25.265"
      width={size}
      height={size}
    >
      <path fill="none" stroke={ color } strokeLinecap="square" strokeWidth="1.5" strokeMiterlimit="10" d="M18.069 1.265l4 12M10.069 1.265l-4 12M1.069 9.265h26s-1 15-6 15h-14c-5 0-6-15-6-15z"></path>
    </svg>
  );
}

