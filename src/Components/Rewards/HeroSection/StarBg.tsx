import React from "react";
import JoinButton from "../../sharedComponents/JoinButton";

interface Props {}

const StarBg: React.FC<Props> = (props) => {
    return (
        <div className="bg-right-bottom bg-no-repeat bg-contain pb-eighty md:pb-0 min-h-small md:h-screen md:pt-14 bg-primary-light md:flex bg-star-pattern-small md:bg-cover md:bg-half md:bg-star-pattern-big">
          <div className="px-3 py-5 text-center md:text-left place-self-center">
            <div className="font-bold">
              <h1 className="pt-5 text-2xl smMd:text-3xl md:leading-8 md:text-3xl">
                FREE COFFEE
              </h1>
              <h1 className="text-2xl leading-9 smMd:text-3xl md:text-3xl">
                IS A TAP AWAY
              </h1>
            </div>
            <h3 className="mt-4 text-sm md:text-xl md:text-gray-800">
              Join now to start earning rewards
            </h3>
            <div className="mx-auto mt-8 max-w-max md:ml-0">
              <JoinButton
                className="font-semibold bg-green-700 lg:hidden md:hidden"
                linkUrl="https://google.com"
              >
                Join in the app
              </JoinButton>
              <JoinButton
                className="hidden font-semibold bg-green-700 lg:block md:block"
                linkUrl="https://google.com"
              >
                Join now
              </JoinButton>
            </div>
    
            <p className="mt-3 underline md:hidden">
              <a href="#">or join online</a>
            </p>
            <p className="hidden mt-3 text-xl md:block">
              or{" "}
              <a className="underline" href="#">
                join in the app{" "}
              </a>
              for the best experience
            </p>
          </div>
        </div>
      );
}

StarBg.defaultProps = {}

export default StarBg;