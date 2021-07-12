import React from "react";
import NavButtons from "../../Rewards/NavBar/NavButtons";
import ButtonText from "../ButtonText";

interface Props {}

const SignIn: React.FC<Props> = () => {
  return (
    <div>
      <NavButtons className="bg-white border border-black hover:bg-gray-200">
        <ButtonText title="Sign in" />
      </NavButtons>
    </div>
  );
};

SignIn.defaultProps = {};

export default React.memo(SignIn);
