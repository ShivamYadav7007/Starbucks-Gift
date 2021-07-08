import React from "react";

interface Props {
    url: string;
}

const ReusablePrivacy: React.FC<Props> = (props) => {
    return (
        <h3 className="full:mt-6 hover:underline">
          <a target="_blank" href={props.url}>
            {props.children}
          </a>
        </h3>
      );
}

ReusablePrivacy.defaultProps = {}

export default ReusablePrivacy;