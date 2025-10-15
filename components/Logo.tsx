import { Text, View } from "react-native";

const Logo = () => {

 return (
     <View className="justify-center items-center flex-0 flex-row">
         <Text className="text-2xl bg-orange-500 pl-5 pr-2.5 py-2 rounded-l-2xl">POPS</Text>
         <Text className="text-2xl bg-gray-100 pr-5  pl-2.5 py-2 rounded-r-2xl">WEATHER</Text>
     </View>

 )
}

export default Logo;