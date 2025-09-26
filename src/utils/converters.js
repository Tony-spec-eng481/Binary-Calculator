// General base-to-base converter
export const convertBase = (value, fromBase, toBase) => {
  if (!value) return '';

  // Validation regex for each base
  const patterns = {
    2: /^[01]+$/,        // binary
    8: /^[0-7]+$/,       // octal
    10: /^\d+$/,        // decimal
    16: /^[0-9a-fA-F]+$/ // hexadecimal
  };

  if (!patterns[fromBase].test(value)) {
    throw new Error(`Invalid input for base ${fromBase}`);
  }

  const decimalValue = parseInt(value, fromBase);
  if (isNaN(decimalValue)) return '';

  return decimalValue.toString(toBase).toUpperCase();
};

// Specific converters (wrappers around convertBase)
export const binaryToDecimal = (binary) => convertBase(binary, 2, 10);
export const decimalToBinary = (decimal) => convertBase(decimal, 10, 2);
export const octalToDecimal = (octal) => convertBase(octal, 8, 10);
export const decimalToOctal = (decimal) => convertBase(decimal, 10, 8);
export const hexToDecimal = (hex) => convertBase(hex, 16, 10);
export const decimalToHex = (decimal) => convertBase(decimal, 10, 16);

export const binaryToHex = (binary) => convertBase(binary, 2, 16);
export const hexToBinary = (hex) => convertBase(hex, 16, 2);
export const binaryToOctal = (binary) => convertBase(binary, 2, 8);
export const octalToBinary = (octal) => convertBase(octal, 8, 2);
export const octalToHex = (octal) => convertBase(octal, 8, 16);
export const hexToOctal = (hex) => convertBase(hex, 16, 8);

// Optional: format binary into groups of 4 for readability
export const formatBinary = (binaryString) => {
  return binaryString.replace(/(.{4})/g, '$1 ').trim();
};
