import React from "react";

interface Props {
    linkUrl: string;
    className: string;
}

const JoinButton: React.FC<Props> = (props) => {
    return (
        <a
          href={props.linkUrl}
          className={`px-4 py-2 flex-shrink-0 ${props.className} text-white text-sm font-medium text-center border-2 rounded-full`}
        >
          {props.children}
        </a>
      );
}

JoinButton.defaultProps = {}

export default JoinButton;