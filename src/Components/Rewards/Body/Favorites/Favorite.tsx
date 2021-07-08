import React from "react";
import blackCoffee from "../../../../Images/blackCoffee.webp";
import coffeeMug from "../../../../Images/coffeeMug.webp";
import food from "../../../../Images/food.webp";
import packetRice from "../../../../Images/packetRice.webp";
import pinkJuice from "../../../../Images/pinkJuice.webp";
import Tab from "../../../sharedComponents/MovableTab/Tab";
import TabList from "../../../sharedComponents/MovableTab/TabList";

interface Props {}

const Favorite: React.FC<Props> = (props) => {
  return (
    <div>
      <TabList>
        <Tab title="25" source={blackCoffee} />
        <Tab title="50" source={coffeeMug} />
        <Tab title="150" source={packetRice} />
        <Tab title="200" source={pinkJuice} />
        <Tab title="400" source={food} />
      </TabList>
    </div>
  );
};

Favorite.defaultProps = {};

export default React.memo(Favorite);
