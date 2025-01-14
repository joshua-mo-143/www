import { FC, SVGAttributes } from "react";

const MongoDB: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width={77}
      viewBox="0 0 77 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.01664 8.79951C7.9551 4.04795 5.74258 2.78303 5.17818 1.88886C4.94545 1.49495 4.73928 1.08551 4.56108 0.66333C4.53127 1.08544 4.47649 1.35137 4.12288 1.67147C3.41287 2.31378 0.397433 4.80705 0.143662 10.2058C-0.0927756 15.2395 3.79076 18.3434 4.30385 18.6642C4.69837 18.8612 5.17887 18.6685 5.41323 18.4877C7.28531 17.184 9.84313 13.7087 9.01872 8.79951" />
      <path d="M4.72168 15.9839C4.62392 17.2298 4.55389 17.9537 4.30566 18.6657C4.30566 18.6657 4.4686 19.8518 4.58301 21.1083H4.98793C5.08452 20.2235 5.232 19.3452 5.42961 18.4779C4.90542 18.2161 4.74179 17.0772 4.72168 15.9839Z" />
      <path d="M5.42914 18.4785C4.89941 18.2302 4.74617 17.0673 4.7226 15.9838C4.8536 14.1967 4.89179 12.4037 4.837 10.6125C4.80927 9.67258 4.85018 1.90715 4.60889 0.770264C4.77394 1.15532 4.96411 1.52877 5.17814 1.88815C5.74254 2.78303 7.95575 4.04795 9.0166 8.79951C9.84309 13.7002 7.29914 17.1665 5.42914 18.4785Z" />
      <path d="M75.2517 16.7605C75.0249 16.7605 74.8032 16.6925 74.6144 16.5649C74.4256 16.4374 74.2781 16.256 74.1906 16.0437C74.1031 15.8314 74.0794 15.5975 74.1225 15.3716C74.1656 15.1456 74.2736 14.9377 74.4329 14.7738C74.5922 14.61 74.7956 14.4975 75.0177 14.4507C75.2398 14.4039 75.4706 14.4247 75.681 14.5105C75.8914 14.5964 76.0722 14.7435 76.2005 14.9333C76.3288 15.1231 76.3989 15.3471 76.402 15.5772C76.4062 15.7324 76.3793 15.8868 76.3232 16.0312C76.2671 16.1756 76.1827 16.307 76.0753 16.4175C75.9679 16.528 75.8396 16.6154 75.698 16.6743C75.5565 16.7333 75.4047 16.7626 75.2517 16.7605ZM75.2517 14.5318C75.0445 14.5304 74.8415 14.5915 74.6685 14.7072C74.4955 14.823 74.3602 14.9882 74.2798 15.182C74.1994 15.3759 74.1775 15.5895 74.2169 15.796C74.2563 16.0024 74.3552 16.1924 74.5011 16.3418C74.6469 16.4911 74.8332 16.5932 75.0363 16.6351C75.2394 16.677 75.4502 16.6568 75.6419 16.577C75.8337 16.4973 75.9978 16.3615 76.1135 16.1871C76.2292 16.0126 76.2912 15.8072 76.2918 15.5969C76.2945 15.4571 76.2695 15.3182 76.2183 15.1884C76.1671 15.0586 76.0908 14.9405 75.9938 14.8412C75.8968 14.7418 75.7811 14.6633 75.6537 14.6101C75.5262 14.557 75.3895 14.5304 75.2517 14.5318ZM75.5291 16.3314L75.2323 15.682H74.9931V16.3314H74.8191V14.854H75.2483C75.5679 14.854 75.701 14.9947 75.701 15.267C75.701 15.4837 75.6005 15.6187 75.4133 15.6602L75.7198 16.3293L75.5291 16.3314ZM75 15.5294H75.2517C75.4556 15.5294 75.5332 15.459 75.5332 15.2705C75.5332 15.0819 75.4591 15.0179 75.2296 15.0179H75V15.5294Z" />
      <path d="M58.1304 15.6969C58.4417 15.9495 59.0636 16.0536 59.6121 16.0536C60.3228 16.0536 61.0196 15.9199 61.7005 15.2959C62.3939 14.6564 62.8709 13.6778 62.8709 12.1153C62.8709 10.614 62.3079 9.39549 61.1527 8.68212C60.501 8.26634 59.6565 8.10242 58.6934 8.10242C58.416 8.10242 58.1304 8.1172 57.9681 8.19177C57.9016 8.24505 57.8545 8.31932 57.8343 8.40283C57.8052 8.67016 57.8052 10.7061 57.8052 11.9099C57.8052 13.1438 57.8052 14.8646 57.8343 15.0757C57.8496 15.2544 57.9383 15.5682 58.1304 15.6997M55.1739 7.43408C55.4256 7.43408 56.3824 7.4784 56.8275 7.4784C57.6596 7.4784 58.2344 7.43408 59.7896 7.43408C61.0931 7.43408 62.19 7.79077 62.9742 8.47388C63.9227 9.30685 64.4303 10.4655 64.4303 11.8775C64.4303 13.8839 63.5289 15.0433 62.6227 15.6969C61.7213 16.3807 60.5488 16.767 58.8785 16.767C57.9896 16.767 56.4635 16.7374 55.1898 16.7226H55.1635C55.1038 16.6037 55.2723 16.1401 55.3763 16.1282C55.723 16.0888 55.8145 16.0747 55.974 16.0079C56.243 15.896 56.3061 15.7567 56.3359 15.2663C56.3803 14.3447 56.3658 13.2451 56.3658 11.9964C56.3658 11.105 56.3803 9.36594 56.3512 8.81579C56.3061 8.35569 56.1148 8.2368 55.7272 8.14745C55.4523 8.08821 55.1746 8.04359 54.8951 8.01378C54.866 7.92443 55.0934 7.52132 55.1676 7.43408" />
      <path d="M68.1017 8.1881C68.0428 8.20288 67.9686 8.35202 67.9686 8.42589C67.9533 8.96127 67.9388 10.3578 67.9388 11.3237C67.9425 11.3421 67.9516 11.3591 67.9648 11.3723C67.978 11.3856 67.9947 11.3946 68.013 11.3983C68.205 11.413 68.6793 11.4285 69.0794 11.4285C69.6424 11.4285 69.9683 11.3539 70.1458 11.2646C70.62 11.0268 70.8391 10.5062 70.8391 9.94197C70.8391 8.64891 69.9502 8.15855 68.6321 8.15855C68.454 8.15627 68.2758 8.16614 68.0989 8.1881M71.4618 14.1328C71.4618 12.825 70.5132 12.0821 68.7798 12.0821C68.7063 12.0821 68.1558 12.0673 68.0248 12.0968C67.9804 12.1116 67.936 12.1412 67.936 12.1714C67.936 13.1078 67.9208 14.6084 67.9658 15.2029C67.9956 15.4554 68.1738 15.8121 68.395 15.9162C68.6321 16.0499 69.1653 16.0795 69.5356 16.0795C70.5576 16.0795 71.4618 15.5005 71.4618 14.1328ZM65.4253 7.45996C65.5592 7.45996 65.953 7.50428 66.9604 7.50428C67.9083 7.50428 68.6786 7.47473 69.5952 7.47473C70.7358 7.47473 72.3056 7.89122 72.3056 9.61484C72.3056 10.4591 71.7135 11.1457 70.9431 11.4728C70.8987 11.4876 70.8987 11.5171 70.9431 11.5319C72.0393 11.8133 73.0017 12.4979 73.0017 13.8057C73.0017 15.084 72.2168 15.8867 71.0763 16.3918C70.3829 16.7042 69.521 16.8076 68.6495 16.8076C67.9832 16.8076 66.1971 16.7373 65.2042 16.7485C65.1002 16.7042 65.2991 16.2279 65.3879 16.154C65.6154 16.1469 65.8411 16.111 66.0598 16.0471C66.4148 15.9585 66.4571 15.8424 66.5014 15.307C66.5313 14.8462 66.5313 13.1964 66.5313 12.0223C66.5313 10.4168 66.5465 9.33273 66.5313 8.79735C66.5167 8.38157 66.3683 8.2472 66.0868 8.17333C65.8649 8.1283 65.4947 8.08398 65.1986 8.03966C65.1244 7.96509 65.3525 7.51906 65.426 7.45996" />
      <path d="M12.297 16.7606C12.2589 16.6655 12.2434 16.5625 12.2519 16.4602C12.2486 16.3904 12.2642 16.3211 12.297 16.2597C12.4886 16.2316 12.6784 16.1924 12.8656 16.1422C13.1277 16.0761 13.2261 15.9311 13.2414 15.592C13.2844 14.7907 13.2871 13.2873 13.2719 12.2306V12.1997C13.2719 12.0857 13.2719 11.9309 13.1332 11.8219C12.8895 11.6667 12.6249 11.5482 12.3476 11.4701C12.2235 11.4328 12.1549 11.3667 12.1583 11.2893C12.1618 11.2119 12.2401 11.1205 12.4017 11.0881C12.8309 11.0438 13.9555 10.7715 14.3972 10.5647C14.4427 10.6248 14.4638 10.7003 14.4561 10.7758C14.4561 10.8222 14.4492 10.8714 14.4443 10.9221C14.4319 11.0712 14.418 11.2408 14.418 11.4096C14.4207 11.4301 14.429 11.4495 14.442 11.4654C14.4549 11.4814 14.472 11.4934 14.4914 11.5001C14.5107 11.5067 14.5314 11.5078 14.5513 11.5031C14.5712 11.4984 14.5894 11.4882 14.6038 11.4736C15.4449 10.8046 16.1986 10.5661 16.5848 10.5661C17.2206 10.5661 17.7156 10.8742 18.0991 11.5088C18.1079 11.5241 18.1204 11.5369 18.1354 11.5459C18.1505 11.5549 18.1676 11.5598 18.185 11.5602C18.2009 11.56 18.2165 11.556 18.2305 11.5484C18.2445 11.5408 18.2565 11.5299 18.2655 11.5166C19.0386 10.9214 19.8047 10.5661 20.3178 10.5661C21.5298 10.5661 22.2544 11.487 22.2544 13.0284C22.2544 13.4716 22.2502 14.0337 22.2461 14.5579C22.2426 15.018 22.2391 15.4492 22.2391 15.7475C22.2391 15.8179 22.3348 16.0205 22.4784 16.0606C22.6559 16.1485 22.9117 16.1935 23.2355 16.2498H23.248C23.2723 16.3385 23.221 16.6825 23.1717 16.7528C23.0913 16.7528 22.9804 16.7458 22.8417 16.7388C22.59 16.7261 22.2447 16.7085 21.8432 16.7085C21.0375 16.7085 20.6167 16.724 20.2145 16.7507C20.184 16.6487 20.1736 16.3195 20.2104 16.2505C20.3769 16.2241 20.5417 16.1877 20.704 16.1415C20.9606 16.0557 21.0348 15.9375 21.0507 15.592C21.057 15.3465 21.1034 13.1832 21.0209 12.6696C20.9446 12.1371 20.5494 11.5137 19.6848 11.5137C19.3638 11.5137 18.8458 11.6495 18.3521 12.0294C18.3215 12.0646 18.3043 12.1098 18.3036 12.1568V12.1673C18.3619 12.4445 18.3619 12.7681 18.3619 13.2571C18.3619 13.5385 18.3619 13.8318 18.3584 14.1252C18.3549 14.7218 18.3521 15.2846 18.3619 15.7102C18.3619 16.0001 18.5345 16.0697 18.6739 16.1253C18.7494 16.1422 18.8091 16.157 18.8694 16.171C18.9852 16.1999 19.1058 16.2294 19.2854 16.2583C19.312 16.3819 19.3096 16.5101 19.2785 16.6325C19.2711 16.6785 19.2533 16.7221 19.2265 16.7599C18.7786 16.7444 18.3189 16.731 17.6553 16.731C17.4542 16.731 17.1263 16.7395 16.8365 16.7472C16.6014 16.7535 16.3795 16.7599 16.2533 16.7606C16.2192 16.6789 16.204 16.5903 16.209 16.5017C16.2019 16.4182 16.218 16.3344 16.2554 16.2597L16.4336 16.2266C16.5889 16.1985 16.7234 16.1745 16.8496 16.1422C17.0687 16.0718 17.1512 15.9508 17.1672 15.6673C17.2102 15.006 17.2435 13.1002 17.1512 12.6232C16.9945 11.8578 16.5654 11.4694 15.8748 11.4694C15.4705 11.4694 14.9595 11.6671 14.5421 11.9844C14.502 12.0241 14.4703 12.0717 14.4492 12.1244C14.4281 12.1771 14.4179 12.2336 14.4194 12.2904C14.4194 12.5177 14.4194 12.7878 14.4194 13.0777C14.4194 14.0344 14.4131 15.2255 14.436 15.7405C14.4499 15.8995 14.5054 16.088 14.7987 16.157C14.8631 16.176 14.9741 16.1942 15.103 16.2161C15.1772 16.2287 15.2584 16.2421 15.3423 16.2576C15.3689 16.426 15.3554 16.5985 15.3027 16.7606C15.1738 16.7606 15.015 16.7521 14.8333 16.7444C14.556 16.7317 14.2093 16.7163 13.8175 16.7163C13.3544 16.7163 13.032 16.7317 12.7733 16.7444C12.5993 16.7528 12.4488 16.7599 12.2984 16.7606" />
      <path d="M27.1658 11.2021C26.9155 11.1968 26.6694 11.2671 26.4585 11.404C25.9441 11.7213 25.682 12.3551 25.682 13.2866C25.682 15.0299 26.5424 16.2477 27.7745 16.2477C28.1049 16.2583 28.4271 16.1426 28.6773 15.9234C29.0559 15.6103 29.257 14.9701 29.257 14.0738C29.257 12.3565 28.4159 11.2021 27.1644 11.2021M27.4015 16.8942C25.1758 16.8942 24.3833 15.2375 24.3833 13.6876C24.3833 12.6049 24.8194 11.7586 25.6799 11.1711C26.2826 10.7925 26.9743 10.5851 27.683 10.5703C29.3811 10.5703 30.5674 11.8092 30.5674 13.5842C30.5674 14.79 30.0938 15.7426 29.1973 16.3378C28.7667 16.6051 28.0186 16.8942 27.4015 16.8942Z" />
      <path d="M49.825 11.2021C49.5743 11.1963 49.3275 11.2666 49.1164 11.404C48.6019 11.7213 48.3398 12.3551 48.3398 13.2866C48.3398 15.0299 49.2003 16.2477 50.4324 16.2477C50.7637 16.259 51.0871 16.1432 51.3379 15.9234C51.7165 15.6103 51.9169 14.9701 51.9169 14.0738C51.9169 12.3565 51.0765 11.2021 49.825 11.2021ZM50.0622 16.8942C47.8365 16.8942 47.0439 15.2375 47.0439 13.6883C47.0439 12.6042 47.4801 11.7586 48.3412 11.1711C48.9435 10.7923 49.6352 10.5848 50.3437 10.5703C52.0417 10.5703 53.2281 11.8099 53.2281 13.5835C53.2281 14.7907 52.7545 15.7426 51.858 16.337C51.4274 16.6051 50.6793 16.8942 50.0622 16.8942Z" />
      <path d="M42.3315 11.143C41.6458 11.143 41.202 11.6924 41.202 12.543C41.202 13.3935 41.584 14.4045 42.6581 14.4045C42.8425 14.4045 43.1767 14.3215 43.3424 14.1365C43.592 13.9036 43.7584 13.4224 43.7584 12.9144C43.7584 11.805 43.2259 11.143 42.335 11.143M42.2462 17.0131C42.0525 17.011 41.8615 17.0595 41.6915 17.1538C41.1486 17.5056 40.8969 17.8574 40.8969 18.2661C40.8969 18.6488 41.0432 18.9534 41.358 19.2236C41.7394 19.5514 42.2538 19.7111 42.9299 19.7111C44.2604 19.7111 44.8567 18.9851 44.8567 18.2661C44.8567 17.7652 44.6092 17.4296 44.0996 17.2397C43.7071 17.094 43.0512 17.0138 42.2483 17.0138M42.337 20.4611C41.5383 20.4611 40.9628 20.2901 40.4712 19.906C39.9928 19.5317 39.7778 18.976 39.7778 18.5918C39.783 18.3443 39.8761 18.107 40.0399 17.9235C40.1786 17.7631 40.501 17.4627 41.2464 16.9428C41.2579 16.9378 41.2678 16.9295 41.2747 16.9188C41.2816 16.9082 41.2853 16.8957 41.2852 16.883C41.2854 16.8688 41.2809 16.8549 41.2723 16.8436C41.2638 16.8324 41.2517 16.8244 41.2381 16.8211C40.6244 16.5826 40.4393 16.1879 40.3831 15.9769C40.3831 15.9691 40.3831 15.9572 40.3769 15.9438C40.3596 15.8608 40.3429 15.782 40.4546 15.7011C40.5405 15.6392 40.6778 15.5562 40.8248 15.4682C41.0323 15.3517 41.2314 15.2202 41.4204 15.075C41.4306 15.0639 41.4381 15.0506 41.4424 15.0361C41.4467 15.0216 41.4477 15.0063 41.4453 14.9914C41.4429 14.9764 41.4372 14.9622 41.4285 14.9499C41.4199 14.9376 41.4086 14.9274 41.3954 14.9202C40.4871 14.6106 40.0295 13.9261 40.0295 12.88C40.0267 12.5538 40.1015 12.2317 40.2476 11.941C40.3936 11.6504 40.6066 11.3998 40.8685 11.2105C41.2339 10.9172 42.1512 10.5647 42.7454 10.5647H42.7801C43.391 10.5795 43.7356 10.7096 44.2126 10.8883C44.4839 10.9879 44.7715 11.0342 45.0599 11.0248C45.5653 11.0248 45.7865 10.8623 45.9765 10.673C46.0073 10.7583 46.0237 10.8482 46.025 10.939C46.0366 11.1553 45.9787 11.3696 45.86 11.5496C45.7567 11.6953 45.5133 11.8008 45.2908 11.8008C45.2679 11.8008 45.2457 11.8008 45.2214 11.7973C45.1043 11.7889 44.9882 11.7693 44.8747 11.7389L44.8179 11.7593C44.7999 11.786 44.8117 11.8156 44.8262 11.8535C44.8298 11.861 44.8326 11.8687 44.8345 11.8768C44.8751 12.0645 44.9027 12.2549 44.917 12.4466C44.917 13.5406 44.492 14.0169 44.0323 14.37C43.5879 14.7084 43.06 14.9158 42.5069 14.9694C42.4951 14.9694 42.4376 14.9743 42.3294 14.9842C42.2601 14.9905 42.1699 14.999 42.1568 14.999H42.1436C42.0437 15.0271 41.783 15.153 41.783 15.3873C41.783 15.5815 41.9009 15.8228 42.4646 15.8664L42.8293 15.8924C43.5726 15.9452 44.501 16.0106 44.9378 16.1605C45.2276 16.2639 45.4779 16.4573 45.653 16.7133C45.8282 16.9694 45.9193 17.2749 45.9134 17.5865C45.9134 18.5679 45.2256 19.4909 44.0739 20.0552C43.5308 20.3184 42.9361 20.4538 42.3343 20.4512" />
      <path d="M38.9295 16.237C38.6036 16.1927 38.3658 16.1477 38.085 16.014C38.0299 15.9561 37.9936 15.8824 37.981 15.803C37.9511 15.3422 37.9511 14.0048 37.9511 13.1296C37.9511 12.4155 37.8333 11.7929 37.5351 11.3462C37.1794 10.8403 36.6761 10.5435 36.0243 10.5435C35.4467 10.5435 34.6764 10.9445 34.0399 11.4946C34.0246 11.5094 33.9269 11.6037 33.9289 11.4573C33.931 11.311 33.9532 11.0141 33.9671 10.8242C33.9732 10.7737 33.9677 10.7225 33.9508 10.6746C33.934 10.6267 33.9063 10.5835 33.87 10.5484C33.454 10.7594 32.2871 11.0408 31.8551 11.0838C31.5403 11.1457 31.4606 11.4531 31.7968 11.5593H31.8017C32.0709 11.6347 32.3278 11.7494 32.5644 11.8998C32.6975 12.004 32.683 12.1524 32.683 12.2713C32.6975 13.2668 32.6975 14.7976 32.6532 15.6299C32.6386 15.957 32.5491 16.0759 32.312 16.1357L32.3342 16.128C32.1536 16.1739 31.9705 16.2087 31.7858 16.2321C31.7116 16.306 31.7116 16.7372 31.7858 16.8266C31.9341 16.8266 32.6871 16.7823 33.3112 16.7823C34.1695 16.7823 34.614 16.8266 34.8366 16.8266C34.926 16.7225 34.9551 16.3214 34.8962 16.2321C34.6911 16.2227 34.4874 16.1928 34.2881 16.1428C34.0517 16.0837 33.992 15.9641 33.9775 15.6974C33.9484 14.9981 33.9484 13.5123 33.9484 12.5013C33.9484 12.2199 34.0219 12.0856 34.1106 12.0089C34.4067 11.7415 34.8962 11.5636 35.3254 11.5636C35.7414 11.5636 36.0187 11.6972 36.2268 11.8752C36.469 12.0897 36.6209 12.3904 36.6511 12.7152C36.71 13.278 36.6948 14.41 36.6948 15.3886C36.6948 15.924 36.6511 16.0583 36.4583 16.1174C36.3696 16.1618 36.1325 16.2068 35.8509 16.2363C35.7622 16.3257 35.7913 16.7414 35.8509 16.8308C36.2358 16.8308 36.683 16.7865 37.332 16.7865C38.1467 16.7865 38.6653 16.8308 38.8726 16.8308C38.9614 16.7267 38.9912 16.3383 38.9323 16.2363" />
    </svg>
  );
};

export default MongoDB;
