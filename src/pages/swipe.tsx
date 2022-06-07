import {
  Avatar,
  Box,
  Button,
  Col,
  Image,
  Input,
  Popup,
  Row,
  Text,
  View,
} from "components";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "hooks/translate";
import { withAuthUser } from "utils/auth";
import { Sidebar } from "layouts/sidebar";
import { useAuthUser } from "next-firebase-auth";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  BirthdayIcon,
  DislikeIcon,
  EducationIcon,
  HeightIcon,
  LikeIconSwipe,
  LocationIcon,
  FlagIcon,
  MetierIcon,
  ParameterIcon,
  SkipeIcon,
  UndoIcon,
  InfoIcon,
} from "components/icons";
import { TagContainer } from "components/TagContainer";
import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
// import Scroll from "react-scroll";
import TinderCard from "react-tinder-card";
import { RadioSelect } from "components";

const SwipePage: NextPage = () => {
  // const { t } = useTranslation(["swipe", "common"]);
  const [open, setOpen] = useState(false);
  let [openReportPopup, setOpenReportPopup] = useState(false);
  // const scroll = Scroll.animateScroll;

  /*character limitation */
  let limit = 50;
  const [content, setContent] = useState("");

  const setFormattedContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [showReportReasons, setShowReportReasons] = useState(false);

  const openLightbox = useCallback((_event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // const scrollToProfileDetails = () => {
  //   scroll.scrollTo(window.innerHeight, {
  //     duration: 500,
  //     delay: 30,
  //     smooth: "easeInOutCubic",
  //   });
  // };
  // const scrollToTop = () => scroll.scrollToTop();

  const AuthUser = useAuthUser();

  const db = [
    {
      fname: "Richard",
      lname: "Hendricks",
      url: "https://images.unsplash.com/photo-1615472096167-e2efc2f25dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      city: "tanger",
      country: "morocco",
      height: "1m72",
      age: "21ans",
    },
    {
      fname: "Erlich",
      lname: "Bachman",
      url: "https://images.unsplash.com/photo-1530797195762-6e542a0f1843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      city: "rabat",
      country: "morocco",
      height: "1m65",
      age: "28ans",
    },
    {
      fname: "Monica",
      lname: "Hall",
      url: "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      city: "casa",
      country: "morocco",
      height: "1m70",
      age: "22ans",
    },
    {
      fname: "Jared Dunn",
      lname: "Dunn",
      url: "https://images.unsplash.com/photo-1636302926027-9619142d7173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwaGlqYWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      city: "taza",
      country: "morocco",
      height: "1m73",
      age: "20ans",
    },
    {
      fname: "Dinesh",
      lname: "Chugtai",
      url: "https://images.unsplash.com/photo-1629302404693-18d123b6c908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwaGlqYWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      city: "fes",
      country: "morocco",
      height: "1m59",
      age: "25ans",
    },
  ];

  const reportsOption = [
    {
      id: "1",
      name: "option",
      label: "Block this profile",
    },
    {
      id: "2",
      name: "option",
      label: "Report this profile",
    },
  ];
  const reportsReason = [
    {
      id: "1",
      name: "reason",
      label: "This profile does not respect Boowme's standards",
    },
    {
      id: "2",
      name: "reason",
      label: "This profile impersonates someone",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  // const [lastDirection, setLastDirection] = useState();

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo<any>(
    () =>
      Array(db.length)
        .fill(0)
        .map((_i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (_nameToDelete: string, index: number) => {
    // setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (fname: string, idx: number) => {
    console.log(`${fname} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir: string) => {
    console.log("swipe to ", dir);

    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };
  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div>
      {/* sidebar btn */}
      <View className="fixed right-6 top-6 z-20" onClick={() => setOpen(true)}>
        <ParameterIcon />
      </View>

      {/* story img */}
      <View className="fixed left-4 top-6 z-20 p-1 rounded-full shadow-sm">
        {/* <StoryImg
          border={4}
          dimension="20"
          image={db[currentIndex].url}
          rounded="full"
          blured={false}
        /> */}
        <Avatar
          bgBorder
          height="h-20"
          width="w-20"
          image={db[currentIndex].url}
          rounded="rounded-full"
          blured={false}
        />
      </View>

      {/* sidebar */}
      <Sidebar
        show={open}
        onClick={() => setOpen(false)}
        signOut={AuthUser.signOut}
        displayName={AuthUser.displayName}
        photoURL={AuthUser.photoURL}
      />

      {/* report popup */}
      <Popup
        variant="white"
        show={openReportPopup}
        title={"Report or Block " + db[currentIndex].fname}
        onClose={() => setOpenReportPopup(false)}
        children={
          <Col className="space-y-4">
            <Col className="space-y-3">
              <Text
                as="span"
                color="text-c2"
                fontWeight="font-medium"
                size="text-sm"
              >
                By blocking or reporting this profile, you will no longer be
                able to message or find this person.
              </Text>
              <RadioSelect
                onChange={(e) =>
                  e === "2"
                    ? setShowReportReasons(true)
                    : setShowReportReasons(false)
                }
                options={reportsOption}
              />
              {showReportReasons && (
                <Col className="pl-3 space-y-3">
                  <Text
                    as="span"
                    color="text-c2"
                    fontWeight="font-bold"
                    size="text-sm"
                  >
                    Why are you reporting this profile ?
                  </Text>
                  {/* <MultiSelect max={1} options={reportsReason}/> */}
                  <RadioSelect
                    options={reportsReason}
                    onChange={(e) => console.log("e ?", e)}
                  />
                </Col>
              )}
            </Col>
            <Row className="justify-around">
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setOpenReportPopup(false)}
              />
              <Button
                label="Report"
                variant="primary"
                onClick={() => setOpenReportPopup(false)}
              />
            </Row>
          </Col>
        }
      />

      {/* info box */}
      <View className="fixed bottom-32 z-20 w-11/12 left-4">
        <Box variant="swipe">
          <Col className="space-y-2">
            <Row className="space-x-2">
              <Text
                as="span"
                color="text-white"
                fontWeight="font-bold"
                size="text-lg"
                textTransform="capitalize"
              >
                {db[currentIndex].fname}
              </Text>
              <View
              //onClick={scrollToProfileDetails}
              >
                <InfoIcon />
              </View>
            </Row>

            <Col className="space-y-1">
              <Row className="space-x-1 items-center">
                <TagContainer variant="rounded">
                  <LocationIcon />
                </TagContainer>
                <Text
                  as="span"
                  color="text-white"
                  fontWeight="font-light"
                  size="text-base"
                  textTransform="capitalize"
                >
                  {db[currentIndex].city}, {db[currentIndex].country}
                </Text>
              </Row>

              <Row className="space-x-1 items-center">
                <TagContainer variant="rounded">
                  <HeightIcon />
                </TagContainer>
                <Text
                  as="span"
                  color="text-white"
                  fontWeight="font-light"
                  size="text-base"
                  textTransform="capitalize"
                >
                  {db[currentIndex].height}
                </Text>
                <TagContainer variant="rounded">
                  <BirthdayIcon />
                </TagContainer>
                <Text
                  as="span"
                  color="text-white"
                  fontWeight="font-light"
                  size="text-base"
                  textTransform="capitalize"
                >
                  {db[currentIndex].age}
                </Text>
              </Row>
            </Col>
          </Col>
        </Box>
      </View>

      {/* btn swip */}
      {canSwipe && (
        <Row className="w-full grid place-items-center">
          <Row className="fixed z-50 bottom-20 justify-items-stretch self-center items-center justify-evenly w-3/4">
            <div onClick={() => swipe("left")}>
              <DislikeIcon />
            </div>
            <div onClick={() => goBack()}>
              <UndoIcon />
            </div>
            <SkipeIcon />
            <div onClick={() => swipe("right")}>
              <LikeIconSwipe />
            </div>
          </Row>
        </Row>
      )}

      <View id="wrapper">
        <View className="panels" id="a">
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              preventSwipe={["up", "down"]}
              key={character.fname}
              onSwipe={(dir) =>
                swiped(
                  dir,
                  character.fname, //@ts-ignore
                  index
                )
              }
              onCardLeftScreen={() => outOfFrame(character.fname, index)}
            >
              {/* image */}
              <Image
                src={character.url}
                alt="Picture of the author"
                width={window.innerWidth}
                height={window.innerHeight}
                objectFit={"cover"}
              />

              {/* details info column */}
            </TinderCard>
          ))}
        </View>

        <View className="h-screen w-full self-center p-10">
          <Text
            as="span"
            color="text-black"
            fontWeight="font-medium"
            size="text-lg"
            textTransform="capitalize"
          >
            There is no one around you, Expand your discovery setting to see
            more people
          </Text>
        </View>

        <View className="panels" id="b">
          {/* details info column */}
          {canSwipe && (
            <Col className="mt-10 mb-20 px-2 space-y-3">
              <View className="space-y-3">
                {/* Row user info */}
                <Row className="space-x-5">
                  <Avatar
                    height="w-24"
                    width="w-24"
                    edit={false}
                    image={db[currentIndex].url}
                    onClick={() => {}}
                    rounded="rounded-full"
                    blured={false}
                  />
                  <Col className="space-y-4">
                    <Row className="w-full">
                      <Text
                        as="span"
                        textClass="text-[#3C2E59]"
                        fontWeight="font-bold"
                        size="text-lg"
                        textTransform="capitalize"
                      >
                        {db[currentIndex].fname}
                      </Text>
                    </Row>
                    {/* metier here */}

                    <Row className="space-x-6">
                      <Col className="">
                        <Row className="space-x-2 items-center">
                          <TagContainer variant="rounded">
                            <MetierIcon />
                          </TagContainer>
                          <Text
                            as="span"
                            textClass="text-[#3C2E59]"
                            fontWeight="font-light"
                            size="text-base"
                            textTransform="capitalize"
                          >
                            Metier
                          </Text>
                        </Row>
                      </Col>

                      <Col>
                        <Row className="space-x-2 items-center">
                          <TagContainer variant="rounded">
                            <EducationIcon />
                          </TagContainer>
                          <Text
                            as="span"
                            color="text-black"
                            fontWeight="font-light"
                            size="text-base"
                            textTransform="capitalize"
                          >
                            Education
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* Row lifestyle */}
                <Box variant="grey">
                  <Text
                    as="span"
                    textClass="text-[#3C2E59]"
                    fontWeight="font-bold"
                    size="text-lg"
                    textTransform="capitalize"
                  >
                    Lifestyle
                  </Text>
                </Box>
                {/* Row bio */}
                <Box variant="grey">
                  <Text
                    as="span"
                    textClass="text-[#3C2E59]"
                    fontWeight="font-bold"
                    size="text-lg"
                    textTransform="capitalize"
                  >
                    Bio
                  </Text>
                  <Text
                    as="span"
                    textClass="text-gray-700"
                    fontWeight="font-light"
                    size="text-base"
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et diam nonumy
                    eirmod ipsum dolor sit
                  </Text>
                </Box>
                {/* Row Qualities */}
                <Box variant="grey">
                  <Row className="flex-wrap space-x-2 space-y-2 overflow-hidden">
                    <Row className="w-full">
                      <Text
                        as="span"
                        textClass="text-[#3C2E59]"
                        fontWeight="font-bold"
                        size="text-lg"
                        textTransform="capitalize"
                      >
                        Qualities
                      </Text>
                    </Row>
                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Senitivity
                      </Text>
                    </TagContainer>
                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Independence
                      </Text>
                    </TagContainer>
                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Sympathy
                      </Text>
                    </TagContainer>
                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Openness
                      </Text>
                    </TagContainer>
                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Respect
                      </Text>
                    </TagContainer>
                  </Row>
                </Box>
                {/* Row Passions */}
                <Box variant="grey">
                  <Row className="flex-wrap space-x-2 space-y-2 overflow-hidden">
                    <Row className="w-full">
                      <Text
                        as="span"
                        textClass="text-[#3C2E59]"
                        fontWeight="font-bold"
                        size="text-lg"
                        textTransform="capitalize"
                      >
                        Passions
                      </Text>
                    </Row>

                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Photographie
                      </Text>
                    </TagContainer>
                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Sport
                      </Text>
                    </TagContainer>
                    <TagContainer variant="rectongular">
                      <Text
                        as="span"
                        color="text-white"
                        fontWeight="font-light"
                        size="text-sm"
                        textTransform="capitalize"
                      >
                        Ecriture
                      </Text>
                    </TagContainer>
                  </Row>
                </Box>
                {/* Row lifestyle */}
                <Box variant="grey">
                  <Text
                    as="span"
                    textClass="text-[#3C2E59]"
                    fontWeight="font-bold"
                    size="text-lg"
                    textTransform="capitalize"
                  >
                    Gallery
                  </Text>
                  <Gallery photos={photos} onClick={openLightbox} />
                  <ModalGateway>
                    {viewerIsOpen ? (
                      <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage} //@ts-ignore
                          views={photos.map((x) => ({
                            ...x, //@ts-ignore

                            srcset: x.srcSet, //@ts-ignore

                            caption: x.title,
                          }))}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </Box>
                {/* Row lifestyle */}
                <Col className="px-5 pb-5 space-y-1">
                  <Box variant="grey-with-border">
                    <Input
                      full
                      as="textarea"
                      maxlength="50"
                      rows="4"
                      placeholder="Tap to impress ..."
                      inputClass="text-sm text-gray-600 rounded-md border-none"
                      onChange={(event: { target: { value: any } }) =>
                        setFormattedContent(event.target.value)
                      }
                    />
                    <View className="flex justify-end">
                      <Button
                        label="Send"
                        variant="primary"
                        // onClick={scrollToTop}
                      />
                    </View>
                  </Box>
                  <Text
                    as="p"
                    size="text-sm"
                    alignment="text-right"
                    float="right"
                  >
                    {content.length}/{limit}
                  </Text>
                  <Button
                    label={"Report or block " + db[currentIndex].fname}
                    icon={
                      <View className="w-5 absolute left-14">
                        <FlagIcon />
                      </View>
                    }
                    variant="blue"
                    onClick={() => setOpenReportPopup(true)}
                  />
                </Col>
              </View>
            </Col>
          )}
        </View>
      </View>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: "main",
      ...(await serverSideTranslations(locale, ["common", "swipe"])),
      // Will be passed to the page component as props
    },
  };
}

export default withAuthUser(SwipePage);
