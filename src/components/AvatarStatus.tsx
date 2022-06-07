import { View, Text, Avatar } from "components";
import { FC } from "react";
import { AvatarStatusProps } from "components/types";
export const AvatarStatus: FC<AvatarStatusProps> = ({
  status,
  src,
  height,
  width,
}) => {
  return (
    <View className="flex items-center">
      <Text textClass="flex-shrink-0 inline-block relative">
        <Avatar
          height={height}
          width={width}
          image={src}
          rounded="rounded-full"
        />
        <Text
          className={`${
            status === true ? "bg-green-400" : "bg-gray-300"
          } absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-white`}
          as="span"
          textClass="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"
          aria-hidden="true"
        />
      </Text>
    </View>
  );
};
