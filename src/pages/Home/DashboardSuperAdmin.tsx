import React from "react";
import ListLastLogin from "../../Components/Dashboard_SuperAdmin/LastLogin/ListLastLogin";
import UserTotal from "../../Components/Dashboard_SuperAdmin/UserTotal/UserTotal";
import DiskComponent from "../../Components/Dashboard_SuperAdmin/DiskComponent/DiskComponent";
import useInfoDashboard from "../../hooks/Dashboard/useInfoDashboard";

export default function DashboardSuperAdmin() {
  const { disk, countUsers, lastLogin } = useInfoDashboard();
  return (
    <main className="w-full grid grid-cols-12 gap-8">
      <section className="col-span-full grid grid-cols-12 gap-4">
        <UserTotal countUser={countUsers}/>
        <article className="md:col-span-8 col-span-full h-full rounded-md border-2 gap-2 flex justify-center items-center flex-col p-4">
          <h1 className="text-xl font-semibold text-zinc-900 text-center flex justify-between items-center gap-4">
            Ultimos usuarios conectados
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 p-2 rounded-lg bg-zinc-200/40 text-zinc-900"
            >
              <path
                fillRule="evenodd"
                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <div className="w-full max-w-[20rem] [&>span]:flex [&>span]:justify-between [&>span]:items-center">
            <ListLastLogin lastLogin={lastLogin} />
          </div>
        </article>
        <DiskComponent disk={disk} />
      </section>
    </main>
  );
}
