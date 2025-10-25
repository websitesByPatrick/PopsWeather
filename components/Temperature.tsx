import { Text, View } from "react-native";
import { useContext } from "react";
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";
import Icon from "@react-native-vector-icons/fontawesome";
const Temperature = () => {
  const data = useContext(WeatherContext);
  {
    return (
      <View className="flex-1 flex-row items-center justify-around pt-5">
        <View className="flex-1 flex-row items-center justify-center">
          <Icon name={"caret-down"} size={30} color="white" />
          <Text className="text-2xl text-slate-50 pl-1">
            {data
              ? Math.round(data.dailyForecast[0].day.mintemp_f).toString()
              : ""}{'\u00B0'}
          </Text>
        </View>

        <View className="flex-1 flex-row items-center justify-center">
          <Text className="text-6xl text-slate-50 font-bold">
            {data ? Math.round(data.temperature).toString()  : ""}{'\u00B0'}
          </Text>
        </View>

        <View className="flex-1 flex-row items-center justify-center">
          <Icon name={"caret-up"} size={30} color="white" />
          <Text className="text-2xl text-slate-50 pl-1">
            {data
              ? Math.round(data.dailyForecast[0].day.maxtemp_f).toString()
              : ""}{'\u00B0'}
          </Text>
        </View>
      </View>
    );
  }
};

export default Temperature;
