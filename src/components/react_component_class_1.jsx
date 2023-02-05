//react_component_class_


// 1. import React, { useState } from 'react'; - Diese Zeile importiert die React-Bibliothek und das useState -Hook, das für den Zugriff auf den lokalen Zustand der Komponente verwendet wird.



import React, { useState } from 'react';



// 2. class ExampleComponent extends React.Component {...} - Diese Zeile definiert eine Klassenkomponente ExampleComponent, die von der React.Component -Klasse erbt.



class ExampleComponent extends React.Component {



    // 3. constructor(props) {...} - Dieser Konstruktor akzeptiert props als Argument und ruft die super -Methode auf, um die props an die React.Component -Elternklasse weiterzuleiten.


  constructor(props) {

    super(props);

    // 4. this.state = {...} - Diese Zeile initialisiert den lokalen Zustand der Komponente mit einem count -Schlüssel, der auf 0 gesetzt wird.


    this.state = {
      count: 0,
    };
  }
    // 5. handleClick = () => {...} - Diese Funktion wird bei einem Klick auf den Button aufgerufen und aktualisiert den Zustand, indem der count -Wert um 1 erhöht wird.



  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {


        // 6. <p>{this.props.message}</p> - Diese Zeile rendert den Wert des message -Schlüssels im props -Objekt.
        // 7. <p>{this.state.count}</p> - Diese Zeile rendert den aktuellen Wert des count -Schlüssels im lokalen Zustand.
        // 8. <button onClick={this.handleClick}>Click me</button> - Diese Zeile rendert einen Button, der bei einem Klick die handleClick -Funktion aufruft.


      return (
      <div>
        
        <p>{this.props.message}</p>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ExampleComponent;







