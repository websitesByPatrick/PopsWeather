import { View, Text } from "react-native";

import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";
import { useContext } from "react";
import ConditionsBox from "@/components/ConditionsBox";

const Forecast = () => {
  const data = useContext(WeatherContext);
  return (
    <View className="flex-1 px-5">
      <View className="flex-1 flex-col items-center justify-center bg-black/10 rounded-2xl border border-gray-950 p-2">
        <Text className="text-center text-2xl text-slate-700 font-bold">
          {/*{data?.sky}*/}
        </Text>

        <View className="flex-1 flex-row items-center justify-center">
          <View className="flex-1 justify-center items-center gap-2 w-1/2">
            <ConditionsBox title={"LOW"} data={data ? data.dailyForecast[0].day.mintemp_f + "℉" : " "} />
            {/*<ConditionsBox title={"SUNRISE"} data={data?.sunriseDay0} />*/}
          </View>
          <View className="flex-1 justify-center items-center gap-2 w-1/2">
            <ConditionsBox title={"HIGH"} data={data ? data.dailyForecast[0].day.maxtemp_f + "℉" : " "} />
            {/*<ConditionsBox title={"SUNSET"} data={data?.sunsetDay0} />*/}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Forecast;
