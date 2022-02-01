import React from 'react';
import TrackCard from './components/TrackCard';
import './App.css';
import { TracksProvider } from './context/TracksContext';

function App() {
  return (
    <div className="App">
    <TracksProvider>
      <TrackCard />
    </TracksProvider>
    </div>
  );
}

export default App;
