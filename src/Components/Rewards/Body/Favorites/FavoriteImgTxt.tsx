import React from "react";
import CoffeeMug from "../../../../Images/coffeeMug.webp";

interface Props {}

const FavoriteImgTxt: React.FC<Props> = (props) => {
  return (
    <div className="py-6 shadow-inner lg:px-40 place-self-center md:flex bg-primary-light">
      <div className="object-cover md:flex md:min-h-imgS md:flex-1">
        <img src={CoffeeMug} alt="coffee mug" />
      </div>
      <dl className="p-5 mt-3 space-y-5 text-center md:place-self-center md:px-16 md:flex-1 md:text-left md:flex md:flex-col">
        <dt className="text-xl font-semibold smMd:text-2xl">
          Customize your drink
        </dt>
        <dd className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nobis
          ullam illo, nihil similique explicabo nam sequi cumque consectetur
          eius!
        </dd>
      </dl>
    </div>
  );
};

FavoriteImgTxt.defaultProps = {};

export default FavoriteImgTxt;
