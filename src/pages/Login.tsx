import { useAuth } from "../auth/useAuth";

const LoginPage = () => {
 const { user, login, logout, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Internal Directory Tool</h1>
      {user ? (
        <>
          <p>Welcome, {user.userDetails}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Microsoft</button>
      )}
    </div>
  );
}
 
export default LoginPage;

