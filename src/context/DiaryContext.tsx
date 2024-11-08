import React, { createContext, useState, ReactNode } from 'react';

export interface DiaryEntry {
  id: number;
  message: string;
  isEncrypted: boolean;
  password?: string;
}

interface DiaryContextType {
  entries: DiaryEntry[];
  addEntry: (message: string, isEncrypted: boolean, password?: string) => void;
  deleteEntry: (id: number) => void;
  updateEntry: (id: number, message: string, isEncrypted: boolean, password?: string) => void;
}

export const DiaryContext = createContext<DiaryContextType>({
  entries: [],
  addEntry: () => {},
  deleteEntry: () => {},
  updateEntry: () => {},
});

export const DiaryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  const addEntry = (message: string, isEncrypted: boolean, password?: string) => {
    const newEntry: DiaryEntry = {
      id: Date.now(),
      message,
      isEncrypted,
      password
    };
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const updateEntry = (id: number, message: string, isEncrypted: boolean, password?: string) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id
        ? { ...entry, message, isEncrypted, password }
        : entry
    );
    setEntries(updatedEntries);
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry, deleteEntry, updateEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};