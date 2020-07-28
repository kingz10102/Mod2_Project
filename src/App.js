import React, { Component } from 'react';
import './App.css';
import Diagram from './components/Diagram/Diagram';
import NationSelector from './components/NationSelector/NationSelector';
import StatusBlocks from './components/StatusBlocks/StatusBlocks';


// I will be using a class component for appliaction
class App extends Component {
  render() {
  return (
    <div className="container">
     <StatusBlocks/>
     <NationSelector/>
     <Diagram/>

    </div>
  );
}

}

export default App;
