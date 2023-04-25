import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";

const InputField = ({
  label = "label",
  placeholder = "placeholder",
  secureTextEntry = false,
  value = "",
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.root}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        style={{ ...styles.inputStyles }}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#0D3248"
        value={value}
        onChangeText={(newText) => onChangeText(newText)}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  root: {
    margin: 5,
  },
  inputStyles: {
    padding: 10,
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#0D3248",
  },
  labelStyle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#0D3248",
    textTransform: "capitalize",
    marginVertical: 1,
  },
});
