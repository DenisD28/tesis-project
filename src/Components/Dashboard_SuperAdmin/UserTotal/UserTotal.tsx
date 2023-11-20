import React from "react";

export default function UserTotal({ countUser }: { countUser: number }) {
  return (
    <article className="md:col-span-4 col-span-full h-full rounded-md border-2 gap-4 flex justify-center items-center flex-col p-8">
      <h1 className="text-lg font-medium text-zinc-900 text-center flex justify-between items-center gap-4">
        Usuarios totales
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 p-2 rounded-lg bg-zinc-200/40 text-zinc-900"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      </h1>
      <p className="text-3xl text-zinc-500 font-bold text-center">{countUser}</p>
    </article>
  );
}
