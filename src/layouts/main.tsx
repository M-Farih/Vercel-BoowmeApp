import { BottomBar } from "components";
// import { MenuBar } from "components/header/MenuBar";
import { LayoutProps } from "components/types";
import { View } from "components/View";
import { FC } from "react";

const Main: FC<LayoutProps> = ({ children }) => {
  return (
    <View>
      <View id="wrapper" className="is-collapse">
        {/* Header */}
        <View as="header" className="rounded-b-xl shadow-sm">
          <View className="header_wrap">
            {/** FIXME: responsive menubar */}
            {/* <View className="header_inner mcontainer ">
              <View className="left_side">
                <View onClick={() => router.back()}>
                  <ChevronLeft className="" color="#3C2E59" />
                </View>
                <View id="logo">
                  <Link href="/">
                    <img src="/images/logo.webp" alt="" />
                    <img
                      src="/images/logo.webp"
                      className="logo_mobile"
                      alt=""
                    />
                  </Link>
                </View>
              </View>
              
              <Profile /> 
            </View>menu bar */}
            {/* <MenuBar /> */}
            <BottomBar index={0} />
          </View>
        </View>
        {/* Main Contents */}
        <View className="mcontainer">{children}</View>
      </View>
    </View>
  );
};

export default Main;
