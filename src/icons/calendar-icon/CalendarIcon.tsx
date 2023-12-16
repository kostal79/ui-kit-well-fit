import React from "react";

type Props = {
  color?: string;
};

const CalendarIcon: React.FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M19.2 1.8H15V0.2C15 0.09 14.91 0 14.8 0H13.4C13.29 0 13.2 0.09 13.2 0.2V1.8H6.8V0.2C6.8 0.09 6.71 0 6.6 0H5.2C5.09 0 5 0.09 5 0.2V1.8H0.8C0.3575 1.8 0 2.1575 0 2.6V19.2C0 19.6425 0.3575 20 0.8 20H19.2C19.6425 20 20 19.6425 20 19.2V2.6C20 2.1575 19.6425 1.8 19.2 1.8ZM18.2 18.2H1.8V8.7H18.2V18.2ZM1.8 7V3.6H5V4.8C5 4.91 5.09 5 5.2 5H6.6C6.71 5 6.8 4.91 6.8 4.8V3.6H13.2V4.8C13.2 4.91 13.29 5 13.4 5H14.8C14.91 5 15 4.91 15 4.8V3.6H18.2V7H1.8Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default CalendarIcon;
