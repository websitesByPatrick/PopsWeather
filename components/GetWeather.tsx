import {View, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import CityState from "./CityState";
import CurrentConditions from "./CurrentConditions";
import {colors} from "@/library/styles";
import Temperature from "@/components/Temperature";
import Forecast from "@/components/Forecast";

import Context from "@/components/context";

interface dataProps {
    data: any;
}

const GetWeather = ({data}: dataProps) => {
    return (
        <SafeAreaView>


            {/*<View style={styles.container}>*/}
            {/*    /!*<CityState city={data.city} state={data.state}/>*!/*/}
            {/*    <Temperature temp={data.temperature}/>*/}
            {/*    <Forecast sunrise={data.sunriseDay0}*/}
            {/*              sunset={data.sunsetDay0}*/}
            {/*              high={data.highTempDay0}*/}
            {/*              low={data.lowTempDay0}*/}
            {/*            rain={data.rainDay0}*/}
            {/*            rainChance={data.rainChanceDay0}*/}
            {/*            sky={data.skyDay0}*/}
            {/*              skyCode={data.skyCodeDay0}*/}

            {/*              />*/}
            {/*    <CurrentConditions*/}
            {/*        condition={data.sky}*/}
            {/*        humidity={data.humidity}*/}
            {/*        pressure={data.pressure}*/}
            {/*        windSpeed={data.windSpeed}*/}
            {/*        windDirection={data.windDirection}*/}
            {/*        precipitation={data.precipitation}*/}
            {/*        feelsLikeTemp={data.feelsLikeTemp}*/}
            {/*        dewPoint={data.dewPoint}*/}
            {/*        visibility={data.visibility}*/}
            {/*        uvIndex={data.uvIndex}*/}
            {/*    />*/}
            {/*</View>*/}
        </SafeAreaView>
    );
};

export default GetWeather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        padding: 10,
        borderRadius: 50,
    },
})