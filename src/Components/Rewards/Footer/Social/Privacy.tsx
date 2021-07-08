import React from "react";
import ReusablePrivacy from "./ReusablePrivacy";
import VerticalLine from "./VerticalLine";

interface Props {}

const Privacy: React.FC<Props> = (props) => {
    return (
      <div>
        <div className="p-5 mt-5 space-y-6 text-sm font-normal place-items-center full:max-w-4xl md:text-base full:flex full:justify-around">
          <ReusablePrivacy url="https://devslane.com">
            Privacy Policy
          </ReusablePrivacy>
          <VerticalLine />
          <ReusablePrivacy url="https://devslane.com">Career</ReusablePrivacy>
          <VerticalLine />
          <ReusablePrivacy url="https://devslane.com">
            Social Impact
          </ReusablePrivacy>
          <VerticalLine />
          <ReusablePrivacy url="https://devslane.com">
            For Business Partners
          </ReusablePrivacy>
          <VerticalLine />
          <ReusablePrivacy url="https://devslane.com">
            Order and Pickup
          </ReusablePrivacy>
        </div>
        <div className="p-5 text-sm font-light mb-11 full:ml-3">
          <p className="text-gray-500">
            &copy; 2021 StarBucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    );
}

Privacy.defaultProps = {}

export default Privacy;