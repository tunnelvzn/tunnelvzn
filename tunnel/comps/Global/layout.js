import {React, useContext} from 'react';
import NavBar from '../NavBar'
import {GlobalProvider, GlobalContext} from './useGlobalContext'
const Layout = ({ children }) => {
    const {nav} = useContext(GlobalContext);
  // Render your navbar component here
    return (
    <GlobalProvider>
      <NavBar />
      {children}
    </GlobalProvider>
  );
};

export default Layout;