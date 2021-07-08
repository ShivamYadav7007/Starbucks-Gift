import React from "react";
import GetStarted from "./GetStarted/GetStarted";
import Favorites from "./Favorites/Favorites";
import Extras from "./Extras/Extras";
import Payment from "./Payment/Payment";
import StarCodes from "./StarCodes/StarCodes";
import ExtraTerms from "./Terms/ExtraTerms";
import Favorite from "./Favorites/Favorite";

interface Props {}

const Body: React.FC<Props> = (props) => {
  return (
    <div>
      <GetStarted />
      <Favorite />
      <Extras />
      <Payment />
      <StarCodes />
      <ExtraTerms />
      <hr className="border border-gray-600" />
    </div>
  );
};

Body.defaultProps = {};

export default Body;
