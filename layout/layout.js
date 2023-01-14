import Head from "next/head";
import { Sidebar } from "../components/Sidebar";

export default function Layout({ children, page}) {
  return (
    <>
      <Head>
        <title>Cafe - {page} </title>
        <meta name="description" content="Food Order Manager"/>
      </Head>

      <div className="md:flex bg-yellow">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar></Sidebar>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  )
}