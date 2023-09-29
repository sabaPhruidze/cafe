import styled from "styled-components";

import { Location } from "./components/Style/Location";

import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { ContainerApp } from "./components/Style/ContainerApp";
import { BGI } from "./components/Style/BGI";
import { AvatarImg } from "./components/Style/AvatarImg";
import { SafeAreaViewApp } from "./components/Style/SafeAreaViewApp";
import { AvatarDiv } from "./components/Style/AvatarDiv";

export default function App() {
  return (
    <ContainerApp>
      <StatusBar style="dark" />
      <BGI source={require("./assets/images/beansBackground1.png")} />
      <SafeAreaViewApp>
        <AvatarImg source={require("./assets/images/avatar.png")} />
        <AvatarDiv></AvatarDiv>
      </SafeAreaViewApp>
    </ContainerApp>
  );
}
