//Dependencies
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import axios from "axios";

//Components
import Artikel from "../components/Artikel";


const Homescreen = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f5b4db59c8f34b8298f8b2bd2d64e750",
        {
          params: {
            category: "technology",
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

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Artikel
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
            content={item.content}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 24,
    height: "100%",
  },
});
