import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";

const InputField = ({ onPressDigit, onPressOperator, onEquals, onClear, allowHex }) => {
  const digitsRow1 = allowHex ? ["A", "B", "C", "D"] : [];
  const digitsRow2 = allowHex ? ["E", "F"] : [];

  return (
    <View style={styles.container}>
      
      {/* Row of digits */}
      <View style={styles.row}>
        {["7", "8", "9"].map((d) => (
          <Button key={d} title={d} onPress={() => onPressDigit(d)} />
        ))}
        <Button title="÷" type="operator" onPress={() => onPressOperator("/")} />
      </View>

      <View style={styles.row}>
        {["4", "5", "6"].map((d) => (
          <Button key={d} title={d} onPress={() => onPressDigit(d)} />
        ))}
        <Button title="×" type="operator" onPress={() => onPressOperator("*")} />
      </View>

      <View style={styles.row}>
        {["1", "2", "3"].map((d) => (
          <Button key={d} title={d} onPress={() => onPressDigit(d)} />
        ))}
        <Button title="-" type="operator" onPress={() => onPressOperator("-")} />
      </View>

      <View style={styles.row}>
        <Button title="0" onPress={() => onPressDigit("0")} />
        <Button title="C" type="clear" onPress={onClear} />
        <Button title="=" type="equals" onPress={onEquals} />
        <Button title="+" type="operator" onPress={() => onPressOperator("+")} />
      </View>

      {/* Hex keys if enabled */}
      {allowHex && (
        <View style={styles.row}>
          {digitsRow1.map((d) => (
            <Button key={d} title={d} onPress={() => onPressDigit(d)} />
          ))}
        </View>
      )}
      {allowHex && (
        <View style={styles.row}>
          {digitsRow2.map((d) => (
            <Button key={d} title={d} onPress={() => onPressDigit(d)} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default InputField;
