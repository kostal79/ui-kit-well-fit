import React from "react";

type Props = {
  color: string;
};

const FilterIcon: React.FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Property 1=&#209;&#132;&#208;&#184;&#208;&#187;&#209;&#140;&#209;&#130;&#209;&#128;">
          <rect
            id="Rectangle 243"
            x="8"
            y="20.5059"
            width="17"
            height="2"
            transform="rotate(-90 8 20.5059)"
            fill={color}
          />
          <rect
            id="Rectangle 244"
            x="15"
            y="20.5059"
            width="17"
            height="2"
            transform="rotate(-90 15 20.5059)"
            fill={color}
          />
          <circle
            id="Ellipse 64"
            cx="9"
            cy="16.5059"
            r="2"
            fill="white"
            stroke={color}
            stroke-width="2"
          />
          <circle
            id="Ellipse 65"
            cx="16"
            cy="7.50586"
            r="2"
            fill="white"
            stroke={color}
            stroke-width="2"
          />
        </g>
      </svg>
    </>
  );
};

export default FilterIcon;
