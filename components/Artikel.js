import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import moment from "moment";

const Artikel = (props) => {
  const goToSource = () => {
    WebBrowser.openBrowserAsync(props.url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={goToSource}>
        <Image
          style={styles.image}
          on
          source={{
            uri: props.urlToImage,
          }}
        />
      </Pressable>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.deskripsi} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.data}>
          <Text style={styles.h2}>
            source:<Text style={styles.sumber}> {props.sourceName}</Text>
          </Text>
          <Text style={styles.tanggal}>
            {moment(props.publishedAt).format("MMM Do YY")}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Artikel;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: "86%",
    alignSelf: "center",
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#00ADB5",
  },
  deskripsi: {
    fontSize: 16,
    marginTop: 5,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h2: {
    marginTop: 5,
  },
  penulis: {
    fontWeight: "800",
  },
  tanggal: {
    color: "#00ADB5",
    fontWeight: "800",
    fontSize: 14,
    marginTop: 5,
  },
  sumber: {
    color: "#00ADB5",
    fontWeight: "800",
    fontSize: 14,
  },
});
