
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [resourceType, setResourceType] = useState()

useEffect(() =>{
console.log('onmount');
}, [resourceType])
  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
    <div className="App">
    <h5>This use effect hook is used to perform side effects when the state chaages, if for exammple 'post' is clicked once and cicked agaib with out clicking on any other button before that 'onmount' is logeed once in the console but if clicked twice on mont is logged only the first time. this shows use effect runs only when the stste attached id changed.</h5>
       <button style={{height: '3rem', width:'5rem', backgroundColor: 'red'}}  onClick={() => setResourceType('post')} >post</button>
       <button style={{height: '3rem', width:'5rem', backgroundColor: 'blue'}} onClick={() => setResourceType('users')} >users</button>
       <button style={{height: '3rem', width:'5rem', backgroundColor: 'green'}} onClick={() => setResourceType('comment')} >comment</button>
    </div>
    <h1>{resourceType}</h1>
    </div>
    
  );
}

export default App;
