import React from "react";
import { Button, Col, Text } from "components";
import { CameraIcon, FacebookLightIcon, PictureIcon } from "components/icons";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step9: NextPage = () => {
  // const { t } = useTranslation("common");

  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step10");
  };

  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg16.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Col className="relative space-y-5">
        <Text
          as="h2"
          color="text-white"
          fontWeight="font-medium"
          size="text-lg"
          alignment="text-center"
        >
          How do I look like ?
        </Text>
        {/* TODO: Change icon svg */}
        <Button
          icon={<CameraIcon iconPosition="left-5" />}
          label="Take a picture"
          variant="primary"
          width="w-64"
          alignSelf="self-center"
          onClick={handleClick}
        />
        <Button
          icon={<PictureIcon iconPosition="left-5" />}
          label="Upload from gallery"
          variant="primary"
          width="w-64"
          alignSelf="self-center"
          onClick={handleClick}
        />
        <Button
          icon={<FacebookLightIcon iconPosition="left-5" />}
          label="Upload from Facebook"
          variant="primary"
          width="w-64"
          alignSelf="self-center"
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

export default withAuthUser(Step9);
