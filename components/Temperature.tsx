import {Text, StyleSheet} from "react-native";
import {colors} from "@/library/styles"

const Temperature = ({temp}: { temp: number }) => {
    return (
        <Text style={styles.text}>
            {Math.round(temp)}℉
        </Text>
    )
}
export default Temperature;

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto_400Regular",
        fontSize: 120,
        color: colors.light,
        textShadowColor: colors.dark,
        textShadowOffset: {width: 1, height: 1},

    }
})