import styled from "styled-components";

import { Icon } from "./components/Style/Icon";
import { SafeAreaFirstLine } from "./components/Style/SafeAreaFirstLine";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { ContainerApp } from "./components/Style/ContainerApp";
import { BGI } from "./components/Style/BGI";
import { AvatarImg } from "./components/Style/AvatarImg";
import { SafeAreaViewApp } from "./components/Style/SafeAreaViewApp";
import { AvatarDiv } from "./components/Style/AvatarDiv";
import { AvatarText } from "./components/Style/AvatarText";
import { SBWrapper } from "./components/Style/SBWrapper";
import { SBContainer } from "./components/Style/SBContainer";
import { Search } from "./components/Style/Search";
import { Button } from "./components/Style/Button";
export default function App() {
  return (
    <ContainerApp>
      <StatusBar style="dark" />
      <BGI source={require("./assets/images/beansBackground1.png")} />
      <SafeAreaViewApp>
        {/* avatar and bell */}
        <SafeAreaFirstLine>
          <AvatarImg source={require("./assets/images/avatar.png")} />
          <AvatarDiv>
            <Icon source={require("./assets/icons/location.png")} />
            <AvatarText style={{ marginLeft: 5 }}>New York, NYC</AvatarText>
          </AvatarDiv>
          <Icon
            source={require("./assets/icons/bell.png")}
            style={{ width: 27, height: 27 }}
          />
        </SafeAreaFirstLine>
        {/* search bar */}
        <SBWrapper>
          <SBContainer>
            <Search placeholder="Search" />
            <Button>
              <Icon
                source={require("./assets/icons/search.png")}
                style={{ width: 25, height: 25 }}
              />
            </Button>
          </SBContainer>
        </SBWrapper>
      </SafeAreaViewApp>
    </ContainerApp>
  );
}
