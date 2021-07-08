import React from "react";

interface Props {}

const StarCodes: React.FC<Props> = (props) => {
    return (
        <div>
          <div className="mb-16 md:mr-80 md:ml-28 full:ml-40 md:mt-14">
            <dl className="p-6 space-y-5">
              <dt className="text-xl font-bold text-gray-800 md:text-3xl">
                Star Codes
              </dt>
              <dd className="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
                blanditiis ab fugiat quaerat tenetur vero.
              </dd>
            </dl>
            <div className="p-3 mx-3 border-2 border-gray-400 rounded-2xl">
              <label>Enter your star code</label>
              {/* After Click this div will be changed into input box  */}
            </div>
            <div className="flex justify-end p-6">
              <button className="px-6 py-1 text-base transition duration-500 ease-in-out border-2 border-gray-400 rounded-full focus:outline-none hover:bg-gray-100">
                Submit
              </button>
            </div>
            <p className="p-5 text-sm leading-6">
              Lorem ipsum dolor, Ipsum autem vitae magni&nbsp;
              <span className="text-green-700 underline">
                <a href="#"> sit amet consectetur </a>
              </span>
              adipisicing elit. Qui facilis culpa{" "}
            </p>
            <dl className="p-5 mt-10 space-y-3">
              <dt className="text-xl font-semibold text-gray-800 md:text-3xl">
                Question?
              </dt>
              <dd className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                qui laborum nihil voluptatem. Facilis, maiores!
              </dd>
              <dd className="text-sm text-green-700 underline">
                <a href="#"> right over here </a>
              </dd>
            </dl>
          </div>
        </div>
      );
}

StarCodes.defaultProps = {}

export default StarCodes;