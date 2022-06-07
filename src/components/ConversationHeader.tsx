import {
  View,
  Text,
  AvatarStatus,
  Row,
  Col,
  SwitchInput,
  Popup,
  Button,
} from "components";
import {
  AttachementIcon,
  ChevronLeft,
  Leave,
  MenuChat,
} from "components/icons";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { useAuthUser } from "next-firebase-auth";

export const ConversationHeader = () => {
  const router = useRouter();
  const [openNotMyMatchPopup, setOpenNotMyMatchPopup] = useState(false);
  const [openGhostingPopup, setOpenGhostingPopup] = useState(false);
  const [openHarassementPopup, setOpenHarassementPopup] = useState(false);
  const [openFakePopup, setOpenFakePopup] = useState(false);

  const plans = [
    {
      text: "Hi Sahar, l'm really glad to know you but don't think we are a match. I wish you all the best :)",
    },
    {
      text: "Hi Sahar, I'm sorry to say this but I don't think we were made for each other. Thank you and good luck:)",
    },
  ];
  const [selected, setSelected] = useState(plans[0]);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  const AuthUser = useAuthUser();

  return (
    <>
      {/* not my match popup */}
      <Popup
        variant="white"
        show={openNotMyMatchPopup}
        title={
          "Choose one of the two messages so that we can send it to this person"
        }
        onClose={() => setOpenNotMyMatchPopup(false)}
        children={
          <Col className="space-y-1">
            <div className="w-full py-5">
              <div className="mx-auto w-full max-w-md">
                <RadioGroup value={selected} onChange={setSelected}>
                  <RadioGroup.Label className="sr-only">
                    Server size
                  </RadioGroup.Label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <RadioGroup.Option
                        key={plan.text}
                        value={plan}
                        className={({ active, checked }) =>
                          `${active ? "bg-[#9fb3d8] text-white" : ""}
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked ? "text-sky-100" : "text-gray-500"
                                    }`}
                                  >
                                    <span>{`"${plan.text}"`}</span>
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button
              label="Send"
              variant="blue"
              onClick={() => setOpenNotMyMatchPopup(false)}
            />
          </Col>
        }
      />

      {/* ghosting */}
      <Popup
        variant="white"
        show={openGhostingPopup}
        title={
          "Choose one of the two messages so that we can send it to this person"
        }
        onClose={() => setOpenGhostingPopup(false)}
        children={
          <Col className="space-y-1 items-end">
            <View
              onClick={() => setOpenGhostingPopup(false)}
              className="w-10 h-10 rounded-full bg-[#9fb3d8] text-white flex justify-center items-center"
            >
              <AttachementIcon color="#ffffff" />
            </View>
          </Col>
        }
      />

      {/* harassement and nudity */}
      <Popup
        variant="white"
        show={openHarassementPopup}
        title={"We will have access to the 3 last messages"}
        onClose={() => setOpenHarassementPopup(false)}
        children={
          <Col className="space-y-1 items-end">
            <View
              onClick={() => setOpenHarassementPopup(false)}
              className="w-10 h-10 rounded-full bg-[#9fb3d8] text-white flex justify-center items-center"
            >
              <AttachementIcon color="#ffffff" />
            </View>
          </Col>
        }
      />

      {/* Fake account */}
      <Popup
        variant="white"
        show={openFakePopup}
        withCloseBtn={true}
        title={
          "Au bout de 5 signaux, demander l'envoyé à la personne de nous servir de sa pièce d'identité."
        }
        onClose={() => setOpenFakePopup(false)}
      />

      <View className="fixed z-50 w-full flex justify-between items-center h-16 bg-white rounded-b-3xl shadow-md p-4">
        <Row className="space-x-2 items-center">
          <View onClick={() => router.back()}>
            <ChevronLeft color="#ACAEBB" />
          </View>
          <AvatarStatus
            status={true}
            //@ts-ignore
            src={AuthUser.photoURL}
            width={"w-10"}
            height={"h-10"}
          />
          <Col className="">
            <Text
              as="h4"
              fontWeight="font-bold"
              size="text-md"
              textClass="text-gray-400"
            >
              Farih Mohammed
            </Text>
            <Text
              as="span"
              fontWeight="font-light"
              size="text-sm"
              textClass="text-gray-300"
            >
              En ligne
            </Text>
          </Col>
        </Row>
        <Row className="items-center">
          <Menu
            as="div"
            className="ml-2 flex-shrink-0 relative inline-block text-left"
          >
            <Menu.Button className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center">
              <span className="sr-only">Open options menu</span>
              <span className="flex items-center justify-center h-full w-full rounded-full">
                <Leave
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute z-10 top-10 -right-5 w-80 rounded-md shadow-lg bg-white ring-1 ring-gray-600 ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <View className="p-4">
                    <Text
                      as="h3"
                      size="text-base"
                      fontWeight="font-medium"
                      color="text-c2"
                    >
                      Are you sure?
                    </Text>
                    <Text
                      as="h3"
                      size="text-base"
                      fontWeight="font-medium"
                      color="text-c2"
                    >
                      Tell us why ...
                    </Text>
                    <Col className="mt-3">
                      <Text
                        as="h3"
                        size="text-sm"
                        fontWeight="font-medium"
                        textClass="text-gray-400"
                      >
                        You can answer only once before matching.
                      </Text>
                      <Text
                        as="h3"
                        size="text-sm"
                        fontWeight="font-medium"
                        textClass="text-gray-400"
                      >
                        Cheers to no multidating!
                      </Text>
                    </Col>
                  </View>

                  <Menu.Item>
                    {({ active }) => (
                      <View
                        onClick={() => setOpenNotMyMatchPopup(true)}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-400",
                          "block px-4 py-2 text-sm  border-b-[1px] border-gray-200"
                        )}
                      >
                        Not my match
                      </View>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <View
                        onClick={() => setOpenGhostingPopup(true)}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-400",
                          "block px-4 py-2 text-sm border-b-[1px] border-gray-200"
                        )}
                      >
                        Ghosting
                      </View>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <View
                        onClick={() => setOpenHarassementPopup(true)}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-400",
                          "block px-4 py-2 text-sm border-b-[1px] border-gray-200"
                        )}
                      >
                        Harassment and nudity
                      </View>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <View
                        onClick={() => setOpenFakePopup(true)}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-400",
                          "block px-4 py-2 text-sm border-b-[1px] border-gray-200"
                        )}
                      >
                        Fake Account
                      </View>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-400",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Others
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu
            as="div"
            className="ml-2 flex-shrink-0 relative inline-block text-left"
          >
            <Menu.Button className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center">
              <span className="sr-only">Open options menu</span>
              <span className="flex items-center justify-center h-full w-full rounded-full">
                <MenuChat
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute z-10 top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-600 ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-400",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Match test
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-400",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Wallpaper
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Row
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-400",
                          "block justify-between px-4 py-1 text-sm items-center"
                        )}
                      >
                        <p>Reveal your picture</p> <SwitchInput />
                      </Row>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </Row>
      </View>
    </>
  );
};
