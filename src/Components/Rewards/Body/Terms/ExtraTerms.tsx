import React from "react";
import TermsTitle from "./TermsTitle";

interface Props {}

const ExtraTerms: React.FC<Props> = (props) => {
    return (
      <div className="p-5 text-sm bg-gray-100">
        <p className="mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="md:flex">
          <div className="my-8 space-y-4">
            <TermsTitle>Earning Stars</TermsTitle>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus a
              commodi natus, vero earum dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsum perspiciatis suscipit beatae doloremque iste, exercitationem
              at pariatur, culpa recusandae fugit natus possimus illum in. Facere
              nulla repellat molestias quos?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
              inventore excepturi consequatur ratione qui repellendus modi impedit
              maiores, eos eius expedita autem debitis officiis! Est accusamus
              dolores perspiciatis? Error harum sint quasi aliquam. Nihil
              molestiae tempore repudiandae soluta distinctio?
            </p>
          </div>
          <div className="my-8 space-y-4 md:pl-4">
            <TermsTitle>Terms Of Use</TermsTitle>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus a
              commodi natus, vero earum dolorem?
            </p>
            <p className="text-green-700 underline">
              {" "}
              <a href="#"> sit amet consectetur </a>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
              inventore excepturi consequatur ratione qui repellendus modi impedit
              maiores, eos eius expedita autem debitis officiis! Est accusamus
              dolores perspiciatis? Error harum sint quasi aliquam. Nihil
              molestiae tempore repudiandae soluta distinctio?
            </p>
          </div>
        </div>
        <div className="md:flex">
          <div className="my-8 space-y-4">
            <TermsTitle>Benefits</TermsTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
              inventore excepturi consequatur ratione qui repellendus modi impedit
              maiores, eos eius expedita autem debitis officiis! Est accusamus
              dolores perspiciatis? Error harum sint quasi aliquam. Nihil
              molestiae tempore repudiandae soluta distinctio?
            </p>
          </div>
          <div className="my-8 space-y-4 md:pl-4">
            <TermsTitle>Redeeming Rewards</TermsTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
              inventore excepturi consequatur ratione qui repellendus modi impedit
              maiores, eos eius expedita autem debitis officiis! Est accusamus
              dolores perspiciatis? Error harum sint quasi aliquam. Nihil
              molestiae tempore repudiandae soluta distinctio?
            </p>
          </div>
        </div>
      </div>
    );
}

ExtraTerms.defaultProps = {}

export default ExtraTerms;