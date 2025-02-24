import { FontAwesome } from "@expo/vector-icons";
import { Tabs, usePathname } from "expo-router";
import { View, StyleSheet } from "react-native";
import CustomTitle from "@/components/CustomTitle";
import IconButton from "@/components/IconButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SortProvider } from "@/context/SortProvider";
import { useSort } from "@/hooks/useSort";

function LayoutContent() {
  const { sortAsc, toggleSort } = useSort();
  const insets = useSafeAreaInsets();

  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.includes("favorites"))
      return { primary: "Your", secondary: "Planets" };
    return { primary: "Let's", secondary: "Explore" };
  };

  const title = getTitle();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <View style={styles.header}>
        <CustomTitle
          primaryText={title.primary}
          secondaryText={title.secondary}
          size="large"
        />
        <IconButton
          iconName={sortAsc ? "sort-alpha-desc" : "sort-alpha-asc"}
          onPress={() => toggleSort()}
          size={25}
        />
      </View>
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
          initialParams={{ sortAsc }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
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
          initialParams={{ sortAsc }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
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
    </View>
  );
}

export default function TabsLayout() {
  return (
    <SortProvider>
      <LayoutContent />
    </SortProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F2F",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: "#0B0F2F",
  },
  iconContainer: {
    width: 40,
    height: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
  },
});
