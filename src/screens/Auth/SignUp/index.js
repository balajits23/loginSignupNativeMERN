import { Text, View, StyleSheet, Image, Alert } from "react-native";
import bg from "../../../../assets/bg.png";
import logo from "../../../../assets/logo.png";
import ButtonComponent from "../../../components/atoms/ButtonComponent";
import InputField from "../../../components/atoms/Inputfield";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react";
import { signupRequest } from "../../../services/signup";

const SignUp = ({ navigation }) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    cpassword: "",
  });
  const [errormsg, seterrormsg] = useState(null);

  const handleTextChange = (value, name) => {
    setformData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async () => {
    const { cpassword, dob, email, name, password } = formData;

    if (!cpassword || !dob || !email || !name || !password) {
      seterrormsg("Please fill all the fields!");
      return;
    } else {
      if (password !== cpassword) {
        seterrormsg("Password should be same!");
      } else {
        if (name && email && dob && password && cpassword) {
          const payload = {
            name: name,
            email: email,
            dob: dob,
            password: password,
          };
          const { data, errRes } = await signupRequest(payload);
          if (data) {
            Alert.alert("Signup Successfully", "User Registered successfully!");
            navigation.navigate("login");
          } else {
            seterrormsg(errRes.error);
          }
        }
      }
    }
  };

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
              <Text
                style={{ color: "#0D3248" }}
                onPress={() => navigation.navigate("login")}
              >
                Sign In
              </Text>
            </Text>

            {errormsg ? (
              <View style={styles.errmsgBox}>
                <Text style={styles.errmsgStyle}>{errormsg}</Text>
              </View>
            ) : null}
          </View>
          <KeyboardAvoidingView behavior="height" style={{ marginTop: -20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <InputField
                  label="Name"
                  placeholder="enter your name"
                  value={formData.name}
                  onChangeText={(text) => handleTextChange(text, "name")}
                  onPressIn={() => seterrormsg(null)}
                />
              </View>
              <View>
                <InputField
                  label="Email"
                  placeholder="enter email id"
                  value={formData.email}
                  onChangeText={(text) => handleTextChange(text, "email")}
                  onPressIn={() => seterrormsg(null)}
                />
              </View>
              <View>
                <InputField
                  label="DOB"
                  placeholder="enter your date of birth"
                  value={formData.dob}
                  onChangeText={(text) => handleTextChange(text, "dob")}
                  onPressIn={() => seterrormsg(null)}
                />
              </View>
              <View>
                <InputField
                  label="Password"
                  placeholder="enter password"
                  secureTextEntry={true}
                  value={formData.password}
                  onChangeText={(text) => handleTextChange(text, "password")}
                  onPressIn={() => seterrormsg(null)}
                />
              </View>
              <View>
                <InputField
                  label="Confirm Password"
                  placeholder="confirm your password"
                  secureTextEntry={true}
                  value={formData.cpassword}
                  onChangeText={(text) => handleTextChange(text, "cpassword")}
                  onPressIn={() => seterrormsg(null)}
                />
              </View>
              <ButtonComponent
                variant="contained"
                name="SignUp"
                onPress={handleOnSubmit}
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
