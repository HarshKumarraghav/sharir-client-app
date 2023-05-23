import React from 'react';
import Router from './Routes/Router';
import {AuthProvider} from './Context/AuthContext';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
