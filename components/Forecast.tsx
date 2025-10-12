import {Text, View, StyleSheet } from "react-native";
import { colors } from "@/library/styles"
interface ForecastProps {
    sunrise: string;
    sunset: string;
    high: number;
    low: number;
    rain: number;
    rainChance: number;
    sky: string;
    skyCode: number;
}

const Forecast = ({sunrise, sunset, high, low, rain, rainChance, sky, skyCode}: ForecastProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Sunrise</Text>
                <Text style={styles.data}>{sunrise}</Text>
                <Text style={styles.title }>Sunset</Text>
                <Text style={styles.data}>{sunset}</Text>
                <Text style={styles.title }>Chance of Rain</Text>
                <Text style={styles.data}>{rainChance}</Text>
            </View>
            <View>
                <Text style={styles.title}>Low</Text>
                <Text style={styles.data}>{low}</Text>
                <Text style={styles.title }>High</Text>
                <Text style={styles.data}>{high}</Text>
                <Text style={styles.title }>Sky</Text>
                <Text style={styles.data}>{sky}</Text>
            </View>

        </View>

    )
}

export default Forecast

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    data: {
        color: colors.light,
        fontSize: 20,
    },
    title: {
        color: colors.light,
        fontSize: 30,

    }
})