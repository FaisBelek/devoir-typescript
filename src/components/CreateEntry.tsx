import React, { useState, useContext } from 'react';
import { DiaryContext } from '../context/DiaryContext';

export const CreateEntry: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [password, setPassword] = useState('');
  const { addEntry } = useContext(DiaryContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEntry(message, isEncrypted, password);
    setMessage('');
    setIsEncrypted(false);
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Écris ton message"
      />
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={() => setIsEncrypted(!isEncrypted)}
        />
        Protéger par mot de passe
      </label>
      {isEncrypted && (
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Définir un mot de passe"
        />
      )}
      <button type="submit">Sauvegarder</button>
    </form>
  );
};