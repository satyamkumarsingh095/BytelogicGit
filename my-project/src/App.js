import React from 'react'
import Home from './pages/Home'
import '@fontsource/inter';
import '@fontsource/outfit'; // Defaults to normal weight (400)

export default function App() {
  return (
      <div className="w-full h-screen mx-auto">
          <Home />
      </div>
  );
}
