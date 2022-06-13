import { View, Text } from "components";
import { FC } from "react";
import { AnswerMatchProps } from "components/types";
export const AnswerMatch: FC<AnswerMatchProps> = ({ activityItem }) => {
  return (
    <View>
      <ul role="list" className="divide-y divide-gray-200">
        <li key={activityItem.id} className="py-4">
          <View className="flex-1 space-y-1">
            <View className="flex items-center justify-between">
              <h3 className="text-md font-bold text-gray-500">
                {activityItem.question}
              </h3>
              <p className="text-md text-gray-500">{activityItem.id}/20</p>
            </View>
            <View className="flex items-center justify-center bg-white shadow p-4 rounded-md">
              <Text textClass="text-base font-bold text-transparent bg-clip-text bg-gradient-to-br from-c2 to-c4">
                {activityItem.answer}
              </Text>
            </View>
          </View>
        </li>
      </ul>
    </View>
  );
};
