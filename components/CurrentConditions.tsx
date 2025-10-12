import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/library/styles";
import ConditionsBox from "@/components/ConditionsBox";
interface CurrentConditionsProps {
  feelsLikeTemp: number;
  condition: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  dewPoint: number;
  visibility: number;
  uvIndex: number;
}

const CurrentConditions = ({ uvIndex, dewPoint, visibility, feelsLikeTemp, condition, humidity, pressure, windSpeed,windDirection, precipitation }: CurrentConditionsProps) => {
  return (
    <View style={styles.container}>

      <Text style={styles.condition}>{condition}</Text>

      <View style={styles.bar}>
        <View style={styles.barSide}>
            <ConditionsBox title="Humidity" data={humidity.toString() + "%"} />
            <ConditionsBox title={"Wind " + windDirection} data={Math.round(windSpeed).toString() + " MPH"} />
            <ConditionsBox title={"Feels Like"} data={Math.round(feelsLikeTemp).toString() + "℉"} />
            <ConditionsBox title="Visibility" data={visibility.toString() + " miles"} />
        </View>
        <View style={styles.barSide}>
            <ConditionsBox title="Pressure" data={pressure.toString() + " inHg"} />
            <ConditionsBox title="Precipitation" data={precipitation.toString() + " in"} />
            <ConditionsBox title="Dew Point" data={Math.round(dewPoint).toString() + "℉"} />
            <ConditionsBox title="UV Index" data={uvIndex.toString() + ""} />
        </View>

      </View>
    </View>
  );
};

export default CurrentConditions;

const styles = StyleSheet.create({
  container: {

      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: colors.background,
      padding: 10,
    borderRadius: 20

  },
    condition: {
      fontSize: 35,
        textTransform: "capitalize",
        color: colors.light,


    },

  bar: {
flexDirection: "row",
  },
barSide: {
    width: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical:20
    }
});
