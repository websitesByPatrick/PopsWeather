import {Text, View} from "react-native";
import { useContext } from "react";
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";

const Temperature = () => {
    const data = useContext(WeatherContext)
    return (
    <View className="flex-1 flex-col items-center" >
            <Text className="text-4xl text-slate-400">
                {data?.temperature}℉
            </Text>
    </View>

    )
}
export default Temperature;

