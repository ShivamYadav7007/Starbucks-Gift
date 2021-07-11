import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import NavMenuItems from "../../Rewards/NavBar/NavMenuItems";

interface Props {
  open: boolean;
  close: () => void;
  beforeLeave: () => void;
  afterLeave: () => void;
}

const SideMenu: React.FC<Props> = ({
  open,
  close,
  beforeLeave,
  afterLeave,
}) => {
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" open={open} onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            beforeLeave={beforeLeave}
            afterLeave={afterLeave}
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opactiy-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-10 bg-black top-18"></Dialog.Overlay>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed bottom-0 right-0 z-20 pt-5 text-xl bg-white shadow-inner w-sidebar top-18">
              <div className="flex flex-col p-5 space-y-5">
                <div className="flex justify-between cursor-pointer">
                  <NavMenuItems
                    title="Menu"
                    link="https://devslane.com"
                    className="text-xl hover:text-black"
                  />
                  <svg
                    className="my-auto"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    width="24px"
                  >
                    <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z"></path>
                  </svg>
                </div>
                <NavMenuItems
                  title="Rewards"
                  link="https://devslane.com"
                  className="text-xl hover:text-black"
                />
                <NavMenuItems
                  title="Gift Cards"
                  link="https://devslane.com"
                  className="text-xl hover:text-black"
                />
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

SideMenu.defaultProps = {};

export default React.memo(SideMenu);
