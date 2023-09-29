import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { ThemeColors } from "../../theme";
export const Button = styled(TouchableOpacity)`
  border-radius: 200px;
  padding: 8px;
  background-color: ${ThemeColors.bgLight};
  margin-right: 15px;
`;
