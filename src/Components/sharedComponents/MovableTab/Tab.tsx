import React, { ImgHTMLAttributes } from "react";

interface Props {
  title: string;
  source: string;
  children?: React.ReactNode;
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

Tab.defaultProps = {};

export default React.memo(Tab);
