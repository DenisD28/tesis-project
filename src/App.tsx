import { Nav } from "./Components/Navegador/Nav"
import Footer from "./Components/Footer/Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { Menu } from "./Components/Menu/Menu"
import { useEffect } from "react"
import Cookies from 'js-cookie'

const App = (): JSX.Element => {

  const navigate = useNavigate()


  useEffect(() => {
    const encryptedToken = Cookies.get('authToken');
    if (encryptedToken === undefined) {
      navigate("/")
    }
  })

  return (<>
    <main className="w-full h-screen flex justify-between flex-col">
      <div className="w-full h-full flex overflow-y-auto">
        <section className="w-[25rem] h-full overflow-y-auto scroll-hidden border-r-2 xl:block hidden">
          <Menu />
        </section>
        <section className="w-full h-full overflow-y-auto scroll-hidden">
          <article className="w-full sticky top-0 z-10">
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