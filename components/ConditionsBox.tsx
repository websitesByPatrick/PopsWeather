import { Text, View } from "react-native";

import React, { JSX } from "react";
import { IconType } from "react-icons";
import { JSXElement } from "@babel/types";

const ConditionsBox = ({
  title,
  data,
  icon,
}: {
  icon: JSX.Element;
  title: string;
  data: string | undefined;
}) => {
  return (
    <View className="flex-1 flex-row items-center justify-center bg-orange-500 pl-3 rounded-lg">
      {icon}
        <View className="px-5">
            <Text className="text-gray-50">{title}</Text>
            <Text className="text-gray-50">{data}</Text>
        </View>

    </View>
  );
};
export default ConditionsBox;
