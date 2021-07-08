import React from "react";
import ReusableDropdown from "./ReusableDropdown";

interface Props {}

const Dropdown: React.FC<Props> = (props) => {
    return (
      <div className="md:text-lg md:space-y-14 full:flex full:justify-around full:pb-12">
        <ReusableDropdown
          title="About Us"
          list={{
            one: "Our Heritage",
            two: "Our Coffee",
            three: "Stories and news",
            four: "Investor relations",
            five: "Policies",
          }}
        />
        <ReusableDropdown
          title="Carrer"
          list={{
            one: "Our Heritage",
            two: "Our Coffee",
            three: "Stories and news",
            four: "Investor relations",
            five: "Policies",
          }}
        />
        <ReusableDropdown
          title="Social Impact"
          list={{
            one: "Our Heritage",
            two: "Our Coffee",
            three: "Stories and news",
            four: "Investor relations",
            five: "Policies",
          }}
        />
        <ReusableDropdown
          title="For Business Partners"
          list={{
            one: "Our Heritage",
            two: "Our Coffee",
            three: "Stories and news",
            four: "Investor relations",
            five: "Policies",
          }}
        />
        <ReusableDropdown
          title="Orders and pickup"
          list={{
            one: "Our Heritage",
            two: "Our Coffee",
            three: "Stories and news",
            four: "Investor relations",
            five: "Policies",
          }}
        />
      </div>
    );
}

Dropdown.defaultProps = {}

export default Dropdown;