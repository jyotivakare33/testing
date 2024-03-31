import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();

  return (
    <div
      id="docs-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700 bg-[#E9E9E9]"
    >
      <div className="px-6">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Head Start Reviewing Tracking System
        </a>
      </div>
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open=""
      >
        <ul className="space-y-1.5">
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 bg-black text-white text-sm rounded-lg hover:bg-black hover:text-white dark:bg-gray-900 font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => navigate("/Reviews")}
            >
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </a>
          </li>
          <li className="hs-accordion" id="users-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-blue-600  hs-accordion-active:hover:bg-black w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#000000] hover:text-white dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => navigate("/Reviews")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.14307 7.14288H17.8574V17.1429C17.8574 17.5217 17.7068 17.8852 17.4389 18.153C17.1711 18.4209 16.8076 18.5715 16.4288 18.5715H3.57164C3.19275 18.5715 2.82939 18.4209 2.56148 18.153C2.29358 17.8852 2.14307 17.5217 2.14307 17.1429V7.14288Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.2858 5.7143V2.85716C19.2858 2.06819 18.6462 1.42859 17.8572 1.42859H2.14293C1.35395 1.42859 0.714355 2.06819 0.714355 2.85716V5.7143C0.714355 6.50327 1.35395 7.14287 2.14293 7.14287H17.8572C18.6462 7.14287 19.2858 6.50327 19.2858 5.7143Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.85742 11.4286H12.1431"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Reviews
            </button>
          </li>
          <li className="hs-accordion" id="account-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-black w-full text-start flex items-center gap-x-3.5 font-semibold py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-black hover:text-white dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75656 6.42858C7.33451 6.42858 8.6137 5.14939 8.6137 3.57144C8.6137 1.99348 7.33451 0.714294 5.75656 0.714294C4.1786 0.714294 2.89941 1.99348 2.89941 3.57144C2.89941 5.14939 4.1786 6.42858 5.75656 6.42858Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.16547 15.035L7.63414 19.2857H3.89529L3.18101 13.5714H0.756348V11.4286C0.756348 10.1025 1.28313 8.83073 2.22081 7.89306C3.15849 6.95537 4.43027 6.42859 5.75635 6.42859C7.08242 6.42859 8.3542 6.95537 9.29188 7.89306C10.0131 8.61427 10.4912 9.53315 10.6736 10.5224"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4214 14.2436C10.4214 13.5474 10.9857 12.983 11.6819 12.983H17.9845C18.6806 12.983 19.2449 13.5474 19.2449 14.2436V18.0251C19.2449 18.7213 18.6806 19.2856 17.9845 19.2856H11.6819C10.9857 19.2856 10.4214 18.7213 10.4214 18.0251V14.2436Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.1084 12.9832V12.0533C13.1084 11.2643 13.748 10.6247 14.537 10.6247H15.1264C15.9153 10.6247 16.555 11.2643 16.555 12.0533V12.9832"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Reviewers
            </button>
          </li>
          <li className="hs-accordion" id="projects-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-black hover:bg-black hover:text-white w-full font-semibold text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_239_67)">
                  <path
                    d="M1.15712 5.39999L3.11427 4.77142C3.24584 4.73039 3.38697 4.73176 3.51772 4.77535C3.64847 4.81893 3.76219 4.90252 3.84284 5.01428L5.18569 7.14285L12.5571 3.47142C13.1384 3.13056 13.787 2.92072 14.4577 2.85655C15.1286 2.79238 15.8051 2.87543 16.4406 3.09991C17.0758 3.32438 17.6546 3.68485 18.136 4.15616C18.6176 4.62746 18.9904 5.19822 19.2286 5.82856C19.3268 6.14683 19.2947 6.49106 19.1394 6.78569C18.984 7.08033 18.7181 7.30126 18.4 7.39999L13.5571 8.97142L13.0714 9.12856L12.1571 12.2571C12.1293 12.3652 12.0739 12.4642 11.9962 12.5444C11.9186 12.6245 11.8214 12.6831 11.7143 12.7143L9.51427 13.4286C9.39881 13.4784 9.27187 13.4956 9.14731 13.4782C9.02275 13.4608 8.90538 13.4095 8.80804 13.3298C8.71071 13.2502 8.63714 13.1453 8.59541 13.0267C8.55367 12.908 8.54537 12.7802 8.57141 12.6571L9.02855 10.4286L8.71427 10.5286L3.98569 12.0571C3.83289 12.1138 3.67035 12.1395 3.50752 12.1328C3.34469 12.126 3.18484 12.0869 3.03727 12.0178C2.88969 11.9486 2.75734 11.8508 2.64794 11.7301C2.53852 11.6093 2.45424 11.4679 2.39998 11.3143L0.742835 6.17142C0.698018 6.01422 0.716209 5.84572 0.793553 5.70171C0.870898 5.55769 1.00131 5.44946 1.15712 5.39999Z"
                    stroke="black"
                    strokeWidth="{2}"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.2858 19.2857H0.714355"
                    stroke="black"
                    strokeWidth="{2}"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_239_67">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              Travel
            </button>
          </li>
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-black hover:text-white dark:hover:bg-gray-900 font-semibold dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Reports
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-black hover:text-white dark:hover:bg-gray-900 font-semibold dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                width="20"
                className="size-4"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_239_92)">
                  <path
                    d="M12.1429 19.2857H0.714355V5.71429L6.42864 0.714294L12.1429 5.71429V19.2857Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.1431 19.2857H19.2859V9.28571H12.1431"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.42871 19.2857V16.4286"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.28564 12.1429H8.57136"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.28564 7.85718H8.57136"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_239_92">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Grantees
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-black hover:text-white dark:hover:bg-gray-900 font-semibold dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_284_4)">
                  <path
                    d="M10.0001 11.4286C11.9726 11.4286 13.5716 9.82958 13.5716 7.85713C13.5716 5.88469 11.9726 4.28571 10.0001 4.28571C8.0277 4.28571 6.42871 5.88469 6.42871 7.85713C6.42871 9.82958 8.0277 11.4286 10.0001 11.4286Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.8999 17C4.53739 15.9536 5.43335 15.0887 6.50163 14.4887C7.56992 13.8886 8.7746 13.5734 9.9999 13.5734C11.2252 13.5734 12.4299 13.8886 13.4982 14.4887C14.5665 15.0887 15.4624 15.9536 16.0999 17"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0001 19.2857C15.1285 19.2857 19.2858 15.1284 19.2858 10C19.2858 4.87165 15.1285 0.714294 10.0001 0.714294C4.87171 0.714294 0.714355 4.87165 0.714355 10C0.714355 15.1284 4.87171 19.2857 10.0001 19.2857Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_284_4">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              Profile
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-black hover:text-white dark:hover:bg-gray-900 font-semibold dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_284_12)">
                  <path
                    d="M7.47166 3.21423L8.08595 1.62852C8.18955 1.36004 8.37182 1.12911 8.60888 0.965965C8.84595 0.802825 9.12675 0.715083 9.41452 0.714233H10.5859C10.8737 0.715083 11.1545 0.802825 11.3916 0.965965C11.6287 1.12911 11.8109 1.36004 11.9145 1.62852L12.5288 3.21423L14.6145 4.41423L16.3002 4.15709C16.5809 4.11899 16.8666 4.16519 17.121 4.28983C17.3753 4.41448 17.5869 4.61192 17.7287 4.85709L18.3002 5.85709C18.4466 6.10616 18.5142 6.39378 18.4937 6.68198C18.4733 6.97018 18.366 7.24542 18.1859 7.47138L17.143 8.79995V11.1999L18.2145 12.5285C18.3946 12.7545 18.5019 13.0297 18.5223 13.3179C18.5427 13.6061 18.4752 13.8937 18.3287 14.1428L17.7573 15.1428C17.6155 15.3879 17.4039 15.5854 17.1496 15.7101C16.8952 15.8347 16.6095 15.8809 16.3287 15.8428L14.643 15.5857L12.5574 16.7857L11.9431 18.3714C11.8395 18.6398 11.6572 18.8708 11.4202 19.0339C11.1831 19.1971 10.9023 19.2848 10.6145 19.2857H9.41452C9.12675 19.2848 8.84595 19.1971 8.60888 19.0339C8.37182 18.8708 8.18955 18.6398 8.08595 18.3714L7.47166 16.7857L5.38595 15.5857L3.70023 15.8428C3.41955 15.8809 3.13386 15.8347 2.87949 15.7101C2.62513 15.5854 2.41356 15.3879 2.27166 15.1428L1.70023 14.1428C1.5538 13.8937 1.48635 13.6061 1.50675 13.3179C1.52715 13.0297 1.63446 12.7545 1.81452 12.5285L2.85738 11.1999V8.79995L1.78595 7.47138C1.60589 7.24542 1.49858 6.97018 1.47818 6.68198C1.45778 6.39378 1.52523 6.10616 1.67166 5.85709L2.24309 4.85709C2.38499 4.61192 2.59656 4.41448 2.85092 4.28983C3.10529 4.16519 3.39098 4.11899 3.67166 4.15709L5.35738 4.41423L7.47166 3.21423ZM7.14309 9.99995C7.14309 10.565 7.31066 11.1174 7.6246 11.5873C7.93856 12.0571 8.38478 12.4233 8.90685 12.6396C9.42893 12.8558 10.0034 12.9124 10.5576 12.8022C11.1119 12.6919 11.621 12.4198 12.0205 12.0202C12.4201 11.6207 12.6922 11.1116 12.8025 10.5573C12.9127 10.0031 12.8561 9.42865 12.6399 8.90656C12.4236 8.38449 12.0574 7.93826 11.5876 7.62432C11.1177 7.31038 10.5653 7.1428 10.0002 7.1428C9.24248 7.1428 8.51575 7.44382 7.97993 7.97965C7.44412 8.51546 7.14309 9.24219 7.14309 9.99995Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_284_12">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
