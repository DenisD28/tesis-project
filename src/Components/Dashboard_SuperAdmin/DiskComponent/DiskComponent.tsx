import React from "react";
import DiskChart from "../../Chartjs/Disk/DiskChar";

interface DiskComponentProps {
    disk: {
        unit: string;
        totalSpace: number;
        freeSpace: number;
        usedSpace: number;
    };
}

export default function DiskComponent({ disk }: DiskComponentProps) {
  return (
    <article className="col-span-full h-auto rounded-md border-2 flex flex-col justify-center items-center gap-4 p-8">
      <h1 className="text-2xl font-semibold text-center">Disco</h1>
      <span className="h-auto w-full grid grid-cols-12">
        <section className="h-96 md:col-span-9 col-span-full">
          <DiskChart disk={disk} />
        </section>
        <section className="md:col-span-3 col-span-full flex justify-start items-start flex-col gap-2">
          <p className="py-4 font-semibold">Informaci&oacute;n</p>
          <section className="w-full flex justify-between items-center font-medium">
            <p>Unidad</p>
            <p>{disk.unit}</p>
          </section>
          {
            [disk.totalSpace, disk.freeSpace, disk.usedSpace].map((item, index) => (
                <section key={index} className="w-full flex justify-between items-center font-medium">
                    <p>{index === 0 ? "Espacio total" : index === 1 ? "Espacio libre" : "Espacio usado"}</p>
                    <p>{item} GB</p>
                </section>
                ))
          }
        </section>
      </span>
    </article>
  );
}
