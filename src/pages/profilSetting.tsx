import React, { useCallback, useState } from "react";
import {
  Avatar,
  Col,
  View,
  Text,
  Accordion,
  SwitchInput,
  Button,
  Input,
  RangeSlider,
  MultiRangeSlider,
  AutoCompleteSearch,
  Row,
  Popup,
  Header,
  RadioGroupB,
} from "components";
// import { useTranslation } from "hooks/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  MyProfile,
  MyMatch,
  Support,
  CameraIcon,
  FacebookLightIcon,
  PictureIcon,
} from "components/icons";
import Image from "next/image";
import { NextPage } from "next";
import { withAuthUser } from "utils/auth";
import { useAuthUser } from "next-firebase-auth";
import { ExternalLinkIcon, CreditCardIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const ProfilSettingPage: NextPage = () => {
  // const { t } = useTranslation("common");

  const qualitiesArray = [
    { index: 1, quality: "Careful" },
    { index: 2, quality: "Spontaneous" },
    { index: 3, quality: "Romantic" },
    { index: 4, quality: "Generous" },
    { index: 5, quality: "Honest" },
    { index: 6, quality: "Communicating" },
    { index: 7, quality: "Lots of humour" },
    { index: 8, quality: "Easy going" },
    { index: 9, quality: "Love kids" },
    { index: 10, quality: "Optimist" },
    { index: 11, quality: "Responsable" },
    { index: 12, quality: "Independent" },
    { index: 13, quality: "Reconnaître l'erreur" },
    { index: 14, quality: "Grateful" },
    { index: 15, quality: "Shy" },
    { index: 16, quality: "Conciliatory" },
    { index: 17, quality: "Loyal" },
    { index: 18, quality: "Cheerful" },
    { index: 19, quality: "Open minded" },
    { index: 20, quality: "Emotionally mature" },
    { index: 21, quality: "Respectful" },
    { index: 22, quality: "Sensitive" },
    { index: 23, quality: "Courteous" },
    { index: 24, quality: "Resourceful" },
  ];
  const intersestsArray = [
    { index: 1, interset: "Reading" },
    { index: 2, interset: "Sewing" },
    { index: 3, interset: "Singing" },
    { index: 4, interset: "Hangingout" },
    { index: 5, interset: "Sleeping" },
    { index: 6, interset: "Writing" },
    { index: 7, interset: "Food" },
    { index: 8, interset: "Movies" },
    { index: 9, interset: "Traveling" },
    { index: 10, interset: "Cooking" },
    { index: 11, interset: "Pets" },
    { index: 12, interset: "Sport" },
    { index: 13, interset: "Art & Crafts" },
    { index: 14, interset: "Dancing" },
    { index: 15, interset: "Shopping" },
    { index: 16, interset: "Yoga & Méditation" },
    { index: 17, interset: "VideoGames" },
    { index: 18, interset: "Photography" },
    { index: 19, interset: "Cars" },
    { index: 20, interset: "Hunting" },
    { index: 21, interset: "Music" },
  ];

  const profession = [
    { index: 1, profession: "Employee" },
    { index: 2, profession: "Contractor" },
    { index: 3, profession: "Multi-talented" },
    { index: 4, profession: "Farmer" },
    { index: 5, profession: "Executive" },
    { index: 6, profession: "Retired" },
    { index: 7, profession: "Unemployed" },
    { index: 8, profession: "Artisan" },
    { index: 9, profession: "Student" },
    { index: 10, profession: "Liberal profession" },
    { index: 11, profession: "Artist" },
    { index: 12, profession: "Startuper" },
  ];

  const educationLevel = [
    { index: 1, educationLevel: "Graduated" },
    { index: 2, educationLevel: "Baccalaureate" },
    { index: 3, educationLevel: "Self-learning" },
    { index: 4, educationLevel: "School of Life" },
  ];

  const RevealPicture = [
    {
      name: "Yes, always",
    },
    {
      name: "When I like someone's profile",
    },
    {
      name: "When I match with someone",
    },
  ];

  /* */
  const [qDataChecked, setQDataChecked] = useState(0);
  const [q2DataChecked, setQ2DataChecked] = useState(0);
  const [iDataChecked, setIQDataChecked] = useState(0);
  const selectData = (
    event: {
      currentTarget: { checked: boolean };
      preventDefault: () => void;
    },
    checked: number,
    element: number
  ) => {
    let isSelected = event.currentTarget.checked;
    if (isSelected) {
      if (checked < 5) {
        switch (element) {
          case 0: {
            setQDataChecked(qDataChecked + 1);
            break;
          }
          case 1: {
            setQ2DataChecked(q2DataChecked + 1);
            break;
          }
          case 2: {
            setIQDataChecked(iDataChecked + 1);
            break;
          }
        }
      } else {
        event.preventDefault();
        event.currentTarget.checked = false;
      }
    } else {
      switch (element) {
        case 0: {
          setQDataChecked(qDataChecked - 1);
          break;
        }
        case 1: {
          setQ2DataChecked(q2DataChecked - 1);
          break;
        }
        case 2: {
          setIQDataChecked(iDataChecked - 1);
          break;
        }
      }
    }
  };

  /* */
  const [keyOfOpenDisclosure, setKeyOfOpenDisclosure] = useState("");

  const toggleDisclosure = (key: string) => {
    setKeyOfOpenDisclosure((prev) => (prev !== key ? key : ""));
  };

  /* */
  let [isOpen, setIsOpen] = useState(false);

  /*character limitation */
  let limit = 50;
  const [content, setContent] = useState("");

  const setFormattedContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );
  const AuthUser = useAuthUser();

  const router = useRouter();
  const answerRoute = () => {
    router.push("/matchTest/answer");
  };
  return (
    <Col className="bg-white">
      {/*Background image*/}
      <Image
        src="/images/bg/bg-profil.webp"
        className="bg_steps"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Header variant="default" backLink />
      <Popup show={isOpen} onClose={() => setIsOpen(false)}>
        <Col className="self-center space-y-2">
          <Button
            icon={<CameraIcon iconPosition="left-5" />}
            label="Take a picture"
            variant="primary"
            width="w-64"
            alignSelf="self-center"
          />
          <Button
            icon={<PictureIcon iconPosition="left-5" />}
            label="Upload from gallery"
            variant="primary"
            width="w-64"
            alignSelf="self-center"
          />
          <Button
            icon={<FacebookLightIcon iconPosition="left-5" />}
            label="Upload from Facebook"
            variant="primary"
            width="w-64"
            alignSelf="self-center"
          />
        </Col>
      </Popup>
      <Col className="relative px-6 overflow-hidden">
        <View className="self-center mt-6">
          <Avatar
            height="h-28"
            width="w-28"
            edit
            image={AuthUser.photoURL}
            // onLoadingComplete={() => {}}
            rounded="rounded-full"
            blured={false}
            // src={""}
            onClick={() => setIsOpen(true)}
          />
        </View>

        <View className="my-5 space-y-2 text-c3">
          <Row className="space-x-1 items-center">
            <MyProfile />
            <Text
              alignment="text-left"
              as="h3"
              fontWeight="font-medium"
              size="text-md"
              float="left"
            >
              My profile
            </Text>
          </Row>
          <Col>
            <Accordion
              closed
              element={<Text as="span">Jane Martha</Text>}
              title="Username"
            />
            <Accordion
              closed
              element={<SwitchInput defaultvalue={true} disabled />}
              title="Verify your profile"
            />
            <Accordion
              element={
                <SwitchInput
                  defaultvalue={false}
                  // onClick={setGender}
                />
              }
              closed
              title="Reveal picture"
              onClick={() => toggleDisclosure("2")}
              show={"2" === keyOfOpenDisclosure}
            >
              <Text
                as="span"
                color="text-black"
                fontWeight="font-light"
                size="text-sm"
              >
                Do you want to reveal your picture ?
              </Text>
              <Col className="pt-2 space-y-2 items-center">
                {/* <Button
                  label="Yes, always"
                  variant="Tertiary"
                  width="w-64"
                  textSize="text-sm"
                />
                <Button
                  label="When I like someone's profile"
                  variant="primary"
                  textSize="text-sm"
                  width="w-64"
                />
                <Button
                  label="When I match with someone"
                  variant="primary"
                  width="w-64"
                  textSize="text-sm"
                /> */}
                <RadioGroupB dataProps={RevealPicture} selectedProps={0} />
              </Col>
            </Accordion>
            <Accordion
              title="BIO"
              onClick={() => toggleDisclosure("1")}
              show={"1" === keyOfOpenDisclosure}
            >
              <Input
                full
                as="textarea"
                maxlength="50"
                rows="4"
                placeholder="Write small description about you ..."
                inputClass="text-sm text-gray-600 rounded-md border-none focus:outline-none "
                onChange={(event: { target: { value: any } }) =>
                  setFormattedContent(event.target.value)
                }
              />
              <Text as="p" size="text-sm" alignment="text-right" float="right">
                {content.length}/{limit}
              </Text>
              <View className="flex justify-end">
                <Button label="Save" variant="primary" />
              </View>
            </Accordion>
            <Accordion
              title="Location"
              onClick={() => toggleDisclosure("7")}
              show={"7" === keyOfOpenDisclosure}
            ></Accordion>
            <Accordion
              title="Country of Origin"
              onClick={() => toggleDisclosure("23")}
              show={"23" === keyOfOpenDisclosure}
            >
              <AutoCompleteSearch />
            </Accordion>
            <Accordion
              title="Match Test"
              onClick={() => toggleDisclosure("21")}
              show={"21" === keyOfOpenDisclosure}
            >
              <Col className="space-y-2 items-center">
                <Button
                  onClick={answerRoute}
                  label="Match test"
                  variant="primary"
                  width="w-64"
                  textSize="text-sm"
                  icon={
                    <ExternalLinkIcon className="h-4 w-4 absolute right-4" />
                  }
                />
                <Button
                  label="Habits test"
                  variant="primary"
                  textSize="text-sm"
                  width="w-64"
                  icon={
                    <ExternalLinkIcon className="h-4 w-4 absolute right-4" />
                  }
                />
                <Button
                  label="Fun test"
                  variant="primary"
                  width="w-64"
                  textSize="text-sm"
                  icon={
                    <ExternalLinkIcon className="h-4 w-4 absolute right-4" />
                  }
                />
              </Col>
            </Accordion>
            <Accordion
              title={"Qualities (" + qDataChecked + "/5)"}
              onClick={() => toggleDisclosure("3")}
              show={"3" === keyOfOpenDisclosure}
            >
              {qualitiesArray.map((item) => (
                <Input
                  key={item.index}
                  id={"q" + item.index}
                  onChange={(e: {
                    currentTarget: { checked: boolean };
                    preventDefault: () => void;
                  }) => selectData(e, qDataChecked, 0)}
                  type="checkbox"
                  label={item.quality}
                  inputClass="border-gray-300"
                />
              ))}
              <View className="flex justify-end">
                <Button label="Save" variant="primary" />
              </View>
            </Accordion>
            <Accordion
              title={"Interests (" + q2DataChecked + "/5)"}
              onClick={() => toggleDisclosure("4")}
              show={"4" === keyOfOpenDisclosure}
            >
              {intersestsArray.map((item) => (
                <Input
                  key={item.index}
                  id={"i" + item.index}
                  onChange={(e: {
                    currentTarget: { checked: boolean };
                    preventDefault: () => void;
                  }) => selectData(e, q2DataChecked, 1)}
                  type="checkbox"
                  label={item.interset}
                  inputClass="border-gray-300"
                />
              ))}
              <View className="flex justify-end">
                <Button label="Save" variant="primary" />
              </View>
            </Accordion>
            <Accordion
              title="Profession"
              onClick={() => toggleDisclosure("22")}
              show={"22" === keyOfOpenDisclosure}
            >
              {profession.map((item) => (
                <Input
                  key={item.index}
                  name="profession"
                  type="radio"
                  label={item.profession}
                  inputClass="border-gray-300"
                />
              ))}
              <View className="flex justify-end">
                <Button label="Save" variant="primary" />
              </View>
            </Accordion>
            <Accordion
              title="Level of education"
              onClick={() => toggleDisclosure("5")}
              show={"5" === keyOfOpenDisclosure}
            >
              {educationLevel.map((item) => (
                <Input
                  key={item.index}
                  type="radio"
                  name="education"
                  label={item.educationLevel}
                  inputClass="border-gray-300"
                />
              ))}
              <View className="flex justify-end">
                <Button label="Save" variant="primary" />
              </View>
            </Accordion>
            <Accordion
              title="Height"
              onClick={() => toggleDisclosure("6")}
              show={"6" === keyOfOpenDisclosure}
            >
              <View className="flex justify-end ">
                <Text alignment="text-right" color="text-c4" size="text-sm">
                  90 - 220cm
                </Text>
              </View>
              <RangeSlider
                onChange={({ min, max }: { min: number; max: number }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
                min={90}
                max={220}
              />
            </Accordion>

            <Accordion
              element={
                <SwitchInput
                  defaultvalue={false}
                  // onClick={setGender}
                />
              }
              closed
              title="Willing to relocate"
            ></Accordion>
          </Col>
        </View>

        <View className="mb-5 space-y-2 text-c3">
          <Row className="space-x-1 items-center">
            <MyMatch />
            <Text
              alignment="text-left"
              as="span"
              fontWeight="font-medium"
              size="text-md"
              float="left"
            >
              My macth
            </Text>
          </Row>
          <Col>
            <Accordion
              title="Country / City"
              onClick={() => toggleDisclosure("10")}
              show={"10" === keyOfOpenDisclosure}
            >
              <AutoCompleteSearch />
            </Accordion>
            <Accordion
              title="Age"
              onClick={() => toggleDisclosure("11")}
              show={"11" === keyOfOpenDisclosure}
            >
              <View className="flex justify-end ">
                <Text alignment="text-right" color="text-c4" size="text-sm">
                  18 - 60 years
                </Text>
              </View>
              <MultiRangeSlider
                onChange={({ min, max }: { min: number; max: number }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
                min={18}
                max={60}
              />
            </Accordion>
            <Accordion
              title="Height"
              onClick={() => toggleDisclosure("12")}
              show={"12" === keyOfOpenDisclosure}
            >
              <View className="flex justify-end ">
                <Text alignment="text-right" color="text-c4" size="text-sm">
                  90 - 220cm
                </Text>
              </View>
              <MultiRangeSlider
                onChange={({ min, max }: { min: number; max: number }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
                min={90}
                max={220}
              />
            </Accordion>
            <Accordion
              title={"Qualities (" + iDataChecked + "/5)"}
              onClick={() => toggleDisclosure("13")}
              show={"13" === keyOfOpenDisclosure}
            >
              {qualitiesArray.map((item) => (
                <Input
                  key={item.index}
                  id={"q2" + item.index}
                  onChange={(e: {
                    currentTarget: { checked: boolean };
                    preventDefault: () => void;
                  }) => selectData(e, iDataChecked, 2)}
                  type="checkbox"
                  label={item.quality}
                  inputClass="border-gray-300"
                />
              ))}
              <View className="flex justify-end">
                <Button label="Save" variant="primary" />
              </View>
            </Accordion>
            <Accordion
              title="Level of education"
              onClick={() => toggleDisclosure("14")}
              show={"14" === keyOfOpenDisclosure}
            >
              {educationLevel.map((item) => (
                <Input
                  key={item.index}
                  type="radio"
                  name="education-match"
                  label={item.educationLevel}
                  inputClass="border-gray-300"
                />
              ))}
              <View className="flex justify-end">
                <Button label="Save" variant="primary" />
              </View>
            </Accordion>
            <Accordion
              closed
              element={<SwitchInput />}
              title="Only Verified Profiles"
            />
            <Accordion
              closed
              element={<SwitchInput />}
              title="Only revealed picture"
            />
          </Col>
        </View>
        <View className="mb-5 space-y-2 text-c3">
          <Row className="space-x-1 items-center">
            <Support />
            <Text
              alignment="text-left"
              as="span"
              fontWeight="font-medium"
              size="text-md"
              float="left"
            >
              Support
            </Text>
          </Row>
          <Col>
            <Accordion
              title="About Boowme"
              onClick={() => toggleDisclosure("9")}
              show={"9" === keyOfOpenDisclosure}
            >
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Accordion>
            <Accordion
              title="FAQ"
              onClick={() => toggleDisclosure("15")}
              show={"15" === keyOfOpenDisclosure}
            >
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Accordion>
            <Accordion
              title="Contact"
              onClick={() => toggleDisclosure("16")}
              show={"16" === keyOfOpenDisclosure}
            >
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Accordion>
          </Col>
        </View>
        <View className="mb-5 space-y-2 text-c3">
          <Row className="space-x-1 items-center">
            <InformationCircleIcon className="w-6 h-6" />
            <Text
              alignment="text-left"
              as="span"
              fontWeight="font-medium"
              size="text-md"
              float="left"
            >
              Account
            </Text>
          </Row>
          <Col>
            <Accordion
              closed
              element={<Text as="span">+212 631 721 917</Text>}
              title="Phone number"
            />
            <Accordion
              closed
              element={<SwitchInput />}
              title="Mute notifications"
            />
            <Accordion
              title="App language"
              onClick={() => toggleDisclosure("8")}
              show={"8" === keyOfOpenDisclosure}
            >
              <Col className="pt-2 space-y-2 items-center">
                <Button
                  label="Arabic"
                  variant="primary"
                  width="w-64"
                  textSize="text-sm"
                />
                <Button
                  label="English"
                  variant="primary"
                  textSize="text-sm"
                  width="w-64"
                />
                <Button
                  label="French"
                  variant="primary"
                  width="w-64"
                  textSize="text-sm"
                />
              </Col>
            </Accordion>

            <Accordion
              title="Terms of service"
              onClick={() => toggleDisclosure("18")}
              show={"18" === keyOfOpenDisclosure}
            >
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Accordion>
            <Accordion
              title="Publicity"
              onClick={() => toggleDisclosure("19")}
              show={"19" === keyOfOpenDisclosure}
            >
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Accordion>
            <Accordion
              title="Confidentialities"
              onClick={() => toggleDisclosure("20")}
              show={"20" === keyOfOpenDisclosure}
            >
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Accordion>
            <Accordion
              closed
              element={<SwitchInput />}
              title="Disable account"
            />
            <Accordion
              onClick={() => toggleDisclosure("24")}
              show={"24" === keyOfOpenDisclosure}
              title="Delete account"
            >
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Accordion>
          </Col>
        </View>
        <View className="mb-5 space-y-2 text-c3">
          <Row className="space-x-1">
            <CreditCardIcon className="h-6 w-6" />
            <Text
              alignment="text-left"
              as="span"
              fontWeight="font-medium"
              size="text-md"
              float="left"
            >
              Payment
            </Text>
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
export default withAuthUser(ProfilSettingPage);
