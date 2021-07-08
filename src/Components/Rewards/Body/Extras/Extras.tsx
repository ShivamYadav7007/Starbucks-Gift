import React from "react";
import ReusableExtras from "./ReusableExtras";
import ImgA from '../../../../Images/1-fun-freebies.webp';
import ImgB from '../../../../Images/2-order-and-pay-ahead.webp';
import ImgC from '../../../../Images/3-get-to-free-faster.webp';

interface Props {}

const Extras: React.FC<Props> = (props) => {
    return (
        <div className="mt-6">
          <dl className="p-6 text-center">
            <dt className="pt-5 text-xl font-semibold md:text-4xl smMd:text-2xl">
              Endless Extras
            </dt>
            <dd className="mt-5 text-sm md:mx-14 md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum
              animi deleniti mollitia sapiente sequi in veritatis eaque aut nisi?
              Sunt obcaecati ipsum eveniet omnis saepe? Dolor a iure sed!
            </dd>
          </dl>
          <div className="space-y-4 md:flex md:pt-8 md:text-center">
            <ReusableExtras
              src={ImgA}
              title="Fun Freebies"
              url="https://google.com"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum ex
              accusamus laborum et molestias?
            </ReusableExtras>
    
            <ReusableExtras
              src={ImgB}
              title="Order and pay"
              url="https://google.com"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum ex
              accusamus laborum et molestias?
            </ReusableExtras>
    
            <ReusableExtras
              src={ImgC}
              title="Earn Stars and get rewards"
              url="https://google.com"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum ex
              accusamus laborum et molestias?
            </ReusableExtras>
          </div>
        </div>
      );
}

Extras.defaultProps = {}

export default Extras;