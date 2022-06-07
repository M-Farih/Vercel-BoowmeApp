import cn from "classnames";
import { FC } from "react";
import type { BoxProps } from "components/types";
import { View } from "components";

const calculClass = ({ className, variant }: BoxProps) => {
  return cn({
    "flex shadow-md border border-white flex-col py-10 px-5 space-y-4 rounded-2xl bg-white bg-opacity-5 backdrop-filter backdrop-blur-md":
      variant === "blur",
    "flex shadow-md flex-col py-4 px-5 space-y-4 rounded-2xl bg-[#f2f4f8]":
      variant === "grey",
    "flex border border-[#8a9ec3] shadow-md flex-col py-4 px-5 space-y-4 rounded-2xl bg-[#f2f4f8]":
      variant === "grey-with-border",
    "flex flex-col pt-10 pb-10 px-5 space-y-4 rounded-2xl backdrop-blur-md bg-white/5 items-start justify-center":
      variant === "swipe",
    className,
  });
};

export const Box: FC<BoxProps> = ({
  height,
  width,
  children,
  variant,
  ...props
}) => {
  return (
    <View
      className={
        calculClass({ ...props, variant }) + ` ${height}` + ` ${width}`
      }
    >
      {children}
    </View>
  );
};
