import React, { useState } from 'react';
import fakeData from './utilities/fakeData';

function App() {
  const [data,setData]=useState(fakeData);
  console.log(data);
  const {name,image}=data[0];
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" />
    </div>
  );
}

export default App;
