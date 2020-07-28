import React, { Component } from 'react';
import './App.css';
import { fetchData } from './apicalls';   /*fetching apicalls */
import Diagram from './components/Diagram/Diagram';
import NationSelector from './components/NationSelector/NationSelector';
import StatusBlocks from './components/StatusBlocks/StatusBlocks';


// I will be using a class component for appliaction
class App extends Component {
  
    state = {
      data: {},   /*creating an object data */
    }
  
  // want to fetech data in app.js (requesting to fetechData)
  async componentDidMount() {
    const CollectedData = await fetchData();
   
    this.setState({ data: CollectedData});
    // console.log(data)  /*url from apicall should be in console */
  }
  render() {
  
    return (
    <div className="container">
     <StatusBlocks data= {this.state.data} />
     <NationSelector/>
     <Diagram/>

    </div>
  );
}

}

export default App;
