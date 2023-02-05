

// 1. import React, { useState, useEffect } from 'react'; - Diese Zeile importiert die React-Bibliothek und die useState und useEffect hooks.

import React, { useEffect, useState } from "react";

const ExampleComponent = (props) => {

    /* 2. const [count, setCount] = useState(0); - Diese Zeile verwendet den useState -Hook, um den lokalen Zustand count zu 
    initialisieren und eine Funktion setCount zu erstellen, um den Zustand zu aktualisieren.*/

  const [count, setCount] = useState(0);

  /* 3. useEffect(() => {...}, [count]) - Diese Zeile verwendet den useEffect -Hook, um einen Effekt auszuführen, 
  der bei jeder Änderung des Zustands count ausgeführt wird. In diesem Fall wird das Dokumententitel dynamisch aktualisiert.*/

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
    /* 4. <p>{props.message}</p> - Diese Zeile rendert den Wert des message -Schlüssels im props -Objekt.
    5. <p>{count}</p> - Diese Zeile rendert den aktuellen Wert des count -Schlüssels im lokalen Zustand.
    6. <button onClick={() => setCount(count + 1)}>Click me</button> - Diese Zeile rendert einen Button, der bei einem Klick die setCount -Funktion aufruft und den Zustand count um 1 erhöht. */

  return (
    <div>
      <p>{props.message}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default ExampleComponent;



