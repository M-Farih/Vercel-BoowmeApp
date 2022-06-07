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
import { useCallback, useState } from "react";
import {
  BirthdayIcon,
  EducationIcon,
  HeightIcon,
  LocationIcon,
  MetierIcon,
  ParameterIcon,
  InfoIcon,
  EditIcon,
} from "components/icons";
import { TagContainer } from "components/TagContainer";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import Scroll from "react-scroll";
import React from "react";
import { MultiSelect } from "components/MultiSelect";
import { RadioSelect } from "components/RadioSelect";

const MyProfile: NextPage = () => {
  // const { t } = useTranslation(["swipe", "common"]);
  const [open, setOpen] = useState(false);
  let [openMetierPopup, setOpenMetierPopup] = useState(false);
  let [openBioPopup, setOpenBioPopup] = useState(false);
  let [openQualitiesPopup, setOpenQualitiesPopup] = useState(false);
  let [openPassionsPopup, setOpenPassionsPopup] = useState(false);
  let [openPicturesPopup, setOpenPicturesPopup] = useState(false);

  // const scroll = Scroll.animateScroll;

  const photos = [
    // {
    //   id: 1,
    //   src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    //   width: 1,
    //   height: 1
    // },
    {
      id: 1,
      src: "images/add-pic.webp",
      width: 3,
      height: 3,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      width: 3,
      height: 4,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
      width: 4,
      height: 3,
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      width: 3,
      height: 4,
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      width: 3,
      height: 4,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const scrollToProfileDetails = () => {
    // scroll.scrollTo(window.innerHeight, {
    //   duration: 500,
    //   delay: 30,
    //   smooth: "easeInOutCubic",
    // });
  };

  const AuthUser = useAuthUser();

  const profileDetails = {
    fname: "Samir",
    lname: "Alami",
    url: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    city: "safi",
    country: "morocco",
    height: "1m81",
    age: "29ans",
  };

  const qualitiesOption = [
    {
      id: "1",
      label: "Emotional",
    },
    {
      id: "2",
      label: "maturity",
    },
    {
      id: "3",
      label: "Openness",
    },
    {
      id: "4",
      label: "Living conscience",
    },
    {
      id: "5",
      label: "Honesty",
    },
    {
      id: "6",
      label: "Respect",
    },
    {
      id: "7",
      label: "Sensitivity",
    },
    {
      id: "8",
      label: "Independence",
    },
    {
      id: "9",
      label: "Sympathy",
    },
    {
      id: "10",
      label: "Cheerful",
    },
    {
      id: "11",
      label: "Similarity",
    },
    {
      id: "12",
      label: "Kindness",
    },
    {
      id: "13",
      label: "Understanding",
    },
    {
      id: "14",
      label: "Loyalty",
    },
  ];
  const passionsOption = [
    {
      id: "1",
      label: "Bowling",
    },
    {
      id: "2",
      label: "Cycling",
    },
    {
      id: "3",
      label: "Golfing",
    },
    {
      id: "4",
      label: "Horse",
    },
    {
      id: "5",
      label: "Riding",
    },
    {
      id: "6",
      label: "Ice",
    },
    {
      id: "7",
      label: "Skating",
    },
    {
      id: "8",
      label: "Kickboxing",
    },
    {
      id: "9",
      label: "Parkour",
    },
    {
      id: "10",
      label: "Paintball",
    },
    {
      id: "11",
      label: "Running",
    },
    {
      id: "12",
      label: "Calligraphy",
    },
    {
      id: "13",
      label: "Coloring",
    },
    {
      id: "14",
      label: "Dancing",
    },
    {
      id: "15",
      label: "Drawing",
    },
  ];
  const educationsOption = [
    {
      id: "1",
      name: "education",
      label: "Bachelor",
    },
    {
      id: "2",
      name: "education",
      label: "Master",
    },
    {
      id: "3",
      name: "education",
      label: "Doctor",
    },
    {
      id: "4",
      name: "education",
      label: "Other",
    },
  ];
  const jobsOption = [
    {
      id: "1",
      name: "job",
      label: "Dentist",
    },
    {
      id: "2",
      name: "job",
      label: "Registered Nurse",
    },
    {
      id: "3",
      name: "job",
      label: "Pharmacist",
    },
    {
      id: "4",
      name: "job",
      label: "Computer Systems Analyst",
    },
    {
      id: "5",
      name: "job",
      label: "Physician",
    },
    {
      id: "6",
      name: "job",
      label: "Database Administrator",
    },
    {
      id: "7",
      name: "job",
      label: "Software Developer",
    },
    {
      id: "8",
      name: "job",
      label: "Physical Therapist",
    },
    {
      id: "9",
      name: "job",
      label: "Web Developer",
    },
    {
      id: "10",
      name: "job",
      label: "Dental Hygienist",
    },
    {
      id: "11",
      name: "job",
      label: "Occupational Therapist",
    },
    {
      id: "12",
      name: "job",
      label: "Veterinarian",
    },
    {
      id: "13",
      name: "job",
      label: "Computer Programmer",
    },
    {
      id: "14",
      name: "job",
      label: "School Psychologist",
    },
    {
      id: "15",
      name: "job",
      label: "Other",
    },
  ];

  return (
    <div>
      {/* sidebar btn */}
      <View className="fixed right-6 top-6 z-20" onClick={() => setOpen(true)}>
        <ParameterIcon />
      </View>

      {/* story img */}
      <View className="fixed left-4 top-6 z-20 p-1 rounded-full">
        <Avatar
          bgBorder
          height="h-20"
          width="w-20"
          image={profileDetails.url}
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

      {/* popup Metier */}
      <Popup
        variant="white"
        show={openMetierPopup}
        title={"About"}
        onClose={() => setOpenMetierPopup(false)}
        children={
          <Col className="space-y-4">
            <Text
              as="span"
              color="text-c2"
              fontWeight="font-medium"
              size="text-md"
            >
              Choose your level of education
            </Text>
            <RadioSelect
              options={educationsOption}
              onChange={(value) => console.log(value)}
            />

            <Text
              as="span"
              color="text-c2"
              fontWeight="font-medium"
              size="text-md"
            >
              Choose your Job
            </Text>
            <RadioSelect
              options={jobsOption}
              onChange={(value) => console.log(value)}
            />

            <Row className="justify-around">
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setOpenMetierPopup(false)}
              />
              <Button
                label="Save"
                variant="primary"
                onClick={() => setOpenMetierPopup(false)}
              />
            </Row>
          </Col>
        }
      />
      {/* popup bio */}
      <Popup
        variant="white"
        show={openBioPopup}
        title={"Bio"}
        onClose={() => setOpenBioPopup(false)}
        children={
          <Col className="space-y-4">
            <Input
              as="textarea"
              inputClass="w-full border-0 h-36"
              name="apropos"
              value={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et diam nonumy eirmod ipsum dolor sit"
              }
            />
            <Row className="justify-around">
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setOpenBioPopup(false)}
              />
              <Button
                label="Save"
                variant="primary"
                onClick={() => setOpenBioPopup(false)}
              />
            </Row>
          </Col>
        }
      />
      {/* popup qualities */}
      <Popup
        variant="white"
        show={openQualitiesPopup}
        title={"Qualities"}
        onClose={() => setOpenQualitiesPopup(false)}
        children={
          <Col className="space-y-4">
            <MultiSelect
              max={5}
              options={qualitiesOption}
              onChange={() => console.log("")}
            />
            <Row className="justify-around">
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setOpenQualitiesPopup(false)}
              />
              <Button
                label="Save"
                variant="primary"
                onClick={() => setOpenQualitiesPopup(false)}
              />
            </Row>
          </Col>
        }
      />
      {/* popup passions */}
      <Popup
        variant="white"
        show={openPassionsPopup}
        title={"Passions"}
        onClose={() => setOpenPassionsPopup(false)}
        children={
          <Col className="space-y-4">
            <MultiSelect
              max={5}
              options={passionsOption}
              onChange={() => {
                console.log("");
              }}
            />
            <Row className="justify-around">
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setOpenPassionsPopup(false)}
              />
              <Button
                label="Save"
                variant="primary"
                onClick={() => setOpenPassionsPopup(false)}
              />
            </Row>
          </Col>
        }
      />

      {/* popup pictures */}
      <Popup
        variant="white"
        show={openPicturesPopup}
        title={"Add picture"}
        onClose={() => setOpenPicturesPopup(false)}
        children={
          <Col className="space-y-4">
            <View className="w-full rounded-2xl border border-blue-700 p-6">
              <Col className="space-y-3">
                <Image
                  src={"/images/upload-pic.webp"}
                  alt="Picture of the author"
                  width={140}
                  height={210}
                  objectFit={"scale-down"}
                />
                <Button
                  label="Browse"
                  variant="blue"
                  onClick={() => setOpenPicturesPopup(false)}
                />
              </Col>
            </View>
            <Row className="justify-around">
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setOpenPicturesPopup(false)}
              />
              <Button
                label="Save"
                variant="primary"
                onClick={() => setOpenPicturesPopup(false)}
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
                {profileDetails.fname}
              </Text>
              <View onClick={scrollToProfileDetails}>
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
                  {profileDetails.city}, {profileDetails.country}
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
                  {profileDetails.height}
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
                  {profileDetails.age}
                </Text>
              </Row>
            </Col>
          </Col>
        </Box>
      </View>

      <View id="wrapper">
        <View className="panels" id="a">
          {/* image */}
          <Image
            src={profileDetails.url}
            alt="Picture of the author"
            width={window.innerWidth}
            height={window.innerHeight}
            objectFit={"cover"}
          />
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
          <Col className="mt-10 mb-20 px-2 space-y-3 center">
            <View className="space-y-3">
              {/* Row user info */}
              <Row className="space-x-5">
                <Avatar
                  height="w-24"
                  width="w-24"
                  edit={true}
                  image={profileDetails.url}
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
                      {profileDetails.fname}
                    </Text>
                    <View
                      className="absolute right-5"
                      onClick={() => setOpenMetierPopup(true)}
                    >
                      <EditIcon />
                    </View>
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
                          color="text-black"
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
                <Row>
                  <Text
                    as="span"
                    textClass="text-[#3C2E59]"
                    fontWeight="font-bold"
                    size="text-lg"
                    textTransform="capitalize"
                  >
                    Bio
                  </Text>
                  <View
                    className="absolute right-5"
                    onClick={() => setOpenBioPopup(true)}
                  >
                    <EditIcon />
                  </View>
                </Row>
                <Text
                  as="span"
                  color="text-black"
                  fontWeight="font-light"
                  size="text-base"
                  textTransform="capitalize"
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

                    <View
                      className="absolute right-5"
                      onClick={() => setOpenQualitiesPopup(true)}
                    >
                      <EditIcon />
                    </View>
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
                    <View
                      className="absolute right-5"
                      onClick={() => setOpenPassionsPopup(true)}
                    >
                      <EditIcon />
                    </View>
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
              <View className="pb-10 mb-10">
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
                  {/* <Gallery photos={photos} onClick={openLightbox} /> */}
                  <Gallery
                    photos={photos}
                    onClick={(e: any) => {
                      e.target.id == 1
                        ? setOpenPicturesPopup(true)
                        : openLightbox(e.target.id - 1);
                    }}
                  />
                  <ModalGateway>
                    {viewerIsOpen ? (
                      <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage}
                          let
                          //@ts-ignore
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
              </View>
            </View>
          </Col>
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

export default withAuthUser(MyProfile);
