import React, { useState } from 'react';

interface PasswordComponentProps {
  correctPassword: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export const PasswordComponent: React.FC<PasswordComponentProps> = ({
  correctPassword,
  onSuccess,
  onCancel
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onSuccess();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Entrez le mot de passe"
      />
      {error && <p>{error}</p>}
      <button type="submit">Valider</button>
      <button type="button" onClick={onCancel}>Annuler</button>
    </form>
  );
};