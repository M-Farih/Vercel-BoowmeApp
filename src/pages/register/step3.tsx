import React, { useState } from "react";
import { Button, Col, Popup, Text } from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step3: NextPage = () => {
  // const { t } = useTranslation("common");
  let [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step4");
  };

  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg9.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Popup
        show={isOpen}
        onClose={() => {
          setIsOpen(false);
          handleClick();
        }}
        text={"Love is a serious game, that two can play and both win"}
      />
      <Col className="relative space-y-5">
        <Col className="space-y-2">
          <Text
            as="h1"
            color="text-white"
            fontWeight="font-medium"
            size="text-xl"
            alignment="text-center"
          >
            Love is a serious game...
          </Text>
          <Text
            as="h1"
            color="text-white"
            fontWeight="font-medium"
            size="text-xl"
            textTransform="uppercase"
            alignment="text-center"
          >
            do you agree ?
          </Text>
        </Col>

        <Button
          label="Always"
          variant="primary"
          width="w-64"
          alignSelf="self-center"
          onClick={() => setIsOpen(true)}
        />
        <Button
          label="Never"
          variant="primary"
          width="w-64"
          alignSelf="self-center"
          onClick={() => setIsOpen(true)}
        />
        <Button
          label="Let's see"
          variant="primary"
          width="w-64"
          alignSelf="self-center"
          onClick={() => setIsOpen(true)}
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

export default withAuthUser(Step3);
