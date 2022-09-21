import React , {useState} from 'react';
import "./Counter.css"

function Counter() {
    const [count , setCount] = useState(0);
    return (
      <div className="App">
        <h1 style={{color:"#2C3E50" }}> React Counter</h1>
        <div>
          <h2>{count}</h2>
          <button className=''
          onClick={()=> setCount(count+1) }>
            Increment
            </button>
          <button style={{backgroundColor: "red",color:"white"}} onClick={()=> setCount(count-1)}
          disabled={count===0}
          >
            Decrement
            </button>
          <button style={{backgroundColor:"#EAEDED" , color:"black"}} onClick={()=> setCount(0)}
          disabled={count===0}
          >
            Reset
            </button>
            
        </div>
      <div>
        <button style={{backgroundColor:"#283747", color:"white"}}
        onClick={()=>{
            alert(count)
        }}>Submit</button>
      </div>
        
      </div>
    );
  }

export default Counter;