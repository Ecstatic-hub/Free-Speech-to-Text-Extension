import React, { useState } from 'react';
import { Mic, MicOff, Settings } from 'lucide-react';

function App() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual recording logic
  };

  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">Speech-to-Text</h1>
      <div className="flex justify-between items-center">
        <button
          onClick={toggleRecording}
          className={`p-2 rounded-full ${
            isRecording ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
        </button>
        <span className="text-sm text-gray-600">
          {isRecording ? 'Recording...' : 'Click to start'}
        </span>
        <button className="p-2 rounded-full bg-gray-200 text-gray-700">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;