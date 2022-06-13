import { Header, Text, View, AnswerMatch } from "components";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "hooks/translate";
import { withAuthUser } from "utils/auth";

const Answer: NextPage = () => {
  const activityItems = [
    {
      id: 1,
      question: "What is your religion ?",
      answer: "Shite Muslim",
      icon: true,
    },
    {
      id: 1,
      question: "What religion should partner belong to ?",
      answer: "Shite Muslim",
      icon: true,
    },
    // More items...
  ];

  return (
    <View className="bg-white">
      <Header variant="flat" setting={true} justify="justify-between p-4" />
      <View className="relative bg-gradient-to-b from-white via-white to-[#DDE3EF] bg-fixed h-fit min-h-screen p-6">
        <Text as="h2" textClass="text-c2" fontWeight="font-bold" size="text-xl">
          Match Test
        </Text>
        {activityItems.map((activityItem) => (
          <AnswerMatch activityItem={activityItem} />
        ))}
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

export default withAuthUser(Answer);
