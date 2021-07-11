import React from "react";

interface Props {
  link?: string;
  className?: string;
  children: React.ReactNode;
}

const NavButtons: React.FC<Props> = ({ link, className, children }) => {
  return (
    <button
      className={`${className} py-2 w-20 transition duration-500 ease-in-out border-2 rounded-full cursor-pointer focus:outline-none`}
    >
      {children}
    </button>
  );
};

NavButtons.defaultProps = {};

export default React.memo(NavButtons);
