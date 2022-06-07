import React, { useState } from "react";
import { Button, Col, Popup, Tag, Text, Tooltip, View } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import {
  SelecteNotificationsIcon,
  NogostingIcon,
  NoharassmentIcon,
  NomultidatingIcon,
  SafeenvironmentIcon,
  TimesaverIcon,
} from "components/icons";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step5: NextPage = () => {
  // const { t } = useTranslation("common");
  let [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step6");
  };

  function popup(title: string, description: string) {
    // console.log("pop up ===> " + title + "  /  " + description + flag);
    setIsOpen(true);
    setTitle(title);
    setDescription(description);
  }
  const myArray = [
    {
      index: 1,
      role: "No Gosting",
      icon: <NogostingIcon color="white" iconPosition="center" />,
      tooltip:
        "We did it! Boowme was designed to chase ghosts! Breaking up without explanation is not possible.",
    },
    {
      index: 2,
      role: "No Multidating",
      icon: <NomultidatingIcon color="white" iconPosition="center" />,
      tooltip:
        "As in reel life we don’t meet a hundred people every day, with Boowme you will talk only to people who you care about.",
    },
    {
      index: 3,
      role: "No Harassment",
      icon: <NoharassmentIcon color="white" iconPosition="center" />,
      tooltip:
        "Boowme mobilizes a full team to protect you from any types of harassment. ",
    },
    {
      index: 4,
      role: "Selected Notifications",
      icon: <SelecteNotificationsIcon color="white" iconPosition="center" />,
      tooltip: "Receive only qualified notifications",
    },
    {
      index: 5,
      role: "Time Saver",
      icon: <TimesaverIcon color="white" iconPosition="center" />,
      tooltip:
        "Take our “Match tests” to increase your chances to meet your soulmate",
    },
    {
      index: 6,
      role: "Safe Environment",
      icon: <SafeenvironmentIcon color="white" iconPosition="center" />,
      tooltip: "",
    },
  ];
  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg11.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Popup
        show={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        text={description}
      />
      <Col className="relative space-y-5">
        <Text
          as="h1"
          color="text-white"
          size="text-xl"
          alignment="text-center"
          fontWeight="font-medium"
        >
          Hello Malika, nice to have you with us
        </Text>
        <Col className="space-y-5">
          <Text
            as="h1"
            color="text-white"
            size="text-xl"
            fontWeight="font-medium"
            alignment="text-center"
          >
            Discover our concept...
          </Text>
        </Col>
        <View className="self-center grid grid-cols-2 gap-4">
          {myArray.map((item) => (
            <View key={item.index.toString()}>
              <Tag
                icon={item.icon}
                label={item.role}
                variant={"square"}
                selected={false}
              >
                <Tooltip
                  onClick={() => popup(item.role, item.tooltip)}
                  tooltip={false}
                  title={item.role}
                  description={item.tooltip}
                />
              </Tag>
            </View>
          ))}
        </View>
        <Col className="items-center">
          <Button
            // icon={<ChevronRight iconPosition="right-5" />}
            label="I Agree"
            variant="primary"
            width="w-64"
            alignSelf="center"
            onClick={handleClick}
          />
        </Col>
      </Col>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: "centered",
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default withAuthUser(Step5);
