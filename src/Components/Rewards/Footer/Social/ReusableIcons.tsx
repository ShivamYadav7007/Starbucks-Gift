import React from "react";

interface Props {
    title: string;
}

const ReusableIcons: React.FC<Props> = (props) => {
    return (
        <div>
          <a aria-label={props.title} href="#">
            {props.children}
          </a>
        </div>
      );
}

ReusableIcons.defaultProps = {}

export default ReusableIcons;