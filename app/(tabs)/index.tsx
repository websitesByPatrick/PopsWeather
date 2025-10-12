import GetWeather from "@/components/GetWeather";
import "@/global.css"
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherContextProvider from "@/components/ContextProviders/WeatherContextProvider";
import CityState from "@/components/CityState";

export default function Index() {


  return (
    <ImageBackground
      style={styles.background}
      source={require("@/assets/images/sunny.jpg")}
      resizeMode="cover"
    >
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <WeatherContextProvider>
              <CityState/>
          </WeatherContextProvider>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
