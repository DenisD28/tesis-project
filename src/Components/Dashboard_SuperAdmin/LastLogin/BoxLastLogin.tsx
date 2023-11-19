import React from "react";

interface BoxLastLoginProps {
    name: string;
    tiempo_pasado: string;
}

export default function BoxLastLogin({ name, tiempo_pasado }: BoxLastLoginProps) {
  return (
    <span>
      <h3 className="text-lg font-semibold text-zinc-500 text-center flex justify-between items-center gap-4">
        {name}
      </h3>
      <h3 className="text-lg font-semibold text-zinc-500 text-center flex justify-between items-center gap-4">
        {tiempo_pasado}
        <div className="w-2 h-2 bg-green-600 rounded-full "></div>
      </h3>
    </span>
  );
}
