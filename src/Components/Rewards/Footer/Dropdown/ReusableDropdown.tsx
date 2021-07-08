import React from "react";

interface Props {
    title: string;
    list: any;
}

const ReusableDropdown: React.FC<Props> = (props) => {
    return (
        <div className="flex justify-between mx-5 mt-8 full:justify-around full:mt-14 full:flex-col">
          <h2 className="full:text-xl">{props.title}</h2>
          <svg
            viewBox="0 0 24 24"
            className="full:hidden valign-middle absoluteCenter"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
            height="32px"
            width="32px"
          >
            <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
            <circle
              className="sb-icon-hover"
              fill="transparent"
              cx="50%"
              cy="50%"
              r="75%"
            ></circle>
          </svg>
          <ul className="hidden space-y-5 text-gray-500 full:block full:text-base full:mt-8">
            <li>
              <a
                className="hover:text-gray-800"
                target="_blank"
                href="https://google.com"
              >
                {props.list.one}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-800"
                target="_blank"
                href="https://google.com"
              >
                {props.list.two}
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                className="hover:text-gray-800"
              >
                {props.list.three}
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                className="hover:text-gray-800"
              >
                {props.list.four}
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                className="hover:text-gray-800"
              >
                {props.list.five}
              </a>
            </li>
          </ul>
        </div>
      );
}

ReusableDropdown.defaultProps = {}

export default ReusableDropdown;