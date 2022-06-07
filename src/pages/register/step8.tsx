import React, { useState } from "react";
import { Button, Col, Row, Text, Tag, View, Box } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { FemaleIcon, MaleIcon } from "components/icons";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step8: NextPage = () => {
  // const { t } = useTranslation("common");
  const [gender, setGender] = useState("");
  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step9");
  };

  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg15.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Col className="relative space-y-5">
        <Box variant={"blur"}>
          <Text
            as="h2"
            color="text-white"
            size="text-lg"
            alignment="text-center"
            fontWeight="font-medium"
          >
            You are
          </Text>
          <Row className="space-x-5 self-center">
            <View onClick={() => setGender("woman")}>
              <Tag
                icon={<FemaleIcon color="white" iconPosition="center" />}
                label="Woman"
                variant={"rectangular"}
                selected={gender === "woman" ? true : false}
              />
            </View>

            <View onClick={() => setGender("man")}>
              <Tag
                icon={<MaleIcon color="white" iconPosition="center" />}
                label="Man"
                variant={"rectangular"}
                selected={gender === "man" ? true : false}
              />
            </View>
          </Row>

          <Text
            as="span"
            color="text-white"
            size="text-sm"
            alignment="text-left"
            fontWeight="font-light"
          >
            * You won't be able to change this info later
          </Text>
          <View className="self-center">
            <Button
              // icon={<ArrowNarrowRight iconPosition="center" />}
              variant="primary"
              width="w-40"
              onClick={handleClick}
              label="Continue"
            />
          </View>
        </Box>
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

export default withAuthUser(Step8);
