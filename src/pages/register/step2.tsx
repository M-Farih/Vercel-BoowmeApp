import { useEffect, useState } from "react";
import { Button, Col, Link, OTPBox, Popup, Text } from "components";
import { VerifiedIcon } from "components/icons";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { withAuthUser } from "utils/auth";

const Step2: NextPage = () => {
  // const { t } = useTranslation("common");
  const router = useRouter();
  const handleClick = () => {
    router.push("/register/step3");
  };
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Popup
        show={isOpen}
        onClose={() => setIsOpen(false)}
        title="Failed to authenticate"
        text="OTP code is invalid"
      />
      {/*Background image*/}
      <Image
        src="/images/bg/bg8.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Col className="relative self-center space-y-6">
        <Col>
          <VerifiedIcon color="white" iconPosition="center" />
          <Text
            as="h1"
            color="text-white"
            fontWeight="font-bold"
            size="text-xl"
            textTransform="capitalize"
            alignment="text-center"
          >
            Verification
          </Text>
        </Col>
        <Col className="space-y-2">
          <Text
            as="h2"
            color="text-white"
            fontWeight="font-light"
            size="text-md"
            alignment="text-center"
          >
            We sent you an SMS code
          </Text>
          <Text
            as="h2"
            color="text-white"
            fontWeight="font-light"
            size="text-md"
            alignment="text-center"
          >
            on this phone number
          </Text>
          <Text
            as="h2"
            color="text-white"
            fontWeight="font-light"
            size="text-md"
            alignment="text-center"
          >
            +212 631 721 917
          </Text>
        </Col>
        <OTPBox
          autoFocus
          isNumberInput
          length={4}
          className="flex justify-center items-center flex-wrap"
          inputClassName="w-12 h-12 m-2 text-center text-white rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm placeholder-gray-300 border border-white"
          onChangeOTP={(otp) => {
            console.log("Number OTP: ", otp);
            if (otp !== "0000" && otp.length == 4) {
              setIsOpen(true);
            }
          }}
        />
        <Col className="space-y-3">
          <Button
            label="Continue"
            variant="primary"
            width="w-5/6"
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
            Code not received ?{" "}
            {counter === 0 ? (
              <Link
                href={"http://localhost:3000/register/step2"}
                className="text-c2 font-bold"
              >
                Retry
              </Link>
            ) : (
              "Retry in " + counter + "s"
            )}
          </Text>
        </Col>
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
export default withAuthUser(Step2);
