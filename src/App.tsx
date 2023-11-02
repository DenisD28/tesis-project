import { Nav } from "./Components/Navegador/Nav"
import Footer from "./Components/Footer/Footer"
import { Outlet } from "react-router-dom"
import { Menu } from "./Components/Menu/Menu"

const App = (): JSX.Element => {

  return (<>
    <main className="w-full h-screen flex justify-between flex-col">
      <div className="w-full h-full flex overflow-y-auto">
        <section className="w-[25rem] h-full overflow-y-auto scroll-hidden border-r-2 xl:block hidden">
            <Menu />
        </section>
        <section className="w-full h-full overflow-y-auto scroll-hidden">
          <article className="w-full sticky top-0 z-50">
            <Nav />
          </article>
          <article className="w-full p-8">
            <Outlet />
          </article>
        </section>
      </div>
      <Footer />
    </main>
  </>)
}

export default App