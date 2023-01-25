import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function LoginPage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="App">
      <h1>LoginPage</h1>
      <hr />
      <button
        onClick={() =>
          setUser({
            id: 123,
            name: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
          })
        }
        className="btn btn-outline-primary"
      >
        Set User
      </button>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
}

export default LoginPage;
