import { FC, useState } from "react";
import type { BottomBarProps } from "components/types";
import { View } from "components";
import { HomeIcon, WallIcon, SendMessageIcon } from "components/icons";
import { useRouter } from "next/dist/client/router";

export const BottomBar: FC<BottomBarProps> = (props) => {
  const [active, setActive] = useState(props.index);
  const router = useRouter();

  return (
    <View
      className={
        "is_header fixed bottom-0 z-50 h-16 w-full flex rounded-t-3xl bg-c6 items-center justify-between overflow-hidden"
      }
    >
      <View
        onClick={() => {
          setActive(0);
          router.replace("/");
        }}
        className="w-1/3 h-full relative grid place-items-center cursor-pointer"
      >
        <HomeIcon color={active === 0 ? "#536FA6" : "#818386"} />
      </View>

      <View
        onClick={() => {
          setActive(1);
          router.replace("/wall");
        }}
        className="w-1/3 h-full relative grid place-items-center cursor-pointer"
      >
        <WallIcon color={active === 1 ? "#536FA6" : "#818386"} />
      </View>

      <View
        onClick={() => {
          setActive(2);
          router.replace("/conversation");
        }}
        className="w-1/3 h-full relative grid place-items-center cursor-pointer"
      >
        <SendMessageIcon color={active === 2 ? "#536FA6" : "#818386"} />
      </View>
    </View>
  );
};
