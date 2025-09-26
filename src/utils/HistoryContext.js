// src/utils/HistoryContext.js
import React, { createContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addHistory = (historyItem) => {
    const timestamp = new Date();
    const newEntry = {
      input: historyItem.input,
      fromBase: historyItem.fromBase,
      result: historyItem.result,
      toBase: historyItem.toBase,
      timestamp: timestamp.toISOString(),
    };

    const newHistory = pruneOldHistory([newEntry, ...history]);
    setHistory(newHistory);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const pruneOldHistory = (entries) => {
    const now = new Date();
    const cutoff = new Date(now.setDate(now.getDate() - 30));
    return entries.filter((item) => new Date(item.timestamp) >= cutoff);
  };

  return (
    <HistoryContext.Provider value={{ history, addHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
