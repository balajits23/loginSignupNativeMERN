import { Text, View, StyleSheet, Image } from "react-native";
import bg from "../../../../assets/bg.png";
import welcome_logo from "../../../../assets/welcome_logo.png";
import ButtonComponent from "../../../components/atoms/ButtonComponent";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.bgContainer} source={bg} />
      <View style={styles.container2}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={welcome_logo} />
        </View>
        <View>
          <ButtonComponent
            name="Login"
            onPress={() => navigation.navigate("login")}
          />
          <ButtonComponent
            name="Signup"
            onPress={() => navigation.navigate("signUp")}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
  },
  bgContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  container2: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginVertical: 20,
  },
});
