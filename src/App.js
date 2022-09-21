import React ,{Component} from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component{
  styles = {
    fontStyle: "bold",
    color: "teal"
  };
  render(){
    return (
      <div className='App'>
        <Counter/>
      </div>
    )
  }
}



export default App;
