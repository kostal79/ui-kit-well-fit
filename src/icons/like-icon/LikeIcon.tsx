import React, { FC } from "react";

type Props = {
  color?: string;
};

const LikeIcon: FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 731">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Vector"
                d="M1.63043 6.52173C0.73174 6.52173 0 7.25347 0 8.15215V13.3696C0 14.2682 0.73174 15 1.63043 15H3.58695C3.95413 15 4.29194 14.8761 4.56521 14.67V6.52173H1.63043Z"
                fill={color}
              />
            </g>
          </g>
          <g id="Group_3">
            <g id="Group_4">
              <path
                id="Vector_2"
                d="M15.6535 8.96739C15.6535 8.57544 15.4983 8.21021 15.229 7.94085C15.5335 7.6076 15.6887 7.16084 15.6463 6.69586C15.57 5.86694 14.8233 5.21737 13.9455 5.21737H9.917C10.1166 4.61149 10.4361 3.50086 10.4361 2.60869C10.4361 1.19412 9.23418 0 8.4796 0C7.802 0 7.31807 0.381522 7.29722 0.397174C7.22027 0.459141 7.17527 0.553054 7.17527 0.652164V2.86368L5.29701 6.9326L5.21875 6.97238V13.9624C5.74961 14.2128 6.42134 14.3478 6.84918 14.3478H12.8355C13.5457 14.3478 14.1672 13.8691 14.3133 13.2085C14.3883 12.8687 14.3446 12.5263 14.1953 12.2289C14.6772 11.9863 15.0014 11.49 15.0014 10.9239C15.0014 10.693 14.9485 10.472 14.8481 10.2717C15.3301 10.0291 15.6535 9.53282 15.6535 8.96739Z"
                fill={color}
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default LikeIcon;