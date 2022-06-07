import {
  Avatar,
  Col,
  CommentReaction,
  EmojiReaction,
  Header,
  MatchAvatar,
  Row,
  Text,
  View,
  Unlock,
  FavReaction,
} from "components";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "hooks/translate";
import { withAuthUser } from "utils/auth";
import { useAuthUser } from "next-firebase-auth";
import { Tab } from "@headlessui/react";
import { MatchIcon, LikeOutlinIcon, StarIconTap } from "components/icons";
import { useState, useEffect } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const WallPage: NextPage = () => {
  let people = [
    {
      id: 1,
      name: "Lindsay Walton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Alex Suprun",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 3,
      name: "Nada Cote",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "Subhan Wagner",
      imageUrl:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 5,
      name: "Tim Nava",
      imageUrl:
        "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
    },
    {
      id: 6,
      name: "Kaylan Kane",
      imageUrl:
        "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 7,
      name: "Charley Green",
      imageUrl:
        "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    },
    // More people...
  ];

  let [categories] = useState({
    All: [
      {
        id: 1,
        person: people[0],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "1 hours ago",
        type: 1,
      },
      {
        id: 2,
        person: people[1],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "2 hours ago",
        type: 2,
      },
      {
        id: 3,
        person: people[2],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "4 days ago",
        type: 3,
      },
      {
        id: 4,
        person: people[4],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "3 hours ago",
        type: 2,
      },
      {
        id: 5,
        person: people[5],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "4 days ago",
        type: 3,
      },
      {
        id: 6,
        person: people[6],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "4 days ago",
        type: 3,
      },
    ],
    Match: [
      {
        id: 1,
        person: people[0],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "1 hours ago",
        type: 1,
      },
    ],
    Reaction: [
      {
        id: 3,
        person: people[2],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "4 days ago",
        type: 3,
      },
      {
        id: 2,
        person: people[1],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "2 hours ago",
        type: 2,
      },
    ],
    Favoris: [
      {
        id: 3,
        person: people[2],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "4 days ago",
        type: 3,
      },
      {
        id: 2,
        person: people[1],
        project: "Workcation",
        commit: "2d89f0c8",
        environment: "production",
        time: "2 hours ago",
        type: 2,
      },
    ],
  });

  const AuthUser = useAuthUser();
  // const { t } = useTranslation(["wall", "common"]);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <View className="bg-white">
      <Header variant="flat" setting={true} justify="justify-between p-4" />
      <View
        className={
          "bg-white h-16 w-full sticky top-10 z-40" +
          ` ${scroll ? "shadow-sm" : ""}`
        }
      ></View>
      <View className="relative flex justify-center bg-gradient-to-b from-white via-white to-[#DDE3EF] bg-fixed h-fit min-h-screen">
        <View className="w-full px-2 py-2 sm:px-0">
          <Tab.Group>
            <Tab.List
              className={
                "flex border border-separate rounded-md overflow-hidden bg-white sticky top-14 z-50 -mt-16"
              }
            >
              {/* Tabs */}
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-bold leading-5 shadow-sm",
                      // `tab${tab.name}`,
                      // "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-white shadow text-c2 border-b border-c2"
                        : "text-gray-400 hover:border-b hover:border-c2 hover:text-c2"
                    )
                  }
                >
                  <Row className="flex justify-center items-center space-x-2">
                    {/* {category === "All" && (
                      <CollectionIcon className="mr-2 w-4 h-4" />
                    )} */}
                    {category === "Match" && <MatchIcon />}
                    {category === "Reaction" && <LikeOutlinIcon />}
                    {category === "Favoris" && <StarIconTap />}
                    {category}
                  </Row>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {/* stories */}
              <Row className="space-x-3 p-3 overflow-hidden overflow-x-scroll border-b">
                {people.map((p) => (
                  <Col className="flex justify-center text-center space-y-2 text-gray-500 w-20">
                    <Avatar
                      bgBorder
                      height="h-20"
                      width="w-20"
                      image={p.imageUrl}
                      rounded="rounded-full"
                      blured={false}
                    />
                    <Text
                      as="p"
                      fontWeight="font-light"
                      size="text-sm"
                      textClass="truncate"
                    >
                      {p.name}
                    </Text>
                  </Col>
                ))}
              </Row>
              {/* Panels */}
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx} className={classNames("rounded-xl p-3")}>
                  {posts.map((post) => (
                    <View>
                      {post.type == 1 && (
                        <View key={post.id} className="py-4 space-y-2">
                          <View className="flex space-x-3 items-center">
                            <Avatar
                              bgBorder
                              height="h-8"
                              width="w-8"
                              image={post.person.imageUrl}
                              rounded="rounded-full"
                            />
                            <View className="flex-1 space-y-1">
                              <View className="flex items-center justify-between">
                                <Text
                                  as="h3"
                                  fontWeight="font-bold"
                                  textTransform="capitalize"
                                  size="text-sm"
                                >
                                  {post.person.name}
                                </Text>
                                <Text as="p" className="text-gray-300 text-sm">
                                  {post.time}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <Col className="bg-white rounded-md shadow-md mx-auto p-4 divide-y divide-gray-100">
                            <View>
                              <Text
                                as="h3"
                                className="text-c2 text-md font-medium text-center"
                              >
                                {post.person.name} Matched with you !
                              </Text>
                              <View className="ml-8">
                                <MatchAvatar
                                  height="h-28"
                                  width="w-28"
                                  image={post.person.imageUrl}
                                  rounded="rounded-full"
                                />
                              </View>
                            </View>
                            <View className="pt-2">
                              <Row className="flex justify-between items-center text-gray-600">
                                <Row className="space-x-3 items-center">
                                  <EmojiReaction />
                                  <CommentReaction />
                                  <Unlock />
                                </Row>
                                <FavReaction />
                              </Row>
                            </View>
                          </Col>
                        </View>
                      )}
                      {(post.type === 2 || post.type === 3) && (
                        <View key={post.id} className="py-4 space-y-2">
                          <View className="flex space-x-3 items-center">
                            <Avatar
                              bgBorder
                              height="h-8"
                              width="w-8"
                              image={post.person.imageUrl}
                              rounded="rounded-full"
                              blured={false}
                            />
                            <View className="flex-1 space-y-1">
                              <View className="flex items-center justify-between">
                                <Text
                                  as="h3"
                                  fontWeight="font-bold"
                                  textTransform="capitalize"
                                  size="text-sm"
                                >
                                  {post.person.name}
                                </Text>
                                <Text as="p" className="text-gray-300 text-sm">
                                  {post.time}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <Col className="bg-white rounded-md shadow-md mx-auto p-4 divide-y divide-gray-100">
                            <View className="pb-2">
                              <Row className="flex justify-between">
                                <Text
                                  as="h3"
                                  className="text-c1 text-md font-medium"
                                >
                                  {post.person.name} commented to your profile.
                                </Text>
                                <View>
                                  <Avatar
                                    bgBorder
                                    height="h-10"
                                    width="w-10"
                                    image={AuthUser.photoURL}
                                    rounded="rounded-full"
                                    blured={false}
                                  />
                                </View>
                              </Row>
                              <Text className="text-sm text-gray-500">
                                "Deployed {post.project} to {post.environment}"
                              </Text>
                            </View>
                            <View className="pt-2">
                              <Row className="flex justify-between items-center text-gray-600 group-hover:text-c4">
                                <Row className="space-x-3 items-center">
                                  <EmojiReaction />
                                  <CommentReaction />
                                </Row>
                                <FavReaction />
                              </Row>
                            </View>
                          </Col>
                        </View>
                      )}
                    </View>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </View>
      </View>
    </View>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: "main",
      ...(await serverSideTranslations(locale, ["common", "wall"])),
      // Will be passed to the page component as props
    },
  };
}

export default withAuthUser(WallPage);
