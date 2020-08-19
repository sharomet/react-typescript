import React from 'react';
import Header from './components/header/Header'

const App: React.FC = ({ children }) => (
  <div className="wrapper">
    <Header/>
    {children}
  </div>
)

export default App;
