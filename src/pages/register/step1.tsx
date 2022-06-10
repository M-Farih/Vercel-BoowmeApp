import React, { useState } from "react";
import { Box, Button, Col, Popup, Row, Text, View } from "components";
import { LockIcon } from "components/icons";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { PhoneInputNumber } from "components/PhoneInput";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step1: NextPage = () => {
  // const { t } = useTranslation("common");
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step2");
  };
  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg6.webp"
        className="bg_steps"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Popup
        show={isOpen}
        onClose={() => setIsOpen(false)}
        title={"Checking the number"}
        text={"Are you sure this is your phone number? "}
      >
        <View className="text-center space-y-5">
          <Text
            as="span"
            color="text-c4"
            fontWeight="font-bold"
            size="text-lg"
            alignment="text-center"
          >
            +212 631 721 917
          </Text>
        </View>
        <Row className="space-x-5 justify-center">
          <Button
            label="Cancel"
            variant="secondary"
            width="w-28"
            onClick={() => setIsOpen(false)}
          />
          <Button
            label="Continue"
            variant="primary"
            width="w-28"
            onClick={handleClick}
          />
        </Row>
      </Popup>
      <Col className="relative">
        <Box variant="blur">
          <Col className="space-y-5">
            <Text
              as="h2"
              color="text-white"
              fontWeight="font-medium"
              size="text-lg"
              textTransform="capitalize"
              alignment="text-left"
            >
              Phone Number
            </Text>
            <PhoneInputNumber
              autoFormat
              country="ma"
              disableSearchIcon
              // onlyCountries={["ma", "dz", "tn"]}
            />
            <Row className="items-center space-x-2 text-white">
              <LockIcon />
              <Text
                as="span"
                fontWeight="font-light"
                size="text-sm"
                alignment="text-left"
              >
                we won't show it on your profile
              </Text>
            </Row>
            <Button
              // icon={<ArrowRight iconPosition="center" />}
              label="Continue"
              variant="primary"
              width="w-40"
              alignSelf="self-center"
              onClick={() => setIsOpen(true)}
            />
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

export default withAuthUser(Step1);
