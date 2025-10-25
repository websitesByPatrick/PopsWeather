// @ts-ignore
import {Text, ScrollView} from "react-native";
import {useContext} from "react";
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";

const Hourly = () => {
    const data = useContext(WeatherContext);

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text>

            </Text>

        </ScrollView>

    )
}
export default Hourly;