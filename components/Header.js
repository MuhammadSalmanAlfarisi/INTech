//Dependencies
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.heading}>
      <View style={styles.icon}>
        <AntDesign
          name="close"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  heading: {
    flex: 0,
    height: 40,
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
  },
});
