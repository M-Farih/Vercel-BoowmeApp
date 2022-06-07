import cn from "classnames";
import { FC, ReactNode } from "react";
import { View } from "components";

export interface TagContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant: "rounded" | "rectongular" | "rounded-color";
  color?: string;
  children?: ReactNode;
}

const calculClass = ({ className, variant }: TagContainerProps) => {
  return cn({
    "flex shadow-lg p-1 flex-col bg-gradient-to-r from-[#E19ABF] to-[#536FA6] justify-center items-center w-6 h-6 rounded-full":
      variant === "rounded",
    "flex shadow-md shadow-black p-1 flex-col justify-center items-center w-8 h-8 rounded-full":
      variant === "rounded-color",
    "flex shadow-lg flex-col py-2 px-5 rounded-2xl bg-gradient-to-r from-[#E19ABF] to-[#536FA6] rounded-md w-fit":
      variant === "rectongular",
    className,
  });
};

export const TagContainer: FC<TagContainerProps> = ({
  children,
  variant,
  color,
  ...props
}) => {
  return (
    <View className={calculClass({ ...props, variant }) + " " + color}>
      {children}
    </View>
  );
};
