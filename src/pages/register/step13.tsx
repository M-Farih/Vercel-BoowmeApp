import React, { useState } from "react";
import { Button, Col, Header, Tag, Text, View } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step13: NextPage = () => {
  // const { t } = useTranslation("common");
  const [itemsSelecetdCount, setCount] = useState(0);
  const router = useRouter();
  const handleClick = () => {
    router.replace("/");
  };

  const [qualitiesArray, setQualitySelector] = useState([
    { index: 1, quality: "Careful", isSelected: false },
    { index: 2, quality: "Spontaneous", isSelected: false },
    { index: 3, quality: "Romantic", isSelected: false },
    { index: 4, quality: "Generous", isSelected: false },
    { index: 5, quality: "Honest", isSelected: false },
    { index: 6, quality: "Communicating", isSelected: false },
    { index: 7, quality: "Lots of humour", isSelected: false },
    { index: 8, quality: "Easy going", isSelected: false },
    { index: 9, quality: "Love kids", isSelected: false },
    { index: 10, quality: "Optimist", isSelected: false },
    { index: 11, quality: "Responsable", isSelected: false },
    { index: 12, quality: "Independent", isSelected: false },
    { index: 13, quality: "Reconnaître l'erreur", isSelected: false },
    { index: 14, quality: "Grateful", isSelected: false },
    { index: 15, quality: "Shy", isSelected: false },
    { index: 16, quality: "Conciliatory", isSelected: false },
    { index: 17, quality: "Loyalty", isSelected: false },
    { index: 18, quality: "Cheerful", isSelected: false },
    { index: 19, quality: "Open minded", isSelected: false },
    { index: 20, quality: "Emotionally mature", isSelected: false },
    { index: 21, quality: "Respectful", isSelected: false },
    { index: 22, quality: "Sensitive", isSelected: false },
    { index: 23, quality: "Courteous", isSelected: false },
    { index: 24, quality: "Resourceful", isSelected: false },
  ]);

  function select(i: number) {
    if (itemsSelecetdCount < 5) {
      qualitiesArray[i - 1].isSelected = !qualitiesArray[i - 1].isSelected;
      setQualitySelector([...qualitiesArray]);
      if (qualitiesArray[i - 1].isSelected === true) {
        setCount(itemsSelecetdCount + 1);
      }

      if (qualitiesArray[i - 1].isSelected === false) {
        setCount(itemsSelecetdCount - 1);
      }
    }
    if (itemsSelecetdCount === 5) {
      if (qualitiesArray[i - 1].isSelected === true) {
        setCount(itemsSelecetdCount - 1);
        qualitiesArray[i - 1].isSelected = !qualitiesArray[i - 1].isSelected;
        setQualitySelector([...qualitiesArray]);
      }
    }
  }
  return (
    <Col className="">
      {/*Background image*/}
      <Image
        src="/images/bg/bg27.webp"
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
          What are qualities you want to find in your partner ?
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
          {qualitiesArray.map((item) => (
            <View onClick={() => select(item.index)} key={item.index}>
              <Tag
                key={item.index}
                label={item.quality}
                variant={"rectangular"}
                selected={item.isSelected === true ? true : false}
                textSize="text-base"
                cursor
              />
            </View>
          ))}
        </View>
      </Col>
      {/*Button*/}
      <View className="my-10 self-center">
        <Button
          label="Continue"
          variant="primary"
          width="w-40"
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

export default withAuthUser(Step13);
