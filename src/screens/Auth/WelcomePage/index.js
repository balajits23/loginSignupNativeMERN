import { Text, View, StyleSheet, Image } from "react-native";
import bg from "../../../../assets/bg.png";
import welcome_logo from "../../../../assets/welcome_logo.png";
import ButtonComponent from "../../../components/atoms/ButtonComponent";

const Welcome = () => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.bgContainer} source={bg} />
      <View style={styles.container2}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={welcome_logo} />
        </View>
        <View style={styles.btnContainer}>
          <ButtonComponent name="Login" />
          <ButtonComponent name="Signup" />
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
