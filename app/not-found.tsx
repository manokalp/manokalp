import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Manokalp Logo"
              width={150}
              height={50}
              className="mx-auto"
              priority
            />
          </Link>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-[#0E7EA0] text-6xl md:text-7xl font-bold mb-10">Coming Soon</h1>
          <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            The page you&apos;re looking for doesn&apos;t exist or under Development.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#0E7EA0] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0b6a86] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}