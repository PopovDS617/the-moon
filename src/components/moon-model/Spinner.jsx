import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner">
      <svg
        style={{
          margin: 'auto',
          background: 'transparent',
          display: 'block',
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          fill="none"
          d="M50 30A20 20 0 0 1 50 70A20 20 0 0 1 50 30"
          stroke="#bbbbbb"
          strokeWidth="40"
        >
          <animate
            attributeName="stroke-dasharray"
            repeatCount="indefinite"
            dur="1.923076923076923"
            values="0 0 0 126;0 0 126 126;0 126 126 126"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            calcMode="spline"
          ></animate>
          <animate
            attributeName="stroke"
            values="#bbbbbb;#bbbbbb;#bbbbbb;#bbbbbb;#bbbbbb"
            keyTimes="0;0.25;0.5;0.75;1"
            dur="7.692307692307692s"
            calcMode="discrete"
            repeatCount="indefinite"
          ></animate>
        </path>
      </svg>
    </div>
  );
};

export default Spinner;
