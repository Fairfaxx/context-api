import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { NavBar } from './NavBar';

function App() {
  return (
    <UserProvider>
      <NavBar />
      <hr />

      <Outlet />
    </UserProvider>
  );
}

export default App;
