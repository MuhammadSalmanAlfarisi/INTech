//Dependencies
import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import axios from "axios";

//Components
import Artikel from "../components/Artikel";
import Search from "../components/Search";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);
  const getSearchText = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f5b4db59c8f34b8298f8b2bd2d64e750",
        {
          params: {
            category: "technology",
            q: searchText,
          },
        }
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar}>
        <Search searchText={searchText} setSearchText={setSearchText} onSubmit={getSearchText}/>
      </View>
      <FlatList
        style={styles.list}
        data={articles}
        renderItem={({ item }) => (
          <Artikel
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: 14,
    backgroundColor: 'transparent',
  },
  searchbar: {
    backgroundColor: 'transparent',
    overflow: 'visible'
  },
  list: {
    
  }
});
