import { Text, View } from "react-native";

const Logo = () => {

 return (
     <View className="flex-1 justify-center items-center">
         <View className="justify-center items-center flex-1 flex-row rounded-2xl border-white w-9/12 bg-white p-1">
             <Text className="text-2xl bg-orange-500 pl-5 pr-2.5 py-2 rounded-l-2xl w-1/3">POPS</Text>
             <Text className="text-2xl text-center bg-slate-800  text-slate-50 pr-5  pl-2.5 py-2 w-2/3 rounded-r-2xl">WEATHER</Text>
         </View>
     </View>


 )
}

export default Logo;