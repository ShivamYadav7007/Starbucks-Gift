import React from "react";
import ReusableTitleImage from "./ReusableTitleImage";
import GetStarted1 from "../../../../Images/getting-started-1@2x.webp";
import GetStarted2 from "../../../../Images/getting-started-2@2x.webp";
import GetStarted3 from "../../../../Images/getting-started-3@2x.webp";

interface Props {}

const GetStarted: React.FC<Props> = (props) => {
    return (
      <div>
        <dl className="p-6 text-center">
          <dt className="pt-5 text-xl font-semibold md:text-3xl smMd:text-2xl">
            Getting started is easy
          </dt>
          <dd className="mt-5 text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </dd>
        </dl>
        <div className="space-y-4 md:text-center md:space-y-0 md:flex md:pt-8">
          <ReusableTitleImage
            src={GetStarted1}
            title1="Donwload the starbucks app"
            title2="Create an account"
            containsTitle2={true}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            laudantium, culpa eum inventore maiores fuga.
          </ReusableTitleImage>
  
          <ReusableTitleImage
            src={GetStarted2}
            title1="Order and pay"
            containsTitle2={false}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            laudantium, culpa eum inventore maiores fuga.
          </ReusableTitleImage>
  
          <ReusableTitleImage
            src={GetStarted3}
            title1="Earn Stars and get rewards"
            containsTitle2={false}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            laudantium, culpa eum inventore maiores fuga.
          </ReusableTitleImage>
        </div>
      </div>
    );
}

GetStarted.defaultProps = {}

export default GetStarted;