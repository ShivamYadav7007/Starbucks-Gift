import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface Props {
  open: boolean;
  close: () => void;
}

const SideMenu: React.FC<Props> = ({ open, close }) => {
  return (
    <div>
      <Transition.Root appear show={open} as={Fragment}>
        <Dialog open={open} onClose={close}>
          <Transition.Child
            appear
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opactiy-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-x-0 bottom-0 z-10 bg-black top-18"></Dialog.Overlay>
          </Transition.Child>
          <Transition.Child
            appear
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="absolute bottom-0 right-0 z-20 flex flex-col bg-red-300 w-60 top-18">
              <button>Menu</button>
              <button>Reward</button>
              <button>Gift Cards</button>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

SideMenu.defaultProps = {};

export default React.memo(SideMenu);
