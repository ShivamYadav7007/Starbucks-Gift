import React from "react";
import JoinButton from "../../sharedComponents/JoinButton";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="sticky flex justify-between p-2 font-medium text-white bg-green-900 full:top-18 -top-0 place-items-center">
      <h3 className="max-w-sm my-auto text-sm tracking-widest md:font-bold md:text-base md:ml-16 md:align-middle">
        STARBUCKS<sup>&reg;</sup> <span>REWARDS</span>
      </h3>
      <JoinButton linkUrl="https://google.com" className="lg:hidden md:hidden">
        Join in the app
      </JoinButton>
    </div>
  );
}

Header.defaultProps = {}

export default Header;