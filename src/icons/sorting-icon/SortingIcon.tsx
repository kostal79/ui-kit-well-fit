import React from "react";

type Props = {
  color: string;
};

const SortingIcon: React.FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="&#209;&#129;&#208;&#190;&#209;&#128;&#209;&#130;&#208;&#184;&#209;&#128;&#208;&#190;&#208;&#178;&#208;&#186;&#208;&#176;">
          <line
            id="Line 27"
            x1="5"
            y1="8.50586"
            x2="19"
            y2="8.50586"
            stroke={color}
            stroke-width="2"
          />
          <line
            id="Line 28"
            x1="5"
            y1="12.5059"
            x2="14"
            y2="12.5059"
            stroke={color}
            stroke-width="2"
          />
          <line
            id="Line 29"
            x1="5"
            y1="16.5059"
            x2="9"
            y2="16.5059"
            stroke={color}
            stroke-width="2"
          />
        </g>
      </svg>
    </>
  );
};

export default SortingIcon;
