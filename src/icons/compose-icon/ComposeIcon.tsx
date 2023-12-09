import React from "react";

type Props = {
  color?: string;
};

const ComposeIcon: React.FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="7.82349" width="2" height="10" rx="1" fill={color} />
        <rect x="5" y="0.823486" width="2" height="17" rx="1" fill={color} />
        <rect x="10" y="7.82349" width="2" height="10" rx="1" fill={color} />
        <rect x="15" y="4.82349" width="2" height="13" rx="1" fill={color} />
      </svg>
    </>
  );
};

export default ComposeIcon;
