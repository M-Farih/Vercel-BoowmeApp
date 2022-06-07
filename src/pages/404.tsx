import React from "react";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { NextPage } from "next";
import { View } from "components";

const Login: NextPage = () => {
  // const { t } = useTranslation("common");

  return (
    <View className="w-full flex justify-center items-center h-screen pb-40 bg-gradient-to-l from-c2 to-c4">
      <Image
        src="/images/404.webp"
        alt="Picture of the author"
        objectFit="contain"
        objectPosition="center"
        width={363}
        height={214}
      />
    </View>
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

export default Login;
