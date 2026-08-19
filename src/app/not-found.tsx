import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-main text-center">
        <p className="label mb-6">404</p>
        <h1 className="heading-lg mb-4">Page not found.</h1>
        <p className="body-lg text-text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
