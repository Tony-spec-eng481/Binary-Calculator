import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const ToggleSwitch = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.toggleContainer}>
      <Text style={styles.toggleLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#444", true: "#00FF88" }} // consistent neon green
        thumbColor={value ? "#1C1C1C" : "#f4f3f4"}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  toggleLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default ToggleSwitch;
