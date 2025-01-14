import { FC, SVGAttributes } from "react";

const TwitterLogo: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 4.5585C23.1075 4.95 22.1565 5.2095 21.165 5.3355C22.185 4.7265 22.9635 3.7695 23.3295 2.616C22.3785 3.183 21.3285 3.5835 20.2095 3.807C19.3065 2.8455 18.0195 2.25 16.6155 2.25C13.8915 2.25 11.6985 4.461 11.6985 7.1715C11.6985 7.5615 11.7315 7.9365 11.8125 8.2935C7.722 8.094 4.1025 6.1335 1.671 3.147C1.2465 3.8835 0.9975 4.7265 0.9975 5.634C0.9975 7.338 1.875 8.8485 3.183 9.723C2.3925 9.708 1.617 9.4785 0.96 9.117C0.96 9.132 0.96 9.1515 0.96 9.171C0.96 11.562 2.6655 13.548 4.902 14.0055C4.5015 14.115 4.065 14.1675 3.612 14.1675C3.297 14.1675 2.979 14.1495 2.6805 14.0835C3.318 16.032 5.127 17.4645 7.278 17.511C5.604 18.8205 3.4785 19.6095 1.1775 19.6095C0.774 19.6095 0.387 19.5915 0 19.542C2.1795 20.9475 4.7625 21.75 7.548 21.75C16.602 21.75 21.552 14.25 21.552 7.749C21.552 7.5315 21.5445 7.3215 21.534 7.113C22.5105 6.42 23.331 5.5545 24 4.5585Z"
        fill="#D8D8D8"
      />
    </svg>
  );
};

export default TwitterLogo;
