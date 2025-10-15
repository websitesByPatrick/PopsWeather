import "@/global.css";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherContextProvider from "@/components/ContextProviders/WeatherContextProvider";
import Logo from "@/components/Logo";
import CityState from "@/components/CityState";
import Temperature from "@/components/Temperature";
import Forecast from "@/components/Forecast";

const index = () => {
  return (
    <View className="bg-slate-900 flex-1 p-5 gap-2">
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WeatherContextProvider>
            <View className="pb-10">
              <Logo />
            </View>
            <View className="pb-10">
              <View className="flex-1 flex-row bg-slate-800 rounded-2xl items-center justify-center">
                <CityState />
                <Temperature />
              </View>
            </View>

            <View className="flex-1 flex-row  bg-slate-800 rounded-2xl items-center py-5">
              <Forecast />
            </View>
          </WeatherContextProvider>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default index;
