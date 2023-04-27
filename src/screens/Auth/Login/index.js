import { Text, View, StyleSheet, Image } from "react-native";
import bg from "../../../../assets/bg.png";
import logo from "../../../../assets/logo.png";
import ButtonComponent from "../../../components/atoms/ButtonComponent";
import InputField from "../../../components/atoms/Inputfield";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react";
import { loginRequest } from "../../../services/login";

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errMsg, seterrMsg] = useState(null);

  const handleTextChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { email, password } = formData;
    if (!email || !password) {
      seterrMsg("Please fill all the fields!");
      return;
    } else {
      if (email && password) {
        const payload = {
          email: email,
          password: password,
        };
        const { data, errRes } = await loginRequest(payload);
        if (data) {
          navigation.navigate("Homepage");
        } else if (errRes) {
          seterrMsg(errRes?.error);
        }
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <Image style={styles.bgContainer} source={bg} />
        <View style={styles.container2}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>
          <View style={styles.loginSection} behavior="height">
            <View style={{ alignSelf: "center" }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Login
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Sign In to continue
              </Text>
              {errMsg ? (
                <View style={styles.errmsgBox}>
                  <Text style={styles.errmsgStyle}>{errMsg}</Text>
                </View>
              ) : null}
            </View>
            <KeyboardAvoidingView behavior="height" style={{ marginTop: 30 }}>
              <ScrollView
                style={{ marginBottom: 10 }}
                showsVerticalScrollIndicator={false}
              >
                <View>
                  <InputField
                    label="Email"
                    placeholder="Enter your email id"
                    value={formData.email}
                    onChangeText={(text) => handleTextChange(text, "email")}
                    onPressIn={() => seterrMsg(null)}
                  />
                </View>
                <View>
                  <InputField
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    value={formData.password}
                    onChangeText={(text) => handleTextChange(text, "password")}
                    onPressIn={() => seterrMsg(null)}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      alignSelf: "flex-end",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </View>
                <ButtonComponent
                  variant="contained"
                  name="Login"
                  onPress={handleSubmit}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      alignSelf: "center",
                      color: "gray",
                    }}
                  >
                    Don't have an account?{" "}
                    <Text
                      style={{ color: "#0D3248" }}
                      onPress={() => navigation.navigate("signUp")}
                    >
                      Signup
                    </Text>
                  </Text>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
  },
  logoContainer: {
    marginVertical: 20,
    height: "40%",
    alignSelf: "center",
    justifyContent: "center",
  },
  loginSection: {
    height: "60%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: "5%",
    paddingVertical: "15%",
    display: "flex",
    justifyContent: "space-around",
  },
  errmsgStyle: {
    color: "white",
    textAlign: "center",
  },
  errmsgBox: {
    backgroundColor: "red",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
});
