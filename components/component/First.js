import styled from "styled-components";

import { Icon } from "../Style/Icon";
import { SafeAreaFirstLine } from "../Style/SafeAreaFirstLine";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { ContainerApp } from "../Style/ContainerApp";
import { BGI } from "../Style/BGI";
import { AvatarImg } from "../Style/AvatarImg";
import { SafeAreaViewApp } from "../Style/SafeAreaViewApp";
import { AvatarDiv } from "../Style/AvatarDiv";
import { AvatarText } from "../Style/AvatarText";
import { SBWrapper } from "../Style/SBWrapper";
import { SBContainer } from "../Style/SBContainer";
import { Search } from "../Style/Search";
import { Button } from "../Style/Button";
import sfe from "../../assets";
export default function First() {
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
      </SafeAreaViewApp>
    </ContainerApp>
  );
}
