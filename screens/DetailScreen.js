//Dependencies
import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

//Components
import Header from "../components/Header";


const DetailScreen = (props) => {
  let route = useRoute();
  let { image, title, content, author, date } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.judul}>{title}</Text>
      <View style={styles.image}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.bodyartikel}>
        <Text style={styles.artikel}>{content}</Text>
        <View style={styles.footer}>
          <Text style={styles.h1}>
            By: <Text style={styles.sumber}>{author}</Text>
          </Text>
          <Text>{date}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  header: {
    height: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    flex: 1,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  judul: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "800",
    color: "#00ADB5",
    paddingHorizontal: 10,
  },
  bodyartikel: {
    paddingHorizontal: 10,
    flex: 2,
    fontSize: 16,
    marginTop: 5,
  },
  artikel: {
    fontSize: 14,
    textAlign: "justify",
  },
  footer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
