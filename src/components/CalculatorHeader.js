import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // 👈 add this

const CalculatorHeader = ({ onHistory, onSettings, onInfo }) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}> {/* 👈 prevents overlap */}
      <View style={styles.headerContent}>
        <Text style={styles.title}>Base Converter</Text>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={onHistory} style={styles.iconButton}>
            <View style={styles.iconBackground}>
              <Text style={[styles.iconText, styles.historyIcon]}>H</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={onInfo} style={styles.iconButton}>
            <View style={styles.iconBackground}>
              <Text style={[styles.iconText, styles.infoIcon]}>i</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#1E1E1E",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingHorizontal: 16,
    paddingBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  iconBackground: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  historyIcon: { color: "#BB86FC" },
  settingsIcon: { color: "#03DAC5" },
  infoIcon: { color: "#6200EE", fontSize: 18, fontWeight: "900" },
});

export default CalculatorHeader;
