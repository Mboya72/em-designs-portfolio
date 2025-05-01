import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  text-center w-full h-[100vh] overflow-hidden bg-[url(/aboutback.png)] bg-cover bg-no-repeat p-8">
      <div className="mr-7">
         <h1 className="text-5xl font-bold text-[#CCFF00] mb-4">🚧 Under Construction</h1>
      <p className="text-lg text-gray-500 mb-6">
        This page is currently being built. Check back soon!
      </p>
      <Link
        href="/"
        className="text-blue-500 hover:underline font-medium text-lg"
      >
        Return to homepage →
      </Link>
      </div>
     
    </main>
  );
}
