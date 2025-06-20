// src/pages/NotFound.tsx (or components/NotFound.tsx)
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '1rem',
    }}>
        <h1 style={{
            fontSize: '3rem',
            marginBottom: '1rem',
        }}>404 - Page Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" style={{
        marginTop: '1rem',
        color: '#0366d6',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}>
        Go back home
      </Link>
    </div>
  );
}
