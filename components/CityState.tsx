import { Text, View } from "react-native";
import { useContext } from "react";
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";

const CityState = () => {
  const data = useContext(WeatherContext);

  return (
    <View className="flex-col content-center items-center pb-2 pt-10 ">
      <Text className="text-5xl text-slate-100 ">{data?.city}</Text>
      <Text className="text-2xl text-slate-100 ">{data?.state}</Text>
    </View>
  );
};

export default CityState;
