import React, { useState, Fragment, useMemo } from "react";
import { View, Text, Row, Header, ChatItem, Col } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ArchiveIcon, XIcon } from "@heroicons/react/solid";
import { NextPage } from "next";
import { withAuthUser } from "utils/auth";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { KeyIcon } from "components/icons";
import { MailIcon, SearchIcon } from "@heroicons/react/outline";

const ListOfConversations: NextPage = () => {
  // const { t } = useTranslation("common");
  const [search, setSearch] = useState("");
  const [searchBar, setsearchBar] = useState(false);

  const people = [
    {
      id: 1,
      name: "Lindsay Walton",
      handle: "lesliealexander",
      time: "1h",
      message: "laoreet dolore magna aliquam erat volutpat sed diam nonummy",
      status: "online",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Azra Ochoa",
      time: "Yesterday",
      message:
        "laoreet dolore magna aliquam erat volutpat sed diam nonummy laoreet dolore magna aliquam erat volutpat sed diam nonummy",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Zohaib Reyna",
      status: "online",
      time: "2h",
      message: "laoreet dolore magna aliquam erat volutpat sed diam nonummy",
      imageUrl:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 4,
      name: "Ahsan Bernard",
      status: "online",
      time: "4 days ago",
      message: "laoreet dolore magna aliquam erat volutpat sed diam nonummy",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 5,
      name: "Farih Mohammed",
      time: "2 days ago",
      message: "laoreet dolore magna aliquam erat volutpat sed diam nonummy",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    // More people...
  ];

  const peoples: any = useMemo(() => {
    if (!search) return people;

    return people.filter((p) => {
      return p.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  const [open, setOpen] = useState(false);

  return (
    <View className="relative bg-gradient-to-b from-white via-white to-[#DDE3EF] bg-fixed h-fit min-h-screen">
      <Header variant="flat" setting={true} justify="justify-between p-4" />
      <View className="w-full px-2 py-2 sm:px-0">
        <Tab.Group>
          <Tab.List
            className={
              "flex border border-separate rounded-md overflow-hidden bg-white "
            }
          >
            {/* Tabs */}
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-bold leading-5 shadow-sm",
                  selected
                    ? "bg-white shadow text-c2 border-b border-c2"
                    : "text-gray-400 hover:border-b hover:border-c2 hover:text-c2"
                )
              }
            >
              <Row className="flex justify-center items-center space-x-2">
                <KeyIcon className="mr-2 w-4 h-4" />
                Locks
              </Row>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-bold leading-5 shadow-sm",
                  selected
                    ? "bg-white shadow text-c2 border-b border-c2"
                    : "text-gray-400 hover:border-b hover:border-c2 hover:text-c2"
                )
              }
            >
              <Row className="flex justify-center items-center space-x-2">
                <span className="mr-2 flex-shrink-0 inline-block relative">
                  <MailIcon className=" w-4 h-4" />
                  <span
                    className={
                      "bg-green-400 absolute top-0 right-0 block h-1 w-1 rounded-full ring-2 ring-white animate-ping"
                    }
                    aria-hidden="true"
                  />
                </span>
                Requests
              </Row>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            {/* Locks */}
            <Tab.Panel className={classNames("rounded-xl p-3")}>
              <View className="space-y-2 ">
                {searchBar ? (
                  <Transition
                    appear={true}
                    show={searchBar}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <View className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="text"
                        placeholder="Search by name..."
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="focus:ring-c2 h-8 focus:border-c2 block w-full pr-10 sm:text-sm border-gray-300 rounded-full form-control placeholder:text-sm placeholder:text-gray-300"
                      />
                      <View
                        onClick={() => setsearchBar(!searchBar)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center "
                      >
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </View>
                    </View>
                  </Transition>
                ) : (
                  <Row className="mt-3 relative justify-between items-center">
                    <Row>
                      <Text
                        size="text-xl"
                        fontWeight="font-bold"
                        textClass="text-gray-400"
                      >
                        Chats
                      </Text>
                      <Text textClass="ml-2 bg-gray-400 text-white rounded-full px-2">
                        5/5
                      </Text>
                    </Row>
                    <View
                      onClick={() => setsearchBar(!searchBar)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center "
                    >
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </View>
                  </Row>
                )}

                <Col
                  role="list"
                  className="flex flex-col divide-y divide-gray-200"
                >
                  {peoples.map((post: []) => (
                    <ChatItem {...post} />
                  ))}
                </Col>
              </View>
              <View className="flex justify-center">
                <Row
                  onClick={() => setOpen(true)}
                  className=" items-center mb-20 mt-6 text-gray-500"
                >
                  <ArchiveIcon className="h-4 w-4 mr-1" />
                  <Text
                    alignment="text-center"
                    fontWeight="font-light"
                    size="text-base"
                  >
                    Archived Chats
                  </Text>
                </Row>
              </View>
            </Tab.Panel>

            {/* Requests */}
            <Tab.Panel className={classNames("rounded-xl p-3")}>
              <View className="space-y-2">
                <View className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    placeholder="Search by name..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="focus:ring-c2 h-8 focus:border-c2 block w-full pr-10 sm:text-sm border-gray-300 rounded-full form-control placeholder:text-sm placeholder:text-gray-300"
                  />
                  <View className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <SearchIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </View>
                </View>
                <Col
                  role="list"
                  className="flex flex-col divide-y divide-gray-200"
                >
                  <View className="py-2 leading-5">
                    <Text
                      size="text-sm"
                      textClass="text-gray-400 h"
                      fontWeight="font-light"
                    >
                      Hello, we are interested in your profile, but before
                      matching, we can send only one message to each other.
                      cheers to no multidating !
                    </Text>
                  </View>
                  {peoples.map((post: []) => (
                    <ChatItem {...post} />
                  ))}
                </Col>
              </View>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* Panel Slid */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden z-50"
            onClose={setOpen}
          >
            <View className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <View className="fixed inset-y-0 bottom-300 pt-14 w-full flex sm:pt-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-y-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-y-0"
                  leaveTo="translate-y-full"
                >
                  <div className="w-full">
                    <View className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll rounded-t-2xl">
                      <View className="p-6">
                        <View className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Archived chats
                          </Dialog.Title>
                          <View className="ml-3 h-7 flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </View>
                        </View>
                      </View>
                      <View className="border-b border-gray-200">
                        <View className="pb-6 px-6">
                          <View className="mt-1 relative rounded-md shadow-sm">
                            <input
                              type="text"
                              placeholder="Search by name..."
                              aria-label="Search"
                              aria-describedby="basic-addon1"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="focus:ring-c2 h-8 focus:border-c2 block w-full pr-10 sm:text-sm border-gray-300 rounded-full form-control placeholder:text-sm placeholder:text-gray-300"
                            />
                            <View className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <SearchIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <Col
                        role="list"
                        className="flex-1 divide-y divide-gray-200 overflow-y-auto px-6"
                      >
                        {peoples.map((post: []) => (
                          <ChatItem {...post} />
                        ))}
                      </Col>
                    </View>
                  </div>
                </Transition.Child>
              </View>
            </View>
          </Dialog>
        </Transition.Root>
      </View>
    </View>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: "main",
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default withAuthUser(ListOfConversations);
