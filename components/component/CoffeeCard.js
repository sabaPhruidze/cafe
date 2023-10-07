import { View, Text, Image } from "react-native";
import React from "react";
import { CardDiv } from "../style/CardDiv";
import { CardImage } from "../style/CardImage";
import { CardName } from "../style/CardName";
import { CardNameDiv } from "../style/CardNameDiv";
import { RatingDiv } from "../style/RatingDiv";
import { VolumeDiv } from "../style/VolumeDiv";
import { PriceText } from "../style/PriceText";
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
        <RatingDiv>
          <Image
            source={require("../../assets/images/emptyStar.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ color: "white", fontSize: 14 }}>{item.stars}</Text>
        </RatingDiv>
        <VolumeDiv>
          <Text style={{ marginRight: 5, color: "#fff" }}>Volume</Text>
          <Text style={{ color: "#fff", fontWeight: 800 }}>{item.volume}</Text>
        </VolumeDiv>
        <PriceText>$ {item.price}</PriceText>
      </CardNameDiv>
    </CardDiv>
  );
};

export default CoffeeCard;
