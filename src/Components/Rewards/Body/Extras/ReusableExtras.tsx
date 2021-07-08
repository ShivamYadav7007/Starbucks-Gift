import React from "react";

interface Props {
    src: string;
    title: string;
    url: string;
}

const ReusableExtras: React.FC<Props> = (props) => {
    return (
        <div className="flex p-2 md:flex md:flex-col md:mt-5 md:space-x-4">
          <div>
            <img className="max-w-medium md:mx-auto" src={props.src} alt="starbuck 1" />
          </div>
          <dl className="px-3">
            <dt className="mt-4 text-lg font-semibold md:mt-7 md:text-xl">
              {props.title}
            </dt>
            <dd className="my-4 text-sm md:text-base">{props.children}</dd>
            <a href={props.url} className="text-sm text-green-700 underline">
              Learn more
            </a>
          </dl>
        </div>
      );
}

ReusableExtras.defaultProps = {}

export default ReusableExtras;