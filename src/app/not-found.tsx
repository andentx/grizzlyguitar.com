import Footer from "@/components/layout/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex w-full flex-grow flex-col items-center justify-center px-4 pt-12 pb-32 sm:px-6 sm:pt-16 lg:px-8">
        <h1 className="mb-4 font-[family-name:var(--font-averia-regular)] text-6xl text-gray-800">
          404
        </h1>
        <h2 className="mb-8 text-2xl text-gray-600">Page Not Found</h2>
        <Link
          href="/"
          className="mb-20 flex w-64 items-center justify-center rounded-md border border-solid border-black bg-amber-400 px-8 py-3 text-base font-medium text-black shadow hover:bg-amber-500 focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:outline-none"
        >
          Go back home
        </Link>
      </div>
      <Footer />
    </>
  );
}
