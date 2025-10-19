import { Text, View } from "react-native";
import { useContext } from "react";
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";

const Temperature = () => {
  const data = useContext(WeatherContext); {
    return (
        <View className="flex-1 flex-row items-center justify-center">
            <Text className="text-8xl text-slate-50" >{data?.temperature}</Text>
        </View>

    )

  }
}

export default Temperature;
