import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Tab from "./Tab";

interface Props {
  children: React.ReactElement[];
}

const TabList: React.FC<Props> = ({ children }) => {
  if (typeof children !== typeof Tab) {
    throw (
      "Passed tag is invalid tag. Pass Tab tag. You have passed " +
      typeof children
    );
  }

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const starWidth = 100 / children.length;
  return (
    <div className="pt-16">
      <div className=" bg-primary-extra-light">
        <h1 className="py-8 text-xl font-medium text-center md:text-2xl">
          Get your favorites for free
        </h1>
        <div className="relative max-w-md mx-auto">
          <div className="flex text-lg font-bold md:text-xl">
            {children.map((child, index) => {
              return (
                <div
                  key={index}
                  className="relative z-0 flex-1 px-2 py-4 text-center cursor-pointer"
                  onClick={() => setCurrentTabIndex(index)}
                >
                  {child.props.title}
                  <span className="my-auto text-xs text-gold">★</span>
                </div>
              );
            })}
          </div>
          <div
            className={`absolute -mt-1 h-1 ease-in-out duration-300 bg-secondary-dark`}
            style={{
              width: starWidth + "%",
              // left: starWidth * currentTabIndex + "%",
              transform: `translateX(${currentTabIndex * 100}%)`,
            }}
          ></div>
        </div>
      </div>
      <div className="shadow-inner md:h-80 h-96 bg-primary-dark">
        {children.map((child, index) => {
          return (
            <Transition.Root
              key={index}
              as={Fragment}
              show={currentTabIndex === index}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="relative">{child.props.children}</div>
            </Transition.Root>
          );
        })}
      </div>
    </div>
  );
};

TabList.defaultProps = {};

export default React.memo(TabList);
