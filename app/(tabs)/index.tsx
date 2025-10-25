import "@/global.css";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherContextProvider from "@/components/ContextProviders/WeatherContextProvider";
import Logo from "@/components/Logo";
import CityState from "@/components/CityState";
import Temperature from "@/components/Temperature";
import Forecast from "@/components/Forecast";
import Hourly from "@/components/Hourly";
import { useState } from "react";



const Index = () => {
  const [searchCity, setSearchCity] = useState<string>("77389")
  return (

      <SafeAreaView className="flex-1 bg-slate-800">
        <ScrollView showsVerticalScrollIndicator={false}>
          <WeatherContextProvider searchCity={searchCity}>
            <View className="flex-1">
              <Logo />
            </View>

            <View className="flex-1">
              <CityState />
            </View>

            <View className="flex-1">
              <Temperature />
            </View>

            <View className="flex-1">
              <Forecast />
            </View>

              <View className="flex-1">
                  <Hourly />
              </View>

          </WeatherContextProvider>
        </ScrollView>
      </SafeAreaView>

  );
};
export default Index;
