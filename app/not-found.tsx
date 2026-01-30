import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" style={{
        padding: '12px 24px',
        backgroundColor: '#ff6b35',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        Go Back Home
      </Link>
    </div>
  );
}
