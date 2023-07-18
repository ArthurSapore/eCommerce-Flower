import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PlanCard from './components/PlanCard';

function App() {
  return (
    <>  
      <Navbar /> 
      <PlanCard/>
    </>
  );
}

export default App;
