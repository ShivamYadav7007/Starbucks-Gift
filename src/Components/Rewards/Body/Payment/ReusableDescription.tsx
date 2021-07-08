import React from "react";
import ReusableOptions from "./ReusableOptions";

interface Props {
    title1: string;
    url1: string;
    title2?: string;
    url2?: string;
    containsTwo: boolean;
}

const ReusableDescription: React.FC<Props> = (props) => {
    return (
      <div className="mt-8 space-y-4 md:flex">
        <ReusableOptions title={props.title1} url={props.url1}>
          {props.children}
        </ReusableOptions>
  
        {props.containsTwo && (
          <ReusableOptions title={props.title2} url={props.url2}>
            {props.children}
          </ReusableOptions>
        )}
      </div>
    );
}

ReusableDescription.defaultProps = {}

export default ReusableDescription;