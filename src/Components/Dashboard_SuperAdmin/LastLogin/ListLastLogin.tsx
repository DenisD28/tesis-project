import React from "react";
import BoxLastLogin from "./BoxLastLogin";

interface ListLastLoginProps {
    lastLogin: {
        name: string;
        last_login_at: string;
        tiempo_pasado: string;
      }[];
}

export default function ListLastLogin({ lastLogin }: ListLastLoginProps) {
  return (
    <>
      <span>
        <h3 className="text-lg font-semibold text-zinc-900 text-center flex justify-between items-center gap-4">
          Usuario
        </h3>
        <h3 className="text-lg font-semibold text-zinc-900 text-center flex justify-between items-center gap-4">
          Conexi&oacute;n
        </h3>
      </span>
      {
        lastLogin.map((user, index) => (
          <BoxLastLogin key={index} name={user.name} tiempo_pasado={user.tiempo_pasado} />
        ))
      }
    </>
  );
}
