import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex justify-center min-h-screen p-5 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div>
        <p className="mt-20 ml-4 text-4xl font-bold sm:ml-0 sm:text-5xl">
          My Blogs
        </p>
        <Link
          href={
            "https://thin-guppy-dc9.notion.site/16-2-NextAuth-1b0ebb4a8d0a80bc8d9dfaeb537ee27e?pvs=74"          }
          >
          <div className="cursor-pointer ">
            <p className="ml-3 text-2xl hover:underline sm:ml-0 mt-14 sm:text-3xl">
              How to Do Authentication in Next.js with NextAuth.js
            </p>
            <p className="mt-3 ml-3 text-md sm:text-lg sm:ml-0 text-neutral-400">
              Learn how to implement authentication in your Next.js applications using NextAuth.js. This guide covers everything from setting up the library to managing user sessions and securing your routes.
            </p>
            <p className="ml-3 text-xs text-neutral-400 sm:ml-0">
              May 15, 2025
            </p>
          </div>
        </Link>
        <Link
          href={
            "https://thin-guppy-dc9.notion.site/week13LSTProject-liquid-staking-token-20debb4a8d0a800aa4a4daf40ed62bf1?pvs=74"          }
          >
          <div className="cursor-pointer ">
            <p className="ml-3 text-2xl hover:underline sm:ml-0 mt-14 sm:text-3xl">
              how to make a Liquid Staking Token Project
            </p>
            <p className="mt-3 ml-3 text-md sm:text-lg sm:ml-0 text-neutral-400">
            1. tracks the blockchain for incoming transactions to an address we own
2. Anytime SOL comes to this address, we mint our custom token to that address(HSOL). The amount depends on the mathematical formula
3. whenever the user returns some token, we will return them SOL in a similar amount
            </p>
            <p className="ml-3 text-xs text-neutral-400 sm:ml-0">
              May 11, 2025
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
