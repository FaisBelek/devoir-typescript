import React from 'react';
import { DiaryProvider } from './context/DiaryContext';
import { CreateEntry } from './components/CreateEntry';
import { EntriesList } from './components/EntriesList';
import { ReadEntry } from './components/ReadEntry';

import './App.css';

function App() {
  return (
    <DiaryProvider>
      <div className="App">
        <h1>Ecris et je garde ton message</h1>
        <CreateEntry />
        <EntriesList />
      </div>
    </DiaryProvider>
  );
}

export default App;
