import styled from "styled-components";
import { useState } from "react";
import { ContainerApp } from "../style/ContainerApp";
import { Icon } from "../style/Icon";
import { SafeAreaFirstLine } from "../style/SafeAreaFirstLine";
import { StatusBar } from "expo-status-bar";
import { BGI } from "../style/BGI";
import { AvatarImg } from "../style/AvatarImg";
import { SafeAreaViewApp } from "../style/SafeAreaViewApp";
import { AvatarDiv } from "../style/AvatarDiv";
import { AvatarText } from "../style/AvatarText";
import { SBWrapper } from "../style/SBWrapper";
import { SBContainer } from "../style/SBContainer";
import { Search } from "../style/Search";
import { Button } from "../style/Button";
import { CategoriesMainDiv } from "../style/CategoriesMainDiv";
import { categories } from "../data/Data";
import { CategoriesButton } from "../style/CategoriesButton";
import { TouchableOpacity, Text, FlatList } from "react-native";

// import sfe from "../../assets";
export default function First() {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <ContainerApp>
      <StatusBar style="dark" />
      <BGI source={require("../../assets/images/beansBackground1.png")} />
      <SafeAreaViewApp>
        {/* avatar and bell */}
        <SafeAreaFirstLine>
          <AvatarImg source={require("../../assets/images/avatar.png")} />
          <AvatarDiv>
            <Icon source={require("../../assets/icons/location.png")} />
            <AvatarText style={{ marginLeft: 5 }}>New York, NYC</AvatarText>
          </AvatarDiv>
          <Icon
            source={require("../../assets/icons/bell.png")}
            style={{ width: 27, height: 27 }}
          />
        </SafeAreaFirstLine>
        {/* search bar */}
        <SBWrapper>
          <SBContainer>
            <Search placeholder="Search" />
            <Button>
              <Icon
                source={require("../../assets/icons/search.png")}
                style={{ width: 25, height: 25 }}
              />
            </Button>
          </SBContainer>
        </SBWrapper>
        {/* categories */}
        <CategoriesMainDiv>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            style={{ overflow: "visible" }}
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory;
              let activeBackground = isActive
                ? "#d4a574"
                : "rgba(0, 0, 0, 0.07)";
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
      </SafeAreaViewApp>
    </ContainerApp>
  );
}
