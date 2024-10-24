"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className=" bg-black text-white h-screen px-4 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg mb-8">
        We encountered an unexpected error. Please try again later.
      </p>
      <button className=" font-bold py-2 px-4 rounded text-shadow text-white bg-yellow-500 border-0 focus:outline-none hover:bg-gray-100 hover:text-black transition-colors">
        <Link href="/">Try Again</Link>
      </button>
    </div>
  );
}
