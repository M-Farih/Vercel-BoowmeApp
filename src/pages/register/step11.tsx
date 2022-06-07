import React, { useState } from "react";
import { Button, Col, Header, Tag, Text, View } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Image from "next/image";
import {
  ArrowNarrowRight,
  ReadingIcon,
  TravelIcon,
  CookingIcon,
  SportIcon,
  SewingIcon,
  MoviesIcon,
  HangOutIcon,
  MusicIcon,
  SleepingIcon,
  PetsIcon,
  HuntingIcon,
  ShoppingIcon,
  YogaIcon,
  SingingIcon,
  WritingIcon,
  FoodIcon,
  CarIcon,
  PhotographyIcon,
  VideogameIcon,
  CraftIcon,
  DancingIcon,
  RoadTripIcon,
} from "components/icons";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step11: NextPage = () => {
  // const { t } = useTranslation("common");
  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step12");
  };
  const [itemsSelecetdCount, setCount] = useState(0);
  const [intersestsArray, setIntersestSelector] = useState([
    {
      index: 1,
      isSelected: false,
      interset: "Reading",
      icon: <ReadingIcon color="white" iconPosition="center" />,
    },
    {
      index: 2,
      isSelected: false,
      interset: "Sewing",
      icon: <SewingIcon color="white" iconPosition="center" />,
    },
    {
      index: 3,
      isSelected: false,
      interset: "Singing",
      icon: <SingingIcon color="white" iconPosition="center" />,
    },
    {
      index: 4,
      isSelected: false,
      interset: "Hanging out",
      icon: <HangOutIcon color="white" iconPosition="center" />,
    },
    {
      index: 5,
      isSelected: false,
      interset: "Sleeping",
      icon: <SleepingIcon color="white" iconPosition="center" />,
    },
    {
      index: 6,
      isSelected: false,
      interset: "Writing",
      icon: <WritingIcon color="white" iconPosition="center" />,
    },
    {
      index: 7,
      isSelected: false,
      interset: "Food",
      icon: <FoodIcon color="white" iconPosition="center" />,
    },
    {
      index: 8,
      isSelected: false,
      interset: "Movies",
      icon: <MoviesIcon color="white" iconPosition="center" />,
    },
    {
      index: 9,
      isSelected: false,
      interset: "Traveling",
      icon: <TravelIcon color="white" iconPosition="center" />,
    },
    {
      index: 10,
      isSelected: false,
      interset: "Cooking",
      icon: <CookingIcon color="white" iconPosition="center" />,
    },
    {
      index: 11,
      isSelected: false,
      interset: "Pets",
      icon: <PetsIcon color="white" iconPosition="center" />,
    },
    {
      index: 12,
      isSelected: false,
      interset: "Sport",
      icon: <SportIcon color="white" iconPosition="center" />,
    },
    {
      index: 13,
      isSelected: false,
      interset: "Art & Crafts",
      icon: <CraftIcon color="white" iconPosition="center" />,
    },
    {
      index: 14,
      isSelected: false,
      interset: "Dancing",
      icon: <DancingIcon color="white" iconPosition="center" />,
    },
    {
      index: 15,
      isSelected: false,
      interset: "Shopping",
      icon: <ShoppingIcon color="white" iconPosition="center" />,
    },
    {
      index: 16,
      isSelected: false,
      interset: "Yoga & Méditation",
      icon: <YogaIcon color="white" iconPosition="center" />,
    },
    {
      index: 17,
      isSelected: false,
      interset: "Video Games",
      icon: <VideogameIcon color="white" iconPosition="center" />,
    },
    {
      index: 18,
      isSelected: false,
      interset: "Photography",
      icon: <PhotographyIcon color="white" iconPosition="center" />,
    },
    {
      index: 19,
      isSelected: false,
      interset: "Cars",
      icon: <CarIcon color="white" iconPosition="center" />,
    },
    {
      index: 20,
      isSelected: false,
      interset: "Hunting",
      icon: <HuntingIcon color="white" iconPosition="center" />,
    },
    {
      index: 21,
      isSelected: false,
      interset: "Music",
      icon: <MusicIcon color="white" iconPosition="center" />,
    },
    {
      index: 22,
      isSelected: false,
      interset: "Road-trip",
      icon: <RoadTripIcon color="white" iconPosition="center" />,
    },
  ]);

  function select(i: number) {
    if (itemsSelecetdCount < 5) {
      intersestsArray[i - 1].isSelected = !intersestsArray[i - 1].isSelected;
      setIntersestSelector([...intersestsArray]);
      if (intersestsArray[i - 1].isSelected === true) {
        setCount(itemsSelecetdCount + 1);
      }

      if (intersestsArray[i - 1].isSelected === false) {
        setCount(itemsSelecetdCount - 1);
      }
    }
    if (itemsSelecetdCount === 5) {
      if (intersestsArray[i - 1].isSelected === true) {
        setCount(itemsSelecetdCount - 1);
        intersestsArray[i - 1].isSelected = !intersestsArray[i - 1].isSelected;
        setIntersestSelector([...intersestsArray]);
      }
    }
  }
  return (
    <Col>
      {/*Background image*/}
      <Image
        src="/images/bg/bg22.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Header variant="blur" />
      <Col className="relative space-y-5 mt-24">
        <Text
          as="h1"
          color="text-white"
          fontWeight="font-medium"
          size="text-xl"
          alignment="text-center"
        >
          My interests
        </Text>
        <Text
          as="h2"
          color="text-white"
          fontWeight="font-light"
          size="text-lg"
          alignment="text-center"
        >
          {itemsSelecetdCount}/5
        </Text>

        <View className="grid grid-cols-2 gap-4 self-center">
          {intersestsArray.map((item) => {
            return (
              <View onClick={() => select(item.index)} key={item.index}>
                <Tag
                  icon={item.icon}
                  label={item.interset}
                  variant={"rectangular"}
                  selected={item.isSelected === true ? true : false}
                  textSize="text-sm"
                  cursor
                />
              </View>
            );
          })}
        </View>
      </Col>
      {/*Button*/}
      <View className="my-10 self-center">
        <Button
          icon={<ArrowNarrowRight />}
          variant="primary"
          width="w-20"
          onClick={handleClick}
        />
      </View>
    </Col>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: "empty",
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default withAuthUser(Step11);
