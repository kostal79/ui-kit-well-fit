import React, { FC } from "react";

type Props = {
  color?: string;
};
const BasketIcon: FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="19"
        height="23"
        viewBox="0 0 19 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 738">
          <path
            className="stroke"
            id="Rectangle 199"
            d="M0.9 7.13828H17.9571V19.0002C17.9571 20.7123 16.5692 22.1002 14.8571 22.1002H4C2.28792 22.1002 0.9 20.7123 0.9 19.0002V7.13828Z"
            stroke={color}
            stroke-width="1.8"
          />
          <path
            className="stroke"
            id="Rectangle 200"
            d="M5.23624 11.4761V4.99988C5.23624 2.79074 7.0271 0.999884 9.23624 0.999884H9.61719C11.8263 0.999884 13.6172 2.79074 13.6172 4.99988V11.4761"
            stroke={color}
            stroke-width="1.8"
          />
        </g>
      </svg>
    </>
  );
};

export default BasketIcon;
