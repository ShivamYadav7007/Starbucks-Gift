import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Social from "./Social/Social";

interface Props {}

const Footer: React.FC<Props> = (props) => {
    return (
      <div>
        <Dropdown />
        <hr className="mx-5 mt-10 border-gray-600" />
        <Social />
      </div>
    );
}

Footer.defaultProps = {}

export default Footer;