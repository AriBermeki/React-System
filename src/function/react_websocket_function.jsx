// 1. Die ErrorBoundary-Funktion wird importiert und verwendet useState und useEffect von React.

import React, { useState, useEffect } from 'react';
import '../App.css';
const ErrorBoundary = (props) => {

    // 2. Es werden zwei Zustände error und errorInfo mit useState definiert.
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  /* 3. Mit useEffect wird eine neue WebSocket-Verbindung mit wss://example.com/websocket hergestellt. 
  Wenn ein Fehler auftritt, wird die onerror-Methode aufgerufen und der Fehler wird mit setError gespeichert.*/
  useEffect(() => {
    const ws = new WebSocket('wss://example.com/websocket');
    ws.onerror = (event) => {
      setError(event.error);
    };

    // 4. Die return-Anweisung für useEffect schließt die WebSocket-Verbindung, wenn die Komponente unmontiert wird.

    return () => {
      ws.close();
    };
  }, []);
  // 5. Wenn error gesetzt ist, wird eine Fehlermeldung angezeigt.
  if (error) {
    // 6. Wenn kein Fehler vorliegt, wird die ursprüngliche Kinderkomponente mit props.children zurückgegeben.

    return (
      <div>
        <h1>Oops! An error occurred!</h1>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </div>
    );
  }

  return props.children;
};

export default ErrorBoundary;






