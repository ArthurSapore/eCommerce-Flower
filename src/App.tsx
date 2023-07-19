import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PlanCard from './components/PlanCard';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';

function App() {
  return (
    <>  
      <Navbar />
      <Radio value='teste' checked/> 
    </>
  );
}

export default App;
