import { AppRegistry, Picker } from "react-native";
import App from "./App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
