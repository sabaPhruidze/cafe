import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerApp } from "./components/Style/ContainerApp";
import { BGI } from "./components/Style/BGI";
import { AvatarImg } from "./components/Style/AvatarImg";
import { SafeAreaViewApp } from "./components/Style/SafeAreaViewApp";
import styled from "styled-components";

export default function App() {
  return (
    <ContainerApp>
      <StatusBar style="dark" />
      <BGI source={require("./assets/images/beansBackground1.png")} />
      <SafeAreaViewApp>
        <AvatarImg source={require("./assets/images/avatar.png")} />
      </SafeAreaViewApp>
    </ContainerApp>
  );
}

const AvatarDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
