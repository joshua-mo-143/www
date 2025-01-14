import { FC, SVGAttributes } from "react";

const PaidBenefit: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33333 26.6668C2.77777 26.6668 2.30555 26.4724 1.91666 26.0835C1.52777 25.6946 1.33333 25.2224 1.33333 24.6668V9.3335H3.33333V24.6668H26.6667V26.6668H3.33333ZM7.33333 22.6668C6.77777 22.6668 6.30555 22.4724 5.91666 22.0835C5.52777 21.6946 5.33333 21.2224 5.33333 20.6668V7.3335C5.33333 6.77794 5.52777 6.30572 5.91666 5.91683C6.30555 5.52794 6.77777 5.3335 7.33333 5.3335H28.6667C29.2222 5.3335 29.6944 5.52794 30.0833 5.91683C30.4722 6.30572 30.6667 6.77794 30.6667 7.3335V20.6668C30.6667 21.2224 30.4722 21.6946 30.0833 22.0835C29.6944 22.4724 29.2222 22.6668 28.6667 22.6668H7.33333ZM10.6667 20.6668C10.6667 19.7335 10.3444 18.9446 9.7 18.3002C9.05555 17.6557 8.26666 17.3335 7.33333 17.3335V20.6668H10.6667ZM25.3333 20.6668H28.6667V17.3335C27.7333 17.3335 26.9444 17.6557 26.3 18.3002C25.6556 18.9446 25.3333 19.7335 25.3333 20.6668ZM18 18.0002C19.1111 18.0002 20.0556 17.6113 20.8333 16.8335C21.6111 16.0557 22 15.1113 22 14.0002C22 12.8891 21.6111 11.9446 20.8333 11.1668C20.0556 10.3891 19.1111 10.0002 18 10.0002C16.8889 10.0002 15.9444 10.3891 15.1667 11.1668C14.3889 11.9446 14 12.8891 14 14.0002C14 15.1113 14.3889 16.0557 15.1667 16.8335C15.9444 17.6113 16.8889 18.0002 18 18.0002ZM7.33333 10.6668C8.26666 10.6668 9.05555 10.3446 9.7 9.70016C10.3444 9.05572 10.6667 8.26683 10.6667 7.3335H7.33333V10.6668ZM28.6667 10.6668V7.3335H25.3333C25.3333 8.26683 25.6556 9.05572 26.3 9.70016C26.9444 10.3446 27.7333 10.6668 28.6667 10.6668Z"
        fill="#D8D8D8"
      />
    </svg>
  );
};

export default PaidBenefit;
