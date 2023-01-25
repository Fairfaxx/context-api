import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function HomePage() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="App">
      <h1>
        HomePage{' '}
        <small>
          {user?.name}

          {user?.lastName}
        </small>
      </h1>
      <hr />

      {user ? <pre>{JSON.stringify(user, null, 3)}</pre> : null}
    </div>
  );
}

export default HomePage;
