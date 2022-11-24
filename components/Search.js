//Dependencies
import React from "react";
import { View, StyleSheet, Image, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          placeholder="Search News"
          style={styles.input}
          value={props.searchText}
          onChangeText={(text) => props.setSearchText(text)}
          onSubmitEditing={props.onSubmit}
          clearButtonMode="always"
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    
  },
  icon: {
    marginRight: 20,
    width: 42,
    height: 40,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    fontWeight: "bold",
    color: "#00ADB5",
    textAlign: "center",
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    marginTop: 18,
    marginHorizontal: 18,
    marginBottom: 5,
    backgroundColor: "#f5f5f5",
    borderColor: "#00ADB5",
    borderRadius: 14,
    borderWidth: 3,
    paddingHorizontal:10,
  },
});
