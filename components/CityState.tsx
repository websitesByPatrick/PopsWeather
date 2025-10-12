import { colors } from "@/library/styles";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { WeatherContext } from "@/components/ContextProviders/WeatherContextProvider";

const CityState = () => {
    const data = useContext(WeatherContext)

  return (
    <View style={styles.container}>
      <Text className="text">{data?.city}</Text>

    </View>
  );
};

export default CityState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  city: {
    fontFamily: "Roboto_700Bold",
    fontSize: 50,
    fontWeight: "bold",
    color: colors.light,
    textShadowColor: colors.dark,
    textShadowOffset: { width: 1, height: 1 },
  },
  state: {
    fontFamily: "Roboto_400Regular",
    fontSize: 30,
    fontWeight: "bold",
    color: colors.light,
    textShadowColor: colors.dark,
    textShadowOffset: { width: 1, height: 1 },
  }
});
