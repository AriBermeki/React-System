import './App.css';
//import ExampleComponent from './components/react_component_class_0';
//import ExampleComponent from './components/react_component_class_1';

// import Temperature from './function/react_error_function';


// function App() {
//   return (
//     <div className="App">
//      <Temperature> </Temperature>

      
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';

let pyload;
class App extends Component {
 
  

  componentDidMount() {
    const socket = new WebSocket('ws://localhost:8000/ws');
    
    socket.onmessage = function(e) {
      pyload = e.data
      console.log(pyload)
    };
    
  }

  render() {
    return <pre>Websocketstatus: {pyload}</pre>;
  }
}

export default App;
