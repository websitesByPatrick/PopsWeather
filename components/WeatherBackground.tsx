import { ImageBackground } from "react-native";
import { ReactNode } from "react";

const WeatherBackground = ({ children }: { children: ReactNode }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/skyBG.jpg")}
      className="flex-1"
    >
      {children}
    </ImageBackground>
  );
};
export default WeatherBackground;
