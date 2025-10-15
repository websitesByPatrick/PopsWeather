import { Text, View } from "react-native";
import { useContext } from "react";
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";

const CityState = () => {
  const data = useContext(WeatherContext);

  return (
    <View className="flex-1 flex-col content-around">
      <Text className="text-3xl text-slate-400 ">{data?.city}</Text>
      <Text className="text-2xl text-slate-400">{data?.state}</Text>
    </View>
  );
};

export default CityState;
