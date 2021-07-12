import React from "react";
import NavButtons from "../../Rewards/NavBar/NavButtons";
import ButtonText from "../ButtonText";

interface Props {
  className?: string;
}

const JoinNow: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <NavButtons className="bg-black border border-black hover:bg-gray-800">
        <ButtonText title="Join now" className="text-white" />
      </NavButtons>
    </div>
  );
};

JoinNow.defaultProps = {};

export default React.memo(JoinNow);
