import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  const renderIngredient = ({ item }) => <Text style={styles.text}>- {item}</Text>;

  const renderInstruction = ({ item, index }) => <Text style={styles.text}>{index + 1}. {item}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        <FlatList
          data={recipe.ingredients}
          renderItem={renderIngredient}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.sectionTitle}>Instructions:</Text>
        <FlatList
          data={recipe.instructions}
          renderItem={renderInstruction}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default RecipeDetailScreen;
