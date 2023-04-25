import { Text, View, StyleSheet, Image } from "react-native";
import bg from "../../../../assets/bg.png";
import logo from "../../../../assets/logo.png";
import ButtonComponent from "../../../components/atoms/ButtonComponent";
import InputField from "../../../components/atoms/Inputfield";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.bgContainer} source={bg} />
      <View style={styles.container2}>
        <View style={styles.loginSection}>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{ fontSize: 30, fontWeight: "700", textAlign: "center" }}
            >
              Create a New Account
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                alignSelf: "center",
                color: "gray",
              }}
            >
              Already Registered ?
              <Text style={{ color: "#0D3248" }}>Sign In</Text>
            </Text>
          </View>
          <KeyboardAvoidingView behavior="height">
            <ScrollView>
              <View>
                <InputField label="Name" placeholder="enter your name" />
              </View>
              <View>
                <InputField label="Email" placeholder="enter email id" />
              </View>
              <View>
                <InputField
                  label="DOB"
                  placeholder="enter your date of birth"
                />
              </View>
              <View>
                <InputField label="Password" placeholder="enter password" />
              </View>
              <View>
                <InputField
                  label="Confirm Password"
                  placeholder="confirm your password"
                />
              </View>
              <ButtonComponent variant="contained" name="SignUp" />
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                    alignSelf: "center",
                    color: "gray",
                  }}
                >
                  Don't have an account?
                  <Text style={{ color: "#0D3248" }}>Signup</Text>
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
    width: "100%",
    justifyContent: "flex-end",
  },
  loginSection: {
    height: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: "5%",
    paddingTop: "15%",
    display: "flex",
    justifyContent: "space-around",
  },
});
