import type { NextPage } from "next";
import { Col } from "components";
// import { useTranslation } from "hooks/translate";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SwipePage from "./swipe";
// import { InboxInIcon } from "@heroicons/react/solid";
// import { Sidebar } from "layouts/sidebar";
import { useAuthUser } from "next-firebase-auth";
import { withAuthUser } from "utils/auth";
// import dynamic from "next/dynamic";
// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
// });

const IndexPage: NextPage = () => {
  // const { t } = useTranslation("common");
  const AuthUser = useAuthUser();
  console.log("auth user ?", AuthUser);
  return (
    <Col>
      {/* <div className="w-full">
        <Spline scene="https://prod.spline.design/uNEMknqK0DLNkEKl/scene.spline" />
      </div> */}
      <SwipePage />
    </Col>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: "main",
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default withAuthUser(IndexPage);
