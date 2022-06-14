import React, { useCallback, useEffect, useState } from "react";
import { Col, ConversationHeader, Row, View, Image } from "components";
// import { useTranslation } from "hooks/translate";
import { BubbleMessage } from "components/Bubble";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPage } from "next";
import { withAuthUser } from "utils/auth";
import {
  MicIcon,
  ImojiIcon,
  AttachementIcon,
  SendIcon,
  GalleryIcon,
  FileIcon,
  CameraIcon,
  BitmojiIcon,
} from "components/icons";
import { TagContainer } from "components/TagContainer";
import Scroll from "react-scroll";

const Conversation: NextPage = () => {
  // const { t } = useTranslation("common");
  const [textCount, setTextCount] = useState(0);
  const [isTiping, setIsTiping] = useState(false);
  const [openExpandableButton, setOpenExpandableButton] = useState(false);
  const [textAreaRowCount, setTextAreaRowCount] = useState(1);
  const scroll = Scroll.animateScroll;

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  useEffect(() => {
    scrollToBottom();
  });

  const calculTextCount = useCallback(
    (text: any) => {
      let count = text.toString().length;
      setTextCount(count);
      switch (true) {
        case count == 0:
          setIsTiping(false);
          setTextAreaRowCount(1);
          break;
        case count > 0 && count < 20:
          setIsTiping(true);
          setTextAreaRowCount(1);
          break;
        case count > 20 && count <= 40:
          console.log("retour a la ligne 1");
          setTextAreaRowCount(2);
          break;
        case count > 40:
          console.log("retour a la ligne 2");
          setTextAreaRowCount(3);
          break;
      }
    },
    [textCount, setTextCount]
  );

  const [messages, setMessage] = useState([
    {
      sender: "me",
      message: "Lorem Ipsum is simply dummy text of the printing",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      sender: "me",
      message: "and typesetting industry.",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      sender: "he",
      message:
        "It is a long established fact that a test test reader will be distracted by the readable content of a page when looking at its layout",
      date: "Tuesday, 9:21 AM",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      sender: "me",
      message: "Lorem Ipsum is simply dummy text of the",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      sender: "me",
      message: "and typesetting industry.",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      sender: "he",
      message:
        "It is a long established fact that a reader will be test distracted by the readable content of a page when looking at its layout",
      date: "Tuesday, 9:21 AM",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      sender: "me",
      message: "Lorem Ipsum is simply dummy text of the printing ok",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      sender: "me",
      message: "and typesetting industry.",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },

    {
      sender: "he",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      date: "Tuesday, 9:21 AM",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      sender: "me",
      message: "Lorem Ipsum is simply test of the printing",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      sender: "me",
      message: "and typesetting industry.",
      date: "Tuesday, 9:20 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      sender: "he",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
      date: "Tuesday, 9:21 AM",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  const textInput = React.createRef<any>(); // React use ref to get input value

  const addMessage = () => {
    messages.push({
      sender: "me",
      message: textInput.current.value,
      date: "Tuesday, 10:00 AM",
      img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    });
    setMessage([...messages]);
    textInput.current.value = "";
    setIsTiping(false);
    setTextAreaRowCount(1);
  };

  return (
    <Col>
      <ConversationHeader />
      {/*  bg  */}
      <Image
        src={"/images/bg/bg-conversation.webp"}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="bg_steps"
      />
      <Col className="overflow-scroll">
        <Col className="px-4 py-20 flex flex-wrap content-end">
          {messages.map((msg, index) => {
            return (
              <BubbleMessage
                key={index}
                sender={msg.sender === "me" ? "me" : "he"} //@ts-ignore
                img={msg.img}
              >
                {msg.message}
              </BubbleMessage>
            );
          })}
        </Col>

        <View className="w-full fixed bottom-0 p-4">
          <Row className="w-full justify-evenly items-center rounded-3xl px-6 relative bg-white shadow-md ring-1 ring-gray-300">
            <View className="w-full ">
              <textarea
                className="border-none focus:outline-0 focus:border-0 focus:ring-0 w-8/12"
                ref={textInput}
                rows={textAreaRowCount}
                cols={20}
                placeholder={"Type something..."}
                onChange={(event: { target: { value: any } }) =>
                  calculTextCount(event.target.value)
                }
              ></textarea>
            </View>
            {/* icons (audio - imoji - attachement) */}
            <Row className="w-3/12 justify-between items-center absolute bottom-3 right-3">
              {isTiping ? (
                <View
                  onClick={() => {
                    addMessage();
                    scrollToBottom();
                  }}
                >
                  <SendIcon />
                </View>
              ) : (
                <MicIcon />
              )}
              <ImojiIcon />
              <View className="relative text-[#989898]">
                {openExpandableButton && (
                  <Col className="absolute -top-40 -right-2 space-y-1">
                    <TagContainer variant="rounded-color" color="bg-[#4F54AF]">
                      <BitmojiIcon key={"1"} />
                    </TagContainer>
                    <TagContainer variant="rounded-color" color="bg-[#D1396C]">
                      <CameraIcon key={"2"} />
                    </TagContainer>
                    <TagContainer variant="rounded-color" color="bg-[#0062CC]">
                      <FileIcon key={"3"} />
                    </TagContainer>
                    <TagContainer variant="rounded-color" color="bg-[#AE48CB]">
                      <GalleryIcon key={"4"} />
                    </TagContainer>
                  </Col>
                )}
                <View
                  onClick={() => {
                    setOpenExpandableButton(!openExpandableButton);
                  }}
                >
                  <AttachementIcon />
                </View>
              </View>
            </Row>
          </Row>
        </View>
      </Col>
    </Col>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: "empty",
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default withAuthUser(Conversation);
