import { View, Header } from "components";
import type { LayoutProps } from "components/types";
import type { FC } from "react";
import { useRouter } from "next/dist/client/router";
import React from "react";

const Centered: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <View>
      {/* <Header /> */}
      <Header
        variant="blur"
        backLink={router.pathname === "/login" ? false : true}
      />
      <View
        data-layout="centered"
        className="w-full h-screen flex items-center justify-center px-8 inset-0"
        //className="flex items-center justify-center px-8 py-36"
      >
        {children}
      </View>
    </View>
  );
};

export default Centered;
