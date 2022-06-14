import { Dialog, Transition } from "@headlessui/react";
import {
  XIcon,
  LogoutIcon,
  LocationMarkerIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import { Support } from "components/icons";
import { Avatar, Button, Col, Popup, Row, Text, View } from "components";
import React, { Fragment, FC, useState } from "react";
import { SideBarProps } from "components/types";
import { useRouter } from "next/dist/client/router";
import { CogIcon } from "@heroicons/react/solid";
import { CameraIcon, FacebookLightIcon, PictureIcon } from "components/icons";
export const Sidebar: FC<SideBarProps> = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <>
      <Popup show={isOpen} onClose={() => setIsOpen(false)}>
        <Col className="self-center space-y-2">
          <Button
            icon={<CameraIcon iconPosition="left-5" />}
            label="Take a picture"
            variant="primary"
            width="w-64"
            alignSelf="self-center"
          />
          <Button
            icon={<PictureIcon iconPosition="left-5" />}
            label="Upload from gallery"
            variant="primary"
            width="w-64"
            alignSelf="self-center"
          />
          <Button
            icon={<FacebookLightIcon iconPosition="left-5" />}
            label="Upload from Facebook"
            variant="primary"
            width="w-64"
            alignSelf="self-center"
          />
        </Col>
      </Popup>
      <Transition show={props.show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50" //@ts-ignore
          onClose={props.onClick}
        >
          <div className="absolute inset-0 overflow-hidden">
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
            <div className="fixed inset-y-0 right-0 flex pl-44 max-w-full sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={props.onClick}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <View className="self-center space-y-4 mt-8">
                      <Avatar
                        height="h-28"
                        width="w-28"
                        edit
                        //@ts-ignore
                        image={props.photoURL}
                        // onLoadingComplete={() => {}}
                        rounded="rounded-full"
                        blured={false}
                        // src={""}
                        onEdit={() => setIsOpen(true)}
                        onClick={() => router.push("/myProfile")}
                      />
                    </View>
                    <View className="self-center mt-6">
                      <Text
                        as="span"
                        alignment="text-center"
                        fontWeight="font-medium"
                        size="text-xl"
                        textTransform="capitalize"
                      >
                        {props.displayName}
                      </Text>
                    </View>
                    <Col className="my-14 self-center grid grid-cols-1 divide-y w-full px-4">
                      <Row
                        className="p-2 space-x-2 text-c3"
                        onClick={() => router.push("/profilSetting")}
                      >
                        <CogIcon className="h-6 w-6" />
                        <Text
                          alignment="text-left"
                          as="h3"
                          fontWeight="font-medium"
                          size="text-xl"
                          float="left"
                        >
                          Setting
                        </Text>
                      </Row>
                      <Row className="p-2 space-x-2 text-c3">
                        <LocationMarkerIcon className="h-6 w-6" />
                        <Text
                          alignment="text-left"
                          as="h3"
                          fontWeight="font-medium"
                          size="text-xl"
                          float="left"
                        >
                          Location
                        </Text>
                      </Row>
                      <Row className="ml-1 p-2 space-x-2 text-c3">
                        <Support />
                        <Text
                          alignment="text-left"
                          as="span"
                          fontWeight="font-medium"
                          size="text-xl"
                          float="left"
                        >
                          Support
                        </Text>
                      </Row>
                      <Row className="p-2 space-x-2 text-c3">
                        <CreditCardIcon className="h-6 w-6" />
                        <Text
                          alignment="text-left"
                          as="span"
                          fontWeight="font-medium"
                          size="text-xl"
                          float="left"
                        >
                          Payment
                        </Text>
                      </Row>
                      <Row
                        className="p-2 space-x-2 text-c3"
                        onClick={() => {
                          props.signOut();
                        }}
                      >
                        <LogoutIcon className="h-6 w-6" />
                        <Text
                          alignment="text-left"
                          as="span"
                          fontWeight="font-medium"
                          size="text-xl"
                          float="left"
                        >
                          Sign Out
                        </Text>
                      </Row>
                    </Col>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
