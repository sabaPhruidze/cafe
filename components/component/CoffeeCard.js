import { View, Text, Image } from "react-native";
import React from "react";
import { CardDiv } from "../style/CardDiv";
import { CardImage } from "../style/CardImage";
import { CardName } from "../style/CardName";
import { CardNameDiv } from "../style/CardNameDiv";
const CoffeeCard = ({ item }) => {
  return (
    <CardDiv>
      <View
        style={{
          shadowColor: "#000", //does not work
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
        }}
      >
        <CardImage source={item.image} />
      </View>
      <CardNameDiv>
        <CardName>{item.name}</CardName>

        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            position: "absolute",
            top: 130,
            padding: 5,
            width: 50,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/emptyStar.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ color: "white", fontSize: 14 }}>{item.stars}</Text>
        </View>
      </CardNameDiv>
    </CardDiv>
  );
};

export default CoffeeCard;
