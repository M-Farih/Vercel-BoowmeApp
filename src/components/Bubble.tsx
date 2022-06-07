import React, { FC } from "react";
import { View } from "./View";
import { Avatar } from "./Avatar";

export interface BubbleMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sender: "me" | "he";
}

export const BubbleMessage: FC<BubbleMessageProps> = ({ children, sender }) => {
  return (
    <View className="chat-message my-2 z-0">
      {sender === "me" ? (
        <View className="flex items-end justify-end">
          <View className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <View>
              <View className="relative">
                <View className="pr-16 pl-5 py-4 break-all rounded-3xl inline-block rounded-br-none bg-white text-gray-600 shadow-md">
                  {children}
                </View>
                <View className="w-10 h-5 absolute right-3 bottom-[1px] text-gray-300">
                  10:21
                </View>
              </View>
            </View>
          </View>
          <View className="order-2">
            <Avatar
              height="h-10"
              width="w-10"
              image="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              rounded="rounded-full"
            />
          </View>
        </View>
      ) : (
        <View className="flex items-start">
          <View className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <View>
              <View className="relative">
                <View className="pr-16 pl-5 py-4 break-all rounded-3xl inline-block rounded-tl-none bg-[#9fb3d8] text-white shadow-md">
                  {children}
                </View>
                <View className="w-10 h-5 absolute right-3 bottom-[1px] text-gray-300">
                  10:21
                </View>
              </View>
            </View>
          </View>
          <View className="order-1">
            <Avatar
              height="h-10"
              width="w-10"
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
              rounded="rounded-full"
            />
          </View>
        </View>
      )}
    </View>
  );
};
