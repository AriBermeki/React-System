import React, { useState, useEffect } from 'react';
import openSocket from 'socket.io-client';

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    const socket = openSocket('http://localhost:8000/ws');
    socket.on('message', (value) => setData(value));
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h1>Sensor Value: {data}</h1>
    </div>
  );
}

export default App;
