import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ContainerApp } from "./components/Style/ContainerApp";
import { BGI } from "./components/Style/BGI";

export default function App() {
  return (
    <ContainerApp>
      <StatusBar style="dark" />
      <BGI source={require("./assets/images/beansBackground1.png")} />
    </ContainerApp>
  );
}
