import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { ContainerApp } from "./components/Style/ContainerApp";
import { BGI } from "./components/Style/BGI";
import { AvatarImg } from "./components/Style/AvatarImg";
import styled from "styled-components";

export default function App() {
  return (
    <ContainerApp>
      <StatusBar style="dark" />
      <BGI source={require("./assets/images/beansBackground1.png")} />
      <SafeAreaViewApp>
        <View>
          <AvatarImg source={require("./assets/images/avatar.png")} />
          <AvatarDiv>gr</AvatarDiv>
        </View>
      </SafeAreaViewApp>
    </ContainerApp>
  );
}

const SafeAreaViewApp = styled.SafeAreaView`
  display: flex;
  flex: 1;
`;
const AvatarDiv = styled.Div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
