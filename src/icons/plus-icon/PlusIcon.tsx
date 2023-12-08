import React, { FC } from "react";

type Props = {
  color?: string;
}
const PlusIcon:FC<Props> = ({color="white"}: Props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="&#208;&#191;&#208;&#187;&#209;&#142;&#209;&#129;">
          <path
            id="Ellipse 41 (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            fill={color}
            stroke={color}
          />
          <path
            id="+"
            d="M11.2415 15H12.7585V12.7585H15V11.2415H12.7585V9H11.2415V11.2415H9V12.7585H11.2415V15Z"
            fill={color}
          />
        </g>
      </svg>
    </>
  );
};

export default PlusIcon;
