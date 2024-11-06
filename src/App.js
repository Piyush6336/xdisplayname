import React,{ useState } from "react";

function App() {
  const[firstname,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[fullName,setFullName]=useState('');
  function first(e){
    setFirstName(e.target.value);
  }
  function last(e){
    setLastName(e.target.value);
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form >
        <label>First Name:</label>
        <input type="text" value={firstname} required onChange={first}/><br/>
        <label>Last Name:</label>
        <input type="text" value={lastName} required onChange={last}/><br/>
        {/* <input type="submit" value="Submit"/> */}
        <button type="submit" onClick={(e)=>{
          e.preventDefault();
          if(firstname && lastName){
          setFullName(`${firstname} ${lastName}`)
          }else{
            setFullName('');
          }
        }}>Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
