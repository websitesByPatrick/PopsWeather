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


        <View className="px-2 flex-1 justify-around w-full h-20 py-2">
            <View className="bg-black/10 py-2">
                <Text className="text-gray-950 text-center font-bold">{title}</Text>
                <Text className="text-gray-50 text-center text-2xl">{data}</Text>
            </View>

        </View>


  );
};
export default ConditionsBox;
