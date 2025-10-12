import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#cce9f2ff", tabBarStyle:{backgroundColor: "#203049ff"} }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontSize: 25, fontWeight: 500 },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
