//Dependencies
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

const About = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          height: 300,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          width: "70%",
          alignSelf: "center",
          backgroundColor: "#fff",
          overflow: "visible",
          borderRadius: 50,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/Textless_Logo.png")}
            style={{
              borderColor: "#00ADB5",
              borderWidth: 3,
              width: 100,
              height: 100,
              position: "absolute",
              zIndex: 2,
            }}
          />
        </View>
        <View style={{ marginTop: 60 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              color: "#000",
            }}
          >
            About Us
          </Text>
          <View style={{ marginHorizontal: 40 }}>
            <Text
              style={{
                textAlign: "center",
                letterSpacing: 2,
                lineHeight: 20,
                marginTop: 5,
                fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              INTech
              <Text style={{ fontWeight: "normal" }}>
                {" "}
                was made as a final assignmet for a practice test of mobile
                device programming. This application was made using{" "}
              </Text>
              React Native, Expo, Visual Studio Code,
              <Text style={{ fontWeight: "normal" }}> and many else.</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;
