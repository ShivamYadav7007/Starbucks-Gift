import React from "react";
import blackCoffee from "../../../../Images/blackCoffee.webp";
import coffeeMug from "../../../../Images/coffeeMug.webp";
import food from "../../../../Images/food.webp";
import packetRice from "../../../../Images/packetRice.webp";
import pinkJuice from "../../../../Images/pinkJuice.webp";
import Tab from "../../../sharedComponents/MovableTab/Tab";
import TabList from "../../../sharedComponents/MovableTab/TabList";
import FavoritesPage from "./FavoritesPage";

interface Props {}

const Favorite: React.FC<Props> = (props) => {
  return (
    <div>
      <TabList>
        <Tab title="25">
          <FavoritesPage source={coffeeMug} title="Customize your drink">
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </FavoritesPage>
        </Tab>
        <Tab title="50">
          <FavoritesPage
            source={blackCoffee}
            title="Brewed hot coffee, bakery item or hot tea"
          >
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </FavoritesPage>
        </Tab>
        <Tab title="150">
          <FavoritesPage
            source={pinkJuice}
            title="Handcrafted drink, hot breakfast or parfait"
          >
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </FavoritesPage>
        </Tab>
        <Tab title="200">
          <FavoritesPage source={food} title="Salad, sandwich or protein box">
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </FavoritesPage>
        </Tab>
        <Tab title="400">
          <FavoritesPage
            source={packetRice}
            title="Select merchandise or at-home coffee"
          >
            Make your drink just right with an extra espresso shot, dairy
            substitute or a dash of your favorite syrup.
          </FavoritesPage>
        </Tab>
      </TabList>
    </div>
  );
};

Favorite.defaultProps = {};

export default React.memo(Favorite);
