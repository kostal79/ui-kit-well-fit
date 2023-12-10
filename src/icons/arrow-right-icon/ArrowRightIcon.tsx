import React from "react";

type Props = {
  color?: string;
};

const ArrowRightIcon: React.FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector 1"
          d="M1 4.55991H8.89189M8.89189 4.55991L5 0.505859M8.89189 4.55991L5 8.61397"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </>
  );
};

export default ArrowRightIcon;
