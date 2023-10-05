import { View, Text } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { CardContainer } from "../style/CardContainer";
import { coffeeItems } from "../data/Data";
import CoffeeCard from "./CoffeeCard";
const CoffeeCardDiv = () => {
  return (
    <CardContainer>
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={coffeeItems}
        renderItem={({ item }) => <CoffeeCard item={item} />}
        firstItem={1}
        inactiveSlidOpacity={0.75}
        inactiveSlideScale={0.77} //inactive width
        sliderWidth={400} //slider width
        itemWidth={260} //card width
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </CardContainer>
  );
};

export default CoffeeCardDiv;
