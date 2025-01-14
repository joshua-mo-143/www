import { FC, SVGAttributes } from "react";

const Database: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
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
        d="M16 14.6664C12.5109 14.6664 9.63867 14.1275 7.3832 13.0496C5.12773 11.9723 4 10.7336 4 9.3336C4 7.9112 5.12773 6.66667 7.3832 5.6C9.63867 4.53333 12.5109 4 16 4C19.4891 4 22.3613 4.53333 24.6168 5.6C26.8723 6.66667 28 7.9112 28 9.3336C28 10.7336 26.8723 11.9723 24.6168 13.0496C22.3613 14.1275 19.4891 14.6664 16 14.6664ZM16 21.3336C12.7333 21.3336 9.9168 20.8336 7.5504 19.8336C5.18347 18.8336 4 17.6336 4 16.2336V12.9C4 13.7891 4.42773 14.5613 5.2832 15.2168C6.13867 15.8723 7.1888 16.4056 8.4336 16.8168C9.67787 17.228 10.9944 17.528 12.3832 17.7168C13.772 17.9056 14.9776 18 16 18C17.0443 18 18.2555 17.9056 19.6336 17.7168C21.0112 17.528 22.3221 17.228 23.5664 16.8168C24.8112 16.4056 25.8613 15.8779 26.7168 15.2336C27.5723 14.5888 28 13.8109 28 12.9V16.2336C28 17.6336 26.8165 18.8336 24.4496 19.8336C22.0832 20.8336 19.2667 21.3336 16 21.3336ZM16 28C12.7333 28 9.9168 27.5 7.5504 26.5C5.18347 25.5 4 24.3 4 22.9V19.5664C4 20.4555 4.42773 21.2277 5.2832 21.8832C6.13867 22.5387 7.1888 23.072 8.4336 23.4832C9.67787 23.8944 10.9944 24.1944 12.3832 24.3832C13.772 24.572 14.9776 24.6664 16 24.6664C17.0443 24.6664 18.2555 24.572 19.6336 24.3832C21.0112 24.1944 22.3221 23.8944 23.5664 23.4832C24.8112 23.072 25.8613 22.5443 26.7168 21.9C27.5723 21.2557 28 20.4779 28 19.5664V22.9C28 24.3 26.8165 25.5 24.4496 26.5C22.0832 27.5 19.2667 28 16 28Z"
        fill="#D8D8D8"
      />
    </svg>
  );
};

export default Database;
