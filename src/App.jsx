// App.jsx
import React from 'react';
import Weather from './Weather';

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col justify-center items-center mx-auto w-screen">
      <div className="md:w-1/3 mx-auto ">
        <header>
          <h1 className="text-4xl font-bold text-white mb-8 w-1/2 mx-auto">
            Weather App
          </h1>
        </header>
        <div className="mx-auto">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
