import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./screens/Homescreen";
import Profile from "./screens/Profile";
import SearchScreen from "./screens/SearchScreen";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import AboutMe from "./screens/AboutMe";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#f5f5f5" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#000",
          tabBarActiveTintColor: "#00ADB5",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "white",
            height: 80,
            bottom: 10,
            marginHorizontal: 20,
            borderRadius: 20,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "md-home-sharp" : "md-home-outline";
              size = focused ? 30 : 28;
            } else if (route.name === "Search") {
              iconName = focused ? "search-sharp" : "search-outline";
              size = focused ? 30 : 28;
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
              size = focused ? 30 : 28;
            } else if (route.name === "About") {
              iconName = focused ? "book-sharp" : "book-outline";
              size = focused ? 30 : 28;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInctiveTintColor: "black",
          tabBarActiveTintColor: "#00ADB5",
        })}
      >
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="About" component={AboutMe} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
