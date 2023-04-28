import React from 'react';
import NavBar from '../NavBar'
import {GlobalProvider} from './useGlobalContext'
const Layout = ({ children }) => {
  // Render your navbar component here
    return (
    <GlobalProvider>
      <NavBar />
      {children}
    </GlobalProvider>
  );
};

export default Layout;