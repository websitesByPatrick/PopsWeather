import { Tabs } from "expo-router";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#cce9f2ff",
        tabBarStyle: { backgroundColor: "#203049ff" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={"home"} color={focused ? "white" : "gray"} size={30} />
          ),
        }}
      />

      <Tabs.Screen
        name="hourly"
        options={{
            headerShown: false,
            tabBarLabel: "Hourly",
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons name={"clock"} color={focused ? "white" : "gray"} size={30} />
            ),
        }}
      />

      <Tabs.Screen
        name="daily"
        options={{
          headerShown: false,
          tabBarLabel: "Daily",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={"calendar"} color={focused ? "white" : "gray"} size={30} />
          ),
        }}
      />

      <Tabs.Screen
        name="radar"
        options={{
          headerShown: false,
          tabBarLabel: "Radar",
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons name="radar" size={24} color={focused ? "white" : "gray"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
