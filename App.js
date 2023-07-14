import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/Main";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/navigation/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
