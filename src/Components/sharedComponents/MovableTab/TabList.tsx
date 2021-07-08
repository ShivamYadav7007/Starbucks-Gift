import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Tab from "./Tab";

interface Props {
  children: React.ReactElement[];
}

const TabList: React.FC<Props> = ({ children }) => {
  if (typeof children !== typeof Tab) {
    throw (
      "Passed tag is invalid tag pass Tab tag. You have passed " +
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
                  className="flex-1 px-2 py-4 text-center cursor-pointer"
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
              left: starWidth * currentTabIndex + "%",
            }}
          ></div>
        </div>
      </div>
      <div className="relative shadow-inner h-72 bg-primary-dark">
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
              <div>
                <img
                  src={child.props.source}
                  className="absolute inset-0 mx-auto text-center md:flex max-h-64 "
                  alt="coffee material"
                />
                <dl className="p-5 mt-3 space-y-5 text-center md:place-self-center md:px-16 md:flex-1 md:text-left md:flex md:flex-col">
                  <dt className="text-xl font-semibold smMd:text-2xl">
                    Customize your drink
                  </dt>
                  <dd className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod nobis ullam illo, nihil similique explicabo nam sequi
                    cumque consectetur eius!
                  </dd>
                </dl>
              </div>
            </Transition.Root>
          );
        })}
      </div>
    </div>
  );
};

TabList.defaultProps = {};

export default React.memo(TabList);
