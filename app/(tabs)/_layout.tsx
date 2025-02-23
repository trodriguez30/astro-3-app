import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#1E2156",
          borderTopWidth: 1,
          borderTopColor: "#2F365F", 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 40, height: 50,  justifyContent: "flex-end",
              alignItems: "center", marginTop: 10}}>
            <FontAwesome
              name="home"
              size={40}
              color={focused ? "#FFD700" : "#7A84C1"}
            />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 40, height: 40,  justifyContent: "flex-end",
              alignItems: "center", marginTop: 10}}>
            <FontAwesome
              name="heart"
              size={35}
              color={focused ? "#FFD700" : "#7A84C1"}
            />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
