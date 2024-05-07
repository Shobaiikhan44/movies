
import './App.css';
import React, { Component } from 'react';
import Counter from './componets/counter';
import Movies from './componets/movie';
function App() {
  return (
    <div className="App">
<main className="container"> 



   <Counter/>
   <Movies/>

</main>

   
    </div>
  );
}
export default App;
