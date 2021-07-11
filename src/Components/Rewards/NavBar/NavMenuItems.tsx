import React from "react";

interface Props {
  className?: string;
  title: string;
  link: string;
}

const NavMenuItems: React.FC<Props> = ({ className, title, link }) => {
  return (
    <a
      href={link}
      className={`py-3 transition duration-300 ease-in-out cursor-pointer hover:text-green-700 ${className}`}
    >
      {title}
    </a>
  );
};

NavMenuItems.defaultProps = {};

export default React.memo(NavMenuItems);
