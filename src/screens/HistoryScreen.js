// src/screens/HistoryScreen.js (updated)
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from '../styles/style';
import { HistoryContext } from '../utils/HistoryContext';

const HistoryScreen = () => {
  const { history, clearHistory, isLoading } = useContext(HistoryContext);

  const handleClear = () => {
    
    Alert.alert('Confirm', 'Clear all history?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: clearHistory },
    ]);
  };

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#BB86FC" />
        <Text style={[styles.emptyText, { marginTop: 16 }]}>Loading history...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversion History</Text>

      {history.length === 0 ? (
        <Text style={styles.emptyText}>No history yet</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyText}>
                {item.input} (Base {item.fromBase}) → {item.result} (Base {item.toBase})
              </Text>
              <Text style={styles.timestamp}>
                {new Date(item.timestamp).toLocaleString()}
              </Text>
            </View>
          )}
        />
      )}

      {history.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>Clear History</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HistoryScreen;