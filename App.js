import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Auth/WelcomePage";
import Login from "./src/screens/Auth/Login";
import SignUp from "./src/screens/Auth/SignUp";

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
