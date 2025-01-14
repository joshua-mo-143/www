import { FC, SVGAttributes } from "react";

const Compile: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.96048 6.19872C3.96048 5.59759 4.18303 5.07422 4.62813 4.62858C5.07376 4.18349 5.59714 3.96094 6.19826 3.96094L12.6431 3.96094L12.6431 6.19872L6.19826 6.19872L6.19826 25.7681L25.8349 25.7681L25.8349 6.19872L19.3228 6.19872L19.3228 3.96094L25.8349 3.96094C26.4361 3.96094 26.9536 4.18349 27.3874 4.62858C27.8219 5.07422 28.0391 5.59759 28.0391 6.19872L28.0391 25.7681C28.0391 26.3692 27.8219 26.8926 27.3874 27.3382C26.9536 27.7833 26.4361 28.0059 25.8349 28.0059L6.19826 28.0059C5.59714 28.0059 5.07376 27.7833 4.62813 27.3382C4.18303 26.8926 3.96048 26.3692 3.96048 25.7681L3.96048 6.19872ZM9.47077 13.8129L11.1074 12.2099L14.8809 15.9497L14.8809 3.96094L17.085 3.96094L17.085 15.9497L20.8584 12.2099L22.4951 13.8129L15.9829 20.358L9.47077 13.8129Z"
        fill="#C2C2C2"
      />
    </svg>
  );
};

export default Compile;
