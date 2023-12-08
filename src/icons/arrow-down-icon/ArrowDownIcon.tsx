import React, { FC } from "react";

type Props = {
    color?: string;
}

const ArrowDownIcon: FC<Props> = ({color="white"}:Props) => {
  return (
    <>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector 1"
          d="M8.66406 1.06567L4.61001 4.95757L0.555954 1.06567"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ArrowDownIcon;
