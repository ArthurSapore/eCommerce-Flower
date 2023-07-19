import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PlanCard from './components/PlanCard';
import Checkbox from './components/Checkbox';

function App() {
  return (
    <>  
      <Navbar /> 
      <Checkbox value={'Checkbox'} disabled={true} checked={true}/>
    </>
  );
}

export default App;
