import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { View, Text } from "components";
import { FC } from "react";
import { AccordionProps } from "components/types";
export const Accordion: FC<AccordionProps> = ({
  onClick,
  show,
  title,
  element,
  children,
  closed,
}) => {
  return (
    <View className="w-full border-t border-separator py-1">
      <View
        className={`w-full max-w-md mx-auto ${
          show ? "bg-white rounded-lg shadow-sm" : ""
        }`}
      >
        <Disclosure>
          <>
            <View onClick={onClick}>
              <Disclosure.Button
                disabled={closed}
                className="accordion flex justify-between items-center w-full px-2 py-2 text-sm font-light text-left text-gray-400 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >
                <Text
                  as="span"
                  className={`${
                    show
                      ? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-c2 to-c4"
                      : ""
                  }`}
                >
                  {title}
                </Text>
                {!closed && (
                  <ChevronUpIcon
                    className={`${show ? "" : "transform rotate-180"}
                     w-5 h-5`}
                  />
                )}
                <View className="absolute right-6 font-medium">{element}</View>
              </Disclosure.Button>
            </View>
            <Transition
              show={show}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {show && (
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 space-y-2">
                  {children}
                </Disclosure.Panel>
              )}
            </Transition>
          </>
        </Disclosure>
      </View>
    </View>
  );
};
