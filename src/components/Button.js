import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, type = "default" }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "operator" && styles.operator,
        type === "equals" && styles.equals,
        type === "clear" && styles.clear,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 6,
    paddingVertical: 18,
    borderRadius: 12,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  operator: {
    backgroundColor: "#4444AA",
  },
  equals: {
    backgroundColor: "#00CC66",
  },
  clear: {
    backgroundColor: "#AA3333",
  },
});

export default Button;
