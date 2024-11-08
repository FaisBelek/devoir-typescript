import React, { useState, useContext } from 'react';
import { DiaryContext, DiaryEntry } from '../context/DiaryContext';
import { PasswordComponent } from './PasswordComponent';

export const ReadEntry: React.FC = () => {
  const { entries } = useContext(DiaryContext);
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleEntryClick = (entry: DiaryEntry) => {
    if (entry.isEncrypted) {
      setShowPassword(true);
      setSelectedEntry(entry.id);
    } else {
      setSelectedEntry(entry.id);
    }
  };

  return (
    <div>
      {entries.map(entry => (
        <div key={entry.id} onClick={() => handleEntryClick(entry)}>
          {entry.isEncrypted ? '🔒 Message protégé' : entry.message}
        </div>
      ))}

      {showPassword && selectedEntry && entries.find(entry => entry.id === selectedEntry)?.isEncrypted && (
        <PasswordComponent
          correctPassword={entries.find(entry => entry.id === selectedEntry)?.password || ''}
          onSuccess={() => {
            setShowPassword(false);
            setSelectedEntry(selectedEntry);
          }}
          onCancel={() => {
            setShowPassword(false);
            setSelectedEntry(null);
          }}
        />
      )}

      {!showPassword && selectedEntry && (
        <div>
          <p>{entries.find(entry => entry.id === selectedEntry)?.message}</p>
          <button onClick={() => setSelectedEntry(null)}>Fermer</button>
        </div>
      )}
    </div>
  );
};