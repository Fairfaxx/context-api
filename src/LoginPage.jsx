import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function LoginPage() {
  const user = useContext(UserContext);
  console.log(user.user);
  return (
    <div className="App">
      <h1>LoginPage</h1>
      <hr />
    </div>
  );
}

export default LoginPage;
