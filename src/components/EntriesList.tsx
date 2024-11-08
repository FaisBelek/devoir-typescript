import React, { useState, useContext } from 'react';
import { DiaryContext, DiaryEntry } from '../context/DiaryContext';
import { PasswordComponent } from './PasswordComponent';

export const EntriesList: React.FC = () => {
  const { entries, deleteEntry } = useContext(DiaryContext);
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleDelete = (id: number) => {
    if (window.confirm('Veux tu vraiment supprmier?')) {
      deleteEntry(id);
    }
  };

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
        <div key={entry.id}>
          <div onClick={() => handleEntryClick(entry)}>
            {entry.isEncrypted ? '🔒 Message protégé' : entry.message}
          </div>
          <button onClick={() => handleDelete(entry.id)}>Supprimer</button>

          {showPassword && selectedEntry === entry.id && entry.isEncrypted && (
            <PasswordComponent
              correctPassword={entry.password || ''}
              onSuccess={() => {
                setShowPassword(false);
                setSelectedEntry(entry.id);
              }}
              onCancel={() => {
                setShowPassword(false);
                setSelectedEntry(null);
              }}
            />
          )}

          {!showPassword && selectedEntry === entry.id && (
            <div>
              <p>{entry.message}</p>
              <button onClick={() => setSelectedEntry(null)}>Fermer</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};