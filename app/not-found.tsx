import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1 style={{ fontSize: '4rem' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" style={{ color: '#F4830F', fontSize: 'large' }}>
        Go back home
      </Link>
    </div>
  );
}
