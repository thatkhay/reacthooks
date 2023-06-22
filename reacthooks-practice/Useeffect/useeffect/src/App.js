
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [resourceType, setResourceType] = useState()

useEffect(() =>{
console.log('onmount');
}, [resourceType])
  return (
    <>
    <div className="App">
       <button onClick={() => setResourceType('post')} >post</button>
       <button onClick={() => setResourceType('users')} >users</button>
       <button onClick={() => setResourceType('comment')} >comment</button>
    </div>
    <h1>{resourceType}</h1>
    </>
    
  );
}

export default App;
