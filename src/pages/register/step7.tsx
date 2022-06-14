import React from "react";
import { Button, Col, Text, View, Datepicker, Box } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
// import { ArrowNarrowRight } from "components/icons";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step7: NextPage = () => {
  // const { t } = useTranslation("common");
  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step8");
  };
  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg14.webp"
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
            When's your birthday?
          </Text>

          {/* Date Picker */}
          <Datepicker />

          <Col className="space-y-2">
            <Text
              alignment="text-left"
              as="span"
              color="text-white"
              fontWeight="font-light"
              size="text-sm"
            >
              * You must be at least 18 years old to use Boowme
            </Text>
            <Text
              alignment="text-left"
              as="span"
              color="text-white"
              fontWeight="font-light"
              size="text-sm"
            >
              * You won't be able to change it later
            </Text>
            <Text
              alignment="text-left"
              as="span"
              color="text-white"
              fontWeight="font-light"
              size="text-sm"
            >
              * Your age will be displayed, but your date of birth will be kept
              secret.
            </Text>
          </Col>
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

export default withAuthUser(Step7);
