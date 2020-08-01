import React, { Component } from 'react';
import styles from './App.module.css';
import { fetchData } from './apicalls';   /*fetching apicalls */
import Diagram from './components/Diagram/Diagram';
import NationSelector from './components/NationSelector/NationSelector';
import StatusBlocks from './components/StatusBlocks/StatusBlocks';


// I will be using a class component for appliaction
class App extends Component {
  
    state = {
      data: {}, 
      country: '',  /*creating an object data */
    }
  
  // want to fetech data in app.js (requesting to fetechData)
  async componentDidMount() {
    const CollectedData = await fetchData();
   
    this.setState({ data: CollectedData });
    // console.log(data)  /*url from apicall should be in console */
  }

handleCountryChange = async (country) => {
 const CollectedData = await fetchData(country);
 this.setState({ data: CollectedData, country: country})

 console.log(CollectedData);

}



  render() {
  // const { data } = this.state;
  return (
    <div className={styles.container}>
    <h1>COVID-19 StatCast</h1>
     <StatusBlocks data= {this.state.data} />
     <NationSelector handleCountryChange={this.handleCountryChange}/>
     <Diagram data={this.state.data} country={this.state.country}/>
    <h3 className="title">COVID-19 PIE CHART</h3>
    </div>
  );
}

}

export default App;
