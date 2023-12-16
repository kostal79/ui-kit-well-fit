import React from "react";

type Props = {
  color: string;
};

const NonVisibleIcon: React.FC<Props> = ({ color = "white" }: Props) => {
  return (
    <>
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M5.87264 14.129C4.02764 12.819 2.56764 11.115 1.74264 10.039C1.51195 9.74198 1.38672 9.37659 1.38672 9.0005C1.38672 8.62441 1.51195 8.25902 1.74264 7.962C3.23564 6.013 6.81765 2 10.9996 2C12.8756 2 14.6296 2.807 16.1296 3.874"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M13.131 6.887C12.8533 6.60467 12.5224 6.38011 12.1575 6.22628C11.7925 6.07246 11.4008 5.99241 11.0048 5.99075C10.6087 5.98909 10.2163 6.06586 9.85011 6.21662C9.48391 6.36738 9.15118 6.58916 8.87112 6.86915C8.59105 7.14915 8.3692 7.48182 8.21835 7.84799C8.0675 8.21416 7.99065 8.60657 7.99221 9.00258C7.99378 9.3986 8.07374 9.79039 8.22747 10.1554C8.38121 10.5203 8.60569 10.8512 8.88796 11.129"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M3 17L19 1"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_4"
            d="M9 15.704C9.6492 15.8972 10.3227 15.9969 11 16C15.182 16 18.764 11.987 20.257 10.038C20.4876 9.74071 20.6127 9.37509 20.6125 8.99883C20.6124 8.62256 20.4869 8.25707 20.256 7.96C19.7313 7.27549 19.1684 6.62112 18.57 6"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default NonVisibleIcon;
