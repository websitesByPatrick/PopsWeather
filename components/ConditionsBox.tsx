import {Text, StyleSheet, View} from "react-native";
import { colors } from "@/library/styles";

const ConditionsBox = ({title, data}: {title:string, data:string}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.data}>{data}</Text>
        </View>

    )
}
export default ConditionsBox

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
        padding: 10,
        marginVertical: 5,
        height: 75,
        width: "90%",
        borderRadius: 15,
    },
    title: {
        fontSize: 25,
        color: colors.light,
    },
    data: {
        fontSize: 22,
        color: colors.light,
    }
})