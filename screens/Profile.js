//Dependencies
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1668467927849-f770914911a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
        style={{ flex: 0.5 }}
        resizeMode={"cover"}
      >
        <View style={{ flex: 0.5 }}></View>
      </ImageBackground>
      <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/116475964?v=4",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#00ADB5',
              position: "absolute",
              zIndex: 2,
            }}
          />
        </View>
        <View style={{ marginTop: 60, backgroundColor: "#f5f5f5" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              color: "#000",
            }}
          >
            Muhammad Salman Alfarisi
          </Text>
          <Text style={{ textAlign: "center", marginTop: 5 }}>
            Template Enthusiast
          </Text>
          <View style={{ marginLeft: 80 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                }}
              >
                <Icon name="mobile-alt" size={25} color="#00ADB5" />
              </View>
              <View
                style={{ justifyContent: "center", marginLeft: 10, flex: 1 }}
              >
                <Text style={{ fontWeight: "bold" }}>0878-8234-0660</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                }}
              >
                <Icon name="map-marker-alt" size={25} color="#00ADB5" />
              </View>
              <View
                style={{ justifyContent: "center", marginLeft: 10, flex: 1 }}
              >
                <Text style={{ fontWeight: "bold" }}>Semarang</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                }}
              >
                <Icon name="envelope" size={25} color="#00ADB5" />
              </View>
              <View
                style={{ justifyContent: "center", marginLeft: 10, flex: 1 }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  faris.kocak@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginHorizontal: 30,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://instagram.com/msalman_af")
              }
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="instagram" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://github.com/MuhammadSalmanAlfarisi")
              }
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="github" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://twitter.com/sal__moon")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="twitter" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://linkedin.com/in/muhammadsalmoon")
              }
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="linkedin" size={25} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
