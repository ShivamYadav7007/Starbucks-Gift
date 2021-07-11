import React from "react";

interface Props {
  title: string;
  className?: string;
}

const ButtonText: React.FC<Props> = ({ title, className }) => {
  return (
    <p className={`font-medium text-sm hover:text-green-700 ${className}`}>
      {title}
    </p>
  );
};

ButtonText.defaultProps = {};

export default React.memo(ButtonText);
