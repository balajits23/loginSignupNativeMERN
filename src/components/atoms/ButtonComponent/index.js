import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

const ButtonComponent = ({
  name = "Button",
  variant = "outlined",
  onPress = () => {},
}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onPress}
        style={
          variant === "outlined"
            ? [
                {
                  ...styles.btnStyles,
                  backgroundColor: "#fff",
                  padding: 12,
                  width: "100%",
                },
              ]
            : [
                {
                  ...styles.btnStyles,
                  backgroundColor: "#0D3248",
                  padding: 12,
                  width: "100%",
                },
              ]
        }
      >
        <Text
          style={
            variant === "outlined"
              ? [{ ...styles.textStyle, color: "#0D3248" }]
              : [{ ...styles.textStyle, color: "#fff" }]
          }
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btnStyles: {
    minWidth: 100,
    borderRadius: 5,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  root: {
    margin: 5,
  },
});
