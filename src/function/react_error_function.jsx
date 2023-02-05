// 1. import React, { useState, useEffect } from 'react'; - Diese Zeile importiert die React-Bibliothek und die useState und useEffect hooks.

import React, { useState, useEffect } from 'react';
import '../App.css';
const ErrorBoundary = (props) => {

    /* 2. const [hasError, setHasError] = useState(false); - Diese Zeile verwendet den useState -Hook, um einen lokalen Zustand hasError zu initialisieren,
    der angibt, ob ein Fehler aufgetreten ist, und eine Funktion setHasError zu erstellen, um den Zustand zu aktualisieren.*/

  const [hasError, setHasError] = useState(false);

  /* 3. const [error, setError] = useState(null); - Diese Zeile verwendet den useState -Hook, 
  um einen lokalen Zustand error zu initialisieren, der den Fehler enthält, und eine Funktion setError zu erstellen, um den Zustand zu aktualisieren. */
  const [error, setError] = useState(null);


  /* 4. useEffect(() => {...}, [hasError, error]) - Diese Zeile verwendet den useEffect -Hook, um einen Effekt auszuführen, 
  der bei jeder Änderung des Zustands hasError oder error ausgeführt wird. In diesem Fall wird der Fehler in der Konsole protokolliert. */
  useEffect(() => {
    // 5. if (hasError) {...} - Diese Zeile überprüft, ob ein Fehler aufgetreten ist. Wenn ja, wird eine Fehlermeldung angezeigt.
    if (hasError) {
      console.error(error);
    }
  }, [hasError, error]);

  if (hasError) {
    return <p>An error occurred: {error.message}</p>;
  }
  // 6. return props.children; - Wenn kein Fehler aufgetreten ist, werden die Kinderkomponenten des props -Objekts rendert.

  return props.children;
};

export default ErrorBoundary;




