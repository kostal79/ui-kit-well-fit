import React from "react";

type Props = {
  color: string;
};

const BurgerIcon: React.FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="30"
        height="19"
        viewBox="0 0 30 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.494141" width="30" height="2" fill={color} />
        <rect y="8.49414" width="30" height="2" fill={color} />
        <rect y="16.4941" width="30" height="2" fill={color} />
      </svg>
    </>
  );
};

export default BurgerIcon;
