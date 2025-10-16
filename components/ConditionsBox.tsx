import { Text, View } from "react-native";

import React from "react";

const ConditionsBox = ({
  title,
  data,

}: {

  title: string;
  data: string | undefined;
}) => {
  return (
    <View className="flex-1 flex-row items-center justify-center bg-orange-700 rounded-lg h-24 w-full">

        <View className="px-5 flex-1 justify-between w-full h-full pt-2 pb-5">
            <Text className="text-gray-950 text-center font-bold">{title}</Text>
            <Text className="text-gray-50 text-center text-2xl">{data}</Text>
        </View>

    </View>
  );
};
export default ConditionsBox;
