import React from "react";
import { Button, Col, Text } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { ChevronRight } from "components/icons";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step6: NextPage = () => {
  // const { t } = useTranslation("common");
  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step7");
  };

  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg13.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Col className="relative space-y-5">
        <Text
          as="h1"
          color="text-white"
          size="text-xl"
          alignment="text-center"
          fontWeight="font-medium"
        >
          Let your soul shine
        </Text>
        <Col>
          <Text
            as="h3"
            color="text-white"
            fontWeight="font-light"
            size="text-base"
            alignment="text-center"
          >
            Tell us more about you !
          </Text>

          <Text
            as="h3"
            color="text-white"
            fontWeight="font-light"
            size="text-base"
            alignment="text-center"
          >
            This wont take long
          </Text>
        </Col>
        <Button
          label="Let's start"
          icon={<ChevronRight iconPosition="right-5" />}
          variant="primary"
          width="w-64"
          alignSelf="center"
          onClick={handleClick}
        />
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

export default withAuthUser(Step6);
