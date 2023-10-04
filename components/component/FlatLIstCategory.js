import { CategoriesMainDiv } from "../style/CategoriesMainDiv";
import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import { categories } from "../data/Data";
import { CategoriesButton } from "../style/CategoriesButton";
const FlatLIstCategory = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <CategoriesMainDiv>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        style={{ overflow: "visible" }}
        renderItem={({ item }) => {
          let isActive = item.id == activeCategory;
          let activeBackground = isActive ? "#d4a574" : "rgba(0, 0, 0, 0.07)";
          let activeText = isActive ? "white" : "black";
          return (
            <CategoriesButton
              onPress={() => setActiveCategory(item.id)}
              style={{ backgroundColor: activeBackground }}
            >
              <Text
                style={{
                  fontWeight: isActive ? "bold" : "500",
                  color: activeText,
                }}
              >
                {item.title}
              </Text>
            </CategoriesButton>
          );
        }}
      />
    </CategoriesMainDiv>
  );
};

export default FlatLIstCategory;
