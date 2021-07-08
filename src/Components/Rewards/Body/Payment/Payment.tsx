import React from "react";
import ReusableDescription from "./ReusableDescription";
import ReusableTitle from "./ReusableTitle";
import Img1A from "../../../../Images/1A.png";
import Img1B from "../../../../Images/1B.png";
import Img2A from "../../../../Images/2A.png";
import Img2B from "../../../../Images/2B.png";
import Img3A from "../../../../Images/3A.png";

interface Props {}

const Payment: React.FC<Props> = (props) => {
    return (
      <div className="px-5 mt-24 bg-secondary-light py-7">
        <dl className="text-center pt-7">
          <dt className="pt-5 text-xl font-medium md:text-3xl md:font-bold smMd:text-2xl">
            Cash or cards, you earn Stars
          </dt>
          <dd className="mt-5 text-sm md:text-base md:mx-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum
            animi deleniti mollit
          </dd>
        </dl>
        <div className="my-7 space-y-11 full:flex">
          <ReusableTitle text="1">Pay as you go</ReusableTitle>
          <ReusableDescription
            url1={Img1A}
            url2={Img1B}
            title1="Scan an pay separately"
            title2="Save payment in the app"
            containsTwo={true}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            laudantium, culpa eum inventore maiores fuga.
          </ReusableDescription>
  
          <hr className="mx-3 border-gray-600" />
        </div>
        <div className="my-7 space-y-11 full:flex">
          <ReusableTitle text="2">Add funds in the app</ReusableTitle>
          <ReusableDescription
            url1={Img2A}
            url2={Img2B}
            title1="Payload"
            title2="Register your gift card"
            containsTwo={true}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            laudantium, culpa eum inventore maiores fuga.
          </ReusableDescription>
        </div>
        <hr className="mx-3 border-gray-700" />
        <div className="mt-8 full:flex">
          <ReusableTitle text="Upto 3">
            With Starbucks Rewards Visa Card
          </ReusableTitle>
          <ReusableDescription
            url1={Img3A}
            title1="Register your gift card"
            containsTwo={false}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            laudantium, culpa eum inventore maiores fuga.
          </ReusableDescription>
        </div>
      </div>
    );
}

Payment.defaultProps = {}

export default Payment;