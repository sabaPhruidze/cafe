import { View, Text, Image } from "react-native";
import React from "react";
import { CardDiv } from "../style/CardDiv";
import { CardImage } from "../style/CardImage";

const CoffeeCard = ({ item }) => {
  return (
    <CardDiv>
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
        }}
      >
        <CardImage source={item.image} />
      </View>
    </CardDiv>
  );
};

export default CoffeeCard;
