import { FC, SVGAttributes } from "react";

const Paperclip: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_5531)">
        <path
          d="M15.0003 22.6663H9.33366C7.48921 22.6663 5.91699 22.0163 4.61699 20.7163C3.31699 19.4163 2.66699 17.8441 2.66699 15.9997C2.66699 14.1552 3.31699 12.583 4.61699 11.283C5.91699 9.98301 7.48921 9.33301 9.33366 9.33301H15.0003V11.333H9.33366C8.04477 11.333 6.94477 11.7886 6.03366 12.6997C5.12255 13.6108 4.66699 14.7108 4.66699 15.9997C4.66699 17.2886 5.12255 18.3886 6.03366 19.2997C6.94477 20.2108 8.04477 20.6663 9.33366 20.6663H15.0003V22.6663ZM10.8337 16.9997V14.9997H21.167V16.9997H10.8337ZM17.0003 22.6663V20.6663H22.667C23.9559 20.6663 25.0559 20.2108 25.967 19.2997C26.8781 18.3886 27.3337 17.2886 27.3337 15.9997C27.3337 14.7108 26.8781 13.6108 25.967 12.6997C25.0559 11.7886 23.9559 11.333 22.667 11.333H17.0003V9.33301H22.667C24.5114 9.33301 26.0837 9.98301 27.3837 11.283C28.6837 12.583 29.3337 14.1552 29.3337 15.9997C29.3337 17.8441 28.6837 19.4163 27.3837 20.7163C26.0837 22.0163 24.5114 22.6663 22.667 22.6663H17.0003Z"
          fill="#D8D8D8"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_5531">
          <rect width={32} height={32} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Paperclip;
