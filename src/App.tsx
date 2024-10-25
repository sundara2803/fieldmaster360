// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.tsx
// import React from 'react';
// import CricketField from './components/CricketField';
// import './App.css';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <h1>FieldMaster360 - Cricket Field Planner</h1>
//       <CricketField />
//     </div>
//   );
// };

// export default App;
// src/App.tsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CricketField from './components/CricketField';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <CricketField />
    </DndProvider>
  );
};

export default App;

