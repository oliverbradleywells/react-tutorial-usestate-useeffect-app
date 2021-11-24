import './App.css';
import React, { useState, useEffect } from 'react';
import OtherComponent from './OtherComponent';

const App = () => {
  const [showComponent, setShowComponent] = useState(true);



  return (
    <div className="App">
      <button onClick={() => setShowComponent(true)}>Show Component</button>
      <button onClick={() => setShowComponent(false)}>Hide Component</button>

      {showComponent && <OtherComponent />}
    </div>
  );
};



// useState AND useEffect PART 1
// const App = () => {
//   const [count, setCount] = useState(5);
//   const [secondCount, setSecondCount] = useState(1);


//   useEffect(() => {
//     setCount(count + 1);
//   }, [secondCount]);


//   return (
//     <div className="App">
//       {count}-{secondCount}
//       <button onClick={() => setSecondCount(secondCount + 1)}>Increment Second</button>
//     </div>
//   );
// };

export default App;
