import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultDisplay = ({ label, value, fallback = "-" }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.displayContainer}>
        <Text
          style={[styles.resultValue, !value && styles.resultEmpty]}
          numberOfLines={1}
          ellipsizeMode="head"
        >
          {value || fallback}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  
  label: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 6,
    fontWeight: "600",
  },
  displayContainer: {
    backgroundColor: "#111",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 20,
    minHeight: 80,
    justifyContent: "center",
    alignItems: "flex-end",
    shadowColor: "#00FF88",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
  },
  resultValue: {
    fontSize: 36,
    fontWeight: "700",
    color: "#00FF88", // neon green
    textAlign: "right",
  },
  resultEmpty: {
    color: "#666",
  },
});

export default ResultDisplay;
