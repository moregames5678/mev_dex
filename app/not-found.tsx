import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mt-[-120px] flex h-screen w-[1240px] flex-col items-center justify-center">
      <h1 className="">Not found – 404!</h1>
      <div className="mt-2">
        <Link href="/" className="text-blue-500 text-magenta">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
