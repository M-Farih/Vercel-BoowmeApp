import { FC, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import type { DropdownProps } from "components/types";
import { View, Text } from "components";

export const Dropdown: FC<DropdownProps> = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <View className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <View className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left rounded-full shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm btn-primary  border border-c2 bg-c6 text-c2 bg-gradient-to-l hover:text-white hover:from-c2 hover:to-c4">
            <Text as="span" className="block truncate">
              {selected.name}
            </Text>
            <Text
              as="span"
              className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Text>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm">
              {options.map((person: any, personIdx: number) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? " bg-gradient-to-l text-white from-c2 to-c4"
                        : "text-white"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <Text
                        as="span"
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {person.name}
                      </Text>
                      {selected ? (
                        <Text
                          as="span"
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </Text>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </View>
      </Listbox>
    </View>
  );
};
