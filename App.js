import First from "./components/component/First";
import { ContainerApp } from "./components/style/ContainerApp";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
export default function App() {
  return (
    <ContainerApp>
      <First />
    </ContainerApp>
  );
}
