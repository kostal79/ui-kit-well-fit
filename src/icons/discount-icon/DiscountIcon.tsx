import React, { FC } from "react";

type Props = {
  color?: string;
};

const DiscountIcon: FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="sale">
          <path
            id="%"
            d="M8.204 10.706C7.748 10.706 7.322 10.634 6.926 10.49C6.542 10.334 6.206 10.13 5.918 9.878C5.63 9.626 5.402 9.326 5.234 8.978C5.078 8.63 5 8.258 5 7.862C5 7.466 5.078 7.094 5.234 6.746C5.402 6.398 5.63 6.098 5.918 5.846C6.206 5.594 6.542 5.396 6.926 5.252C7.322 5.096 7.748 5.018 8.204 5.018C8.648 5.018 9.062 5.096 9.446 5.252C9.842 5.396 10.184 5.594 10.472 5.846C10.76 6.098 10.988 6.398 11.156 6.746C11.324 7.094 11.408 7.466 11.408 7.862C11.408 8.258 11.324 8.63 11.156 8.978C10.988 9.326 10.76 9.626 10.472 9.878C10.184 10.13 9.842 10.334 9.446 10.49C9.062 10.634 8.648 10.706 8.204 10.706ZM8.204 9.086C8.444 9.086 8.648 8.966 8.816 8.726C8.984 8.486 9.068 8.198 9.068 7.862C9.068 7.526 8.984 7.238 8.816 6.998C8.648 6.758 8.444 6.638 8.204 6.638C7.964 6.638 7.76 6.758 7.592 6.998C7.424 7.238 7.34 7.526 7.34 7.862C7.34 8.198 7.424 8.486 7.592 8.726C7.76 8.966 7.964 9.086 8.204 9.086ZM15.926 18.158C15.47 18.158 15.044 18.086 14.648 17.942C14.264 17.786 13.928 17.582 13.64 17.33C13.352 17.078 13.124 16.778 12.956 16.43C12.8 16.082 12.722 15.71 12.722 15.314C12.722 14.918 12.8 14.546 12.956 14.198C13.124 13.85 13.352 13.55 13.64 13.298C13.928 13.046 14.264 12.848 14.648 12.704C15.044 12.548 15.47 12.47 15.926 12.47C16.37 12.47 16.784 12.548 17.168 12.704C17.564 12.848 17.906 13.046 18.194 13.298C18.482 13.55 18.71 13.85 18.878 14.198C19.046 14.546 19.13 14.918 19.13 15.314C19.13 15.71 19.046 16.082 18.878 16.43C18.71 16.778 18.482 17.078 18.194 17.33C17.906 17.582 17.564 17.786 17.168 17.942C16.784 18.086 16.37 18.158 15.926 18.158ZM15.926 16.538C16.166 16.538 16.37 16.418 16.538 16.178C16.706 15.938 16.79 15.65 16.79 15.314C16.79 14.978 16.706 14.69 16.538 14.45C16.37 14.21 16.166 14.09 15.926 14.09C15.686 14.09 15.482 14.21 15.314 14.45C15.146 14.69 15.062 14.978 15.062 15.314C15.062 15.65 15.146 15.938 15.314 16.178C15.482 16.418 15.686 16.538 15.926 16.538ZM6.512 16.808L11.606 11.066L16.124 5L17.618 6.35L12.74 11.912L8.006 18.158L6.512 16.808Z"
            fill={color}
          />
        </g>
      </svg>
    </>
  );
};

export default DiscountIcon;