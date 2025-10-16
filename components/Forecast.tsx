import { Text, View } from "react-native";

import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";
import { useContext } from "react";
import ConditionsBox from "@/components/ConditionsBox";

const Forecast = () => {
  const data = useContext(WeatherContext);
  return (
    <View className="flex-1 flex-row items-center justify-center w-full">
      <View className="flex-1 justify-center items-center gap-4 w-1/2 pl-5 pr-2">
        <ConditionsBox title={"SUNRISE"} data={data?.sunriseDay0} />
        <ConditionsBox title={"SUNSET"} data={data?.sunsetDay0} />
        <ConditionsBox
          title={"RAIN\nCHANCE"}
          data={data?.rainChanceDay0.toString() + "%"}
        />
      </View>
      <View className="flex-1 justify-center items-center gap-4 w-1/2 pr-5 pl-2">
        <ConditionsBox title={"LOW"} data= {Math.round( data?.lowTempDay0 as number ).toString() + "℉" }/>
        <ConditionsBox title={"HIGH"} data={Math.round( data?.highTempDay0 as number ).toString() + "℉" }/>
        <ConditionsBox title={"SKY"} data={data?.skyDay0} />
      </View>
    </View>
  );
};

export default Forecast;
