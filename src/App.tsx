import React,{useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { AuthContext } from './Context/AuthContext';
import Login from './Pages/Login/Login';

function App() {
  const authContext = useContext(AuthContext);
  
  let content = <Login/>;
  if (authContext.isAuth) {
    content = <LandingPage/>
  }

  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;
