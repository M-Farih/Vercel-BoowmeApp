import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { PopupProps } from "components/types";
import { Text, View } from "components";
import { XCircle } from "components/icons";
import cn from "classnames";

const calculClass = ({ className, variant }: PopupProps) => {
  return cn({
    "inline-block space-y-3 w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl border border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-md":
      variant === "transparent",
    "inline-block space-y-3 w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl border border-white bg-white":
      variant === "white",
    className,
  });
};

export const Popup: FC<PopupProps> = ({
  variant = "transparent",
  withCloseBtn,
  ...props
}) => {
  return (
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto" //@ts-ignore
          onClose={props.onClose}
        >
          <View className="min-h-screen px-4 text-center ">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            {/* This element is to trick the browser into centering the modal contents. */}
            <Text
              as="span"
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </Text>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={calculClass({ ...props, variant })}>
                <View
                  className={
                    `${!withCloseBtn && `hidden `} ` + `cursor-pointer`
                  }
                  onClick={props.onClose}
                >
                  <XCircle color="black" />
                </View>
                <Dialog.Title
                  as="h3"
                  className={`${
                    variant === "white" ? "text-black" : "text-white"
                  } text-lg font-medium text-center leading-6`}
                >
                  {props.title}
                </Dialog.Title>
                <Dialog.Description
                  as="h2"
                  className={`${
                    variant === "white" ? "text-black" : "text-white"
                  } text-base font-medium text-center leading-6`}
                >
                  {props.text}
                </Dialog.Description>
                {props.children}
              </div>
            </Transition.Child>
          </View>
        </Dialog>
      </Transition>
    </>
  );
};
