import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeal}/>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
