import { useState } from "react";
import { Button, View, Row } from "components";
import { Popover, Transition } from "@headlessui/react";
import { LikeIcon } from "components/icons";

const emojiMenu = ["👍", "😍", "👏", "😉", "😎", "💐", "😂"];

export const EmojiReaction = () => {
  const [emotes, setemotes] = useState("");

  const handleEmojiClick = (emoji: string) => {
    console.log("hello");
    if (emotes === emoji) {
      setemotes("");
    } else {
      setemotes(emoji);
    }
  };

  return (
    <View>
      <Popover className="relative flex">
        <Popover.Button className="-ml-0.5 h-6 w-6 ">
          {emotes ? emotes : <LikeIcon />}
        </Popover.Button>
        <Transition
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="absolute -left-3 -top-10 z-10">
            {({ close }) => (
              <Row className="flex justify-evenly bg-white rounded-full shadow-md px-2">
                {emojiMenu.map((emoji) => (
                  <Button
                    className="p-1 hover:animate-bounce hover:text-2xl"
                    onClick={async () => {
                      handleEmojiClick(emoji);
                      close();
                      console.log(emoji);
                    }}
                  >
                    {emoji}
                  </Button>
                ))}
              </Row>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </View>
  );
};
