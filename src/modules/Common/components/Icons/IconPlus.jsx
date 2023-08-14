import React from "react";

function IconPlus({ width = 20, height = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C9.44772 2 9 2.44772 9 3V9.5H2.5C1.94772 9.5 1.5 9.94772 1.5 10.5C1.5 11.0523 1.94772 11.5 2.5 11.5H9V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V11.5H17.5C18.0523 11.5 18.5 11.0523 18.5 10.5C18.5 9.94772 18.0523 9.5 17.5 9.5H11V3C11 2.44772 10.5523 2 10 2Z"
        fill="#2D2D32"
      />
    </svg>
  );
}

export default IconPlus;
