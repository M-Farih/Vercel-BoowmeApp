import { FC } from "react";
import Image from "next/image";
import { View } from "components";
import { AvatarProps } from "components/types";
import { useAuthUser } from "next-firebase-auth";

export const MatchAvatar: FC<AvatarProps> = ({
  image,
  rounded,
  height,
  width,
}) => {
  const AuthUser = useAuthUser();

  return (
    <View className="flex -space-x-8 relative z-0 overflow-hidden justify-center p-4 m-4">
      <Image
        src="/images/Group.webp"
        layout="fill"
        loading="lazy"
        objectFit="contain"
        objectPosition="center"
      />
      <View
        className={`${rounded} ${height} ${width} z-10 bg-gradient-to-r p-[4px] from-c1 via-c2 to-c3`}
      >
        <Image
          //@ts-ignore
          src={
            AuthUser.photoURL
              ? AuthUser.photoURL
              : "http://via.placeholder.com/360x360"
          }
          width={200}
          height={200}
          loading="lazy"
          objectFit="cover"
          className="inline-block  h-12 w-12 rounded-full bg-white"
        />
      </View>
      <View
        className={`${rounded} ${height} ${width} z-10 mix-blend-multiply bg-gradient-to-r p-[4px] from-c3 via-c4 to-c5 outline outline-white outline-offset`}
        // className={`${rounded} ${height} ${width} circle-ring ring-4 ring-c4 border-2 border-white outline outline-white outline-offset-4`}
      >
        <Image
          /*
      // @ts-ignore */
          src={image}
          width={200}
          height={200}
          loading="lazy"
          objectFit="cover"
          className="inline-block h-12 w-12 rounded-full bg-white"
        />
      </View>
    </View>
  );
};
