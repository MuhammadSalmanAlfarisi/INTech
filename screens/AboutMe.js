//Dependencies
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Components
import About from "../components/About";

const Tab = createMaterialTopTabNavigator();

const AboutMe = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <About />
    </View>
  );
};

export default AboutMe;
