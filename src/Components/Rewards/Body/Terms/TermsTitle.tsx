import React from "react";

interface Props {}

const TermsTitle: React.FC<Props> = (props) => {
    return (
        <h2 className="font-semibold tracking-wider text-gray-600 uppercase md:text-base">
          {props.children}
        </h2>
      );
}

TermsTitle.defaultProps = {}

export default TermsTitle;