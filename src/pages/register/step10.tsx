import React from "react";
import { Box, Button, Col, Text } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { LocationMarker } from "components/icons";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step10: NextPage = () => {
  // const { t } = useTranslation("common");
  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step11");
  };
  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg19.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Col className="relative">
        <Box variant={"blur"}>
          <Text
            as="h1"
            color="text-white"
            fontWeight="font-medium"
            size="text-xl"
            alignment="text-center"
          >
            Where are you based ?
          </Text>
          {/* <Text
            as="h2"
            color="text-white"
            fontWeight="font-light"
            size="text-lg"
            alignment="text-center"
          >
            Boowme uses your location to match you with people nearby
          </Text> */}
          <Col className="space-y-3">
            <Button
              icon={<LocationMarker iconPosition="left-5" />}
              label="Activate geolocation"
              variant="primary"
              width="w-64"
              alignSelf="self-center"
              onClick={handleClick}
            />
            <Text
              as="span"
              color="text-white"
              fontWeight="font-light"
              size="text-sm"
              alignment="text-center"
            >
              * Later, you can change your location, hide from or select
              different countries
            </Text>
          </Col>
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

export default withAuthUser(Step10);
