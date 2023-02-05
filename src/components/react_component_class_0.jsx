// 1. import React from 'react'; - Diese Zeile importiert die React-Bibliothek, die für die Verwendung von React-Komponenten erforderlich ist.
import '../App.css';
import React from 'react';


// 2. class ExampleComponent extends React.Component - Diese Zeile erstellt eine neue Klasse ExampleComponent, die von der React-Komponentenklasse erbt.


class ExampleComponent extends React.Component {

  // 3. state = { message: 'Hello, World!' }; - Diese Zeile definiert den initialen Zustand der Komponente. In diesem Fall ist die Nachricht Hello, World!.


  state = {
    message: 'Hello, World!'
  };

  // 4. handleClick = () => {...} - Diese Zeile definiert eine Funktion, die aufgerufen wird, wenn der Benutzer auf den "Click Me" -Button klickt.



  handleClick = () => {

    // 5. this.setState({ message: 'You clicked the button!' }); - Diese Zeile ändert den Zustand der Komponente, indem die Nachricht in You clicked the button! geändert wird.

    this.setState({ message: 'You clicked the button!' });
  };

  render() {

    // 6. <p>{this.state.message}</p> - Diese Zeile rendert die aktuelle Nachricht aus dem Zustand der Komponente.
    // 7. <button onClick={this.handleClick}>Click Me</button> - Diese Zeile rendert einen Button mit einem Klick-Handler, der die handleClick -Funktion aufruft.
    // 8. export default ExampleComponent; - Diese Zeile exportiert die Komponente, so dass sie in anderen Teilen der Anwendung verwendet werden kann.

    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ExampleComponent;











