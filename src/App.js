import React from 'react';
import logo from './logo.svg';
import Login from './components/containers/login'
import NavigationBar from './components/containers/navbar'
import AccountInitAlert from './components/containers/AccountInitAlert'

function App() {
  return (
    <div>
      <NavigationBar />
      <Login />
      <AccountInitAlert />
    </div>
  );
}

export default App;
