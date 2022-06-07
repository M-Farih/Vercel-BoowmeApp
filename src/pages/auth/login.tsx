import React from "react";
import { Col, Header, Input, Link, Row, Text, View } from "components";
// import { FacebookIcon, GoogleIcon, PhoneIcon } from "components/icons";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { NextPage } from "next";
import FirebaseAuth from "components/FirebaseAuth";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import FullPageLoader from "components/FullPageLoader";

const Login: NextPage = () => {
  // const { t } = useTranslation("common");
  return (
    <>
      {/*Background image*/}
      <Image
        src="/images/bg/bg2.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {/* <Header /> */}
      <Header variant="blur" />
      <Col className="relative w-full h-screen flex items-center justify-center px-8 inset-0">
        <Col className="space-y-5">
          <Text
            as="h1"
            color="text-white"
            fontWeight="font-medium"
            size="text-xl"
            textTransform="uppercase"
            alignment="text-center"
          >
            we broke the dating code...
          </Text>
          <Text
            as="h2"
            color="text-white"
            fontWeight="font-light"
            size="text-lg"
            textTransform="capitalize"
            alignment="text-center"
          >
            Ready? Set, Go!!
          </Text>
        </Col>
        <Col className="mt-10 space-y-5 items-center">
          <FirebaseAuth />
          {/* <Button
            icon={<GoogleIcon iconPosition="left-5" />}
            label="Login with Google"
            variant="primary"
            width="w-64"
            onClick={handleClick}
          />
          <Button
            icon={<FacebookIcon iconPosition="left-5" />}
            label="Login with Facebook"
            variant="primary"
            width="w-64"
            onClick={handleClick}
          />
          <Button
            icon={<PhoneIcon iconPosition="left-5" />}
            label="Login with Phone N°"
            variant="primary"
            width="w-64"
            onClick={handleClick}
          /> */}
          <Row className="mt-10 space-x-2">
            <Input type="checkbox" defaultChecked />
            <View className="space-x-1">
              <Text
                as="span"
                color="text-white"
                fontWeight="font-light"
                size="text-sm"
                float="left"
              >
                By continuing, you confirm that you have read and accepted our
              </Text>

              <Text
                as="span"
                color="text-white"
                fontWeight="font-light"
                size="text-sm"
                float="left"
                decoration="underline"
              >
                <Link
                  href="https://www.deviantart.com/"
                  className="hover:text-c2"
                >
                  terms & conditions{" "}
                </Link>
                <Link
                  href="https://www.deviantart.com/"
                  className="hover:text-c2"
                >
                  privacy & policy{" "}
                </Link>
                <Link
                  href="https://www.deviantart.com/"
                  className="hover:text-c2"
                >
                  cookie & policy
                </Link>
              </Text>
            </View>
          </Row>
        </Col>
      </Col>
    </>
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

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenAuthedBeforeRedirect: AuthAction.SHOW_LOADER,
  LoaderComponent: FullPageLoader,
})(Login);
