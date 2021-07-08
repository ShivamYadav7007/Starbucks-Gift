import React from "react";

interface Props {
    url?: string;
    title?: string;
}

const ReusableOptions: React.FC<Props> = (props) => {
    return (
        <div className="flex md:flex-1 md:mt-4">
          <div>
            <img className="max-w-medium" src={props.url} alt="scan and pay logo" />
          </div>
          <dl className="pl-3 space-y-4">
            <dt className="text-lg font-semibold md:text-xl">{props.title}</dt>
            <dd className="text-sm md:max-w-xs md:text-base">{props.children}</dd>
          </dl>
        </div>
      );
}

ReusableOptions.defaultProps = {}

export default ReusableOptions;