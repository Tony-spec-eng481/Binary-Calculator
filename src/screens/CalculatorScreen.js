import React, { useState, useContext } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  Alert, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import InputField from "../components/InputField";
import ResultDisplay from "../components/ResultDisplay";
import { Picker } from "@react-native-picker/picker";
import CalculatorHeader from "../components/CalculatorHeader";
import { Ionicons } from "@expo/vector-icons";
import { HistoryContext } from "../utils/HistoryContext";

// Utility converters
const parseInput = (value, base) => parseInt(value, base);
const formatOutput = (value, base) => value.toString(base).toUpperCase();

const isValidInput = (value, base) => {
  const patterns = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^\d+$/,
    16: /^[0-9a-fA-F]+$/,
  };
  return patterns[base].test(value);
};

const CalculatorScreen = ({ navigation }) => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(10);

  const { addHistory } = useContext(HistoryContext);

  // Keypad handlers
  const handleDigit = (digit) => {
    setExpression((prev) => prev + digit);
  };

  const handleOperator = (operator) => {
    if (expression === "") return;
    setExpression((prev) => prev + operator);
  };

  const handleEquals = () => {
    try {
      if (!expression) return;

      // Evaluate expression in decimal
      const decimalResult = eval(expression);
      if (isNaN(decimalResult)) {
        Alert.alert("Error", "Invalid expression");
        return;
      }

      // Convert result
      const converted = formatOutput(decimalResult, toBase);
      setResult(converted);

      // Save to history
      const historyItem = {
        input: expression,
        fromBase: fromBase,
        result: converted,
        toBase: toBase,
        timestamp: new Date().toLocaleString()
      };
      
      addHistory(historyItem);
      
    } catch (error) {
      Alert.alert("Error", "Invalid calculation");
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  // Header handlers
  const handleHistory = () => {
    navigation.navigate("History");
  };

  const handleSettings = () => {
    navigation.navigate("SettingsScreen");
  };

  const handleInfo = () => {
    Alert.alert(
      "Info",
      "This calculator supports Binary, Octal, Decimal, and Hexadecimal. You can do basic math operations and convert results between bases."
    );
  };

  return (
    <KeyboardAvoidingView 
      style={localStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Custom Header */}
      <CalculatorHeader
        onHistory={handleHistory}
        onSettings={handleSettings}
        onInfo={handleInfo}
      />

      <ScrollView 
        style={localStyles.content}
        contentContainerStyle={localStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Base Selection Cards */}
        <View style={localStyles.baseSelectionContainer}>
          <View style={localStyles.baseCard}>
            <Text style={localStyles.baseLabel}>From Base</Text>
            <View style={localStyles.pickerContainer}>
              <Picker
                selectedValue={fromBase}
                onValueChange={(itemValue) => setFromBase(itemValue)}
                style={localStyles.picker}
                dropdownIconColor="#BB86FC"
              >
                <Picker.Item label="Binary (2)" value={2} />
                <Picker.Item label="Octal (8)" value={8} />
                <Picker.Item label="Decimal (10)" value={10} />
                <Picker.Item label="Hexadecimal (16)" value={16} />
              </Picker>
            </View>
          </View>

          <Ionicons name="arrow-forward" size={responsiveSize(24)} color="#BB86FC" style={localStyles.arrowIcon} />

          <View style={localStyles.baseCard}>
            <Text style={localStyles.baseLabel}>To Base</Text>
            <View style={localStyles.pickerContainer}>
              <Picker
                selectedValue={toBase}
                onValueChange={(itemValue) => setToBase(itemValue)}
                style={localStyles.picker}
                dropdownIconColor="#BB86FC"
              >
                <Picker.Item label="Binary (2)" value={2} />
                <Picker.Item label="Octal (8)" value={8} />
                <Picker.Item label="Decimal (10)" value={10} />
                <Picker.Item label="Hexadecimal (16)" value={16} />
              </Picker>
            </View>
          </View>
        </View>

        {/* Expression Preview */}
        <View style={localStyles.expressionContainer}>
          <Text style={localStyles.expressionLabel}>Expression</Text>
          <View style={localStyles.expressionBox}>
            <Text style={localStyles.expressionText} numberOfLines={1} adjustsFontSizeToFit>
              {expression || "0"}
            </Text>
          </View>
        </View>

        {/* Result Display */}
        <View style={localStyles.resultContainer}>
          <Text style={localStyles.resultLabel}>Result in Base {toBase}</Text>
          <View style={localStyles.resultBox}>
            <Text style={localStyles.resultText} adjustsFontSizeToFit numberOfLines={1}>
              {result || "0"}
            </Text>
          </View>
        </View>

        {/* Keypad Input */}
        <InputField
          onPressDigit={handleDigit}
          onPressOperator={handleOperator}
          onEquals={handleEquals}
          onClear={handleClear}
          allowHex={fromBase === 16}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CalculatorScreen;

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Responsive sizing functions
const responsiveSize = (size) => {
  const scale = Math.min(width, height) / 375; // Base width from iPhone 6/7/8
  return Math.round(size * scale);
};

const responsiveWidth = (percentage) => {
  return width * (percentage / 100);
};

const isSmallScreen = width < 360;
const isLargeScreen = width > 414;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: responsiveSize(16),
    paddingBottom: responsiveSize(24),
  },
  baseSelectionContainer: {
    flexDirection: width < 500 ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveSize(24),
  },
  baseCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: responsiveSize(12),
    padding: responsiveSize(12),
    width: width < 500 ? '100%' : isSmallScreen ? '43%' : '45%',
    marginBottom: width < 500 ? responsiveSize(12) : 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: responsiveSize(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: responsiveSize(3.84),
    elevation: 5,
  },
  baseLabel: {
    color: '#BB86FC',
    fontSize: responsiveSize(14),
    fontWeight: '600',
    marginBottom: responsiveSize(8),
    textAlign: 'center',
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: responsiveSize(8),
    overflow: 'hidden',
  },
  picker: {
    color: '#111010',
    height: responsiveSize(70),
  },
  arrowIcon: {
    marginHorizontal: responsiveSize(8),
    marginVertical: width < 500 ? responsiveSize(12) : 0,
    transform: [{ rotate: width < 500 ? '90deg' : '0deg' }],
  },
  expressionContainer: {
    marginBottom: responsiveSize(20),
  },
  expressionLabel: {
    color: '#E0E0E0',
    fontSize: responsiveSize(16),
    fontWeight: '600',
    marginBottom: responsiveSize(8),
  },
  expressionBox: {
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: responsiveSize(8),
    padding: responsiveSize(16),
    minHeight: responsiveSize(60),
    justifyContent: 'center',
  },
  expressionText: {
    color: '#E0E0E0',
    fontSize: responsiveSize(18),
    fontWeight: '500',
  },
  resultContainer: {
    marginBottom: responsiveSize(24),
  },
  resultLabel: {
    color: '#E0E0E0',
    fontSize: responsiveSize(16),
    fontWeight: '600',
    marginBottom: responsiveSize(8),
  },
  resultBox: {
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#BB86FC',
    borderRadius: responsiveSize(8),
    padding: responsiveSize(16),
    minHeight: responsiveSize(60),
    justifyContent: 'center',
  },
  resultText: {
    color: '#BB86FC',
    fontSize: responsiveSize(20),
    fontWeight: 'bold',
  },
});