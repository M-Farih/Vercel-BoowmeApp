import { FC } from "react";
import type { TagProps } from "components/types";
import { View, Text } from "components";
import cn from "classnames";

const calculClass = ({ selected, cursor }: TagProps) => {
  return cn({
    "flex flex-col -z-1 justify-center border border-white items-center space-y-2 p-5 rounded-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl w-40":
      selected === false,
    "flex flex-col justify-center items-center space-y-2 p-5 rounded-2xl bg-gradient-to-r from-c4 to-c2 w-40":
      selected === true,
    "cursor-pointer	": cursor,
  });
};
export const Tag: FC<TagProps> = ({
  label,
  variant,
  icon,
  textSize,
  children,
  ...props
}) => {
  return (
    <View
      className={
        calculClass({ ...props, variant }) +
        ` ${variant === "square" ? "h-36" : "h-28"}`
      }
    >
      {icon}
      <Text
        as="span"
        color="text-white"
        fontWeight="font-light"
        size={textSize}
        alignment="text-center"
      >
        {label}
      </Text>
      {children}
    </View>
  );
};
