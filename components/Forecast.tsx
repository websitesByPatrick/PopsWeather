import {Text, View } from "react-native";
import { Sunrise } from 'react-native-feather';
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";
import {useContext} from "react";
import ConditionsBox from "@/components/ConditionsBox";



const Forecast = () => {
    const data = useContext(WeatherContext);
    return (
        <View className="flex-1 flex-row items-center justify-center py-2" >
            <View className="flex-1 justify-center items-center gap-2">
                <ConditionsBox icon={<Sunrise stroke="white" />} title={"SUNRISE"} data={data?.sunriseDay0} />

                <View className="flex-1 justify-center items-center">
                    <Text className="text-3xl text-slate-300">Sunset</Text>
                    <Text className="text-xl text-slate-300">{data?.sunsetDay0}</Text>
                </View>

                <View className="flex-1 justify-center items-center">
                    <Text className="text-3xl text-slate-300">Rain</Text>
                    <Text className="text-xl text-slate-300">{data?.rainChanceDay0}%</Text>
                </View>



            </View>
            <View className="flex-1 justify-center items-center">
                <View className="flex-1 justify-center items-center">
                    <Text className="text-3xl text-slate-300">Low</Text>
                    <Text className="text-xl text-slate-300">{data?.lowTempDay0}</Text>
                </View>

                <View className="flex-1 justify-center items-center">
                    <Text className="text-3xl text-slate-300">High</Text>
                    <Text className="text-xl text-slate-300">{data?.highTempDay0}</Text>
                </View>

                <View className="flex-1 justify-center items-center">

                    <Text className="text-3xl text-slate-300">Sky</Text>
                    <Text className="text-xl text-slate-300">{data?.sky}</Text>
                </View>
                </View>




        </View>

    )
}

export default Forecast
