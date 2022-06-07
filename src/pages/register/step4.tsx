import React from "react";
import { Box, Button, Col, Input, Text, View } from "components";
// import { ArrowRight } from "components/icons";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step4: NextPage = () => {
  // const { t } = useTranslation("common");

  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step5");
  };
  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg10.webp"
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
            fontWeight="font-medium"
            size="text-lg"
            alignment="text-center"
          >
            Enter your username
          </Text>
          <Col className="space-y-3">
            <Input
              name="email"
              placeholder="Username"
              full
              inputClass="rounded-full text-white border-white text-center"
            />
            <Text
              as="span"
              color="text-white"
              fontWeight="font-light"
              size="text-sm"
              alignment="text-left"
            >
              * This information will be visible on your profile
            </Text>
          </Col>
          <View className="self-center mt-20">
            <Button
              // icon={<ArrowRight iconPosition="center" />}
              label="Continue"
              variant="primary"
              width="w-40"
              onClick={handleClick}
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

export default withAuthUser(Step4);
