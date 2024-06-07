import { Nav } from "./Components/Navegador/Nav"
import Footer from "./Components/Footer/Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { Menu } from "./Components/Menu/Menu"
import {useEffect, useState} from "react"
import Cookies from 'js-cookie'
import { GlobalProvider } from "./hooks/useUserContext"

const App = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const navigate = useNavigate()


  useEffect(() => {
    const encryptedToken = Cookies.get('authToken');
    if (encryptedToken === undefined) {
      navigate("/")
    }
  })

  return (<>
    <main className="w-full h-screen flex justify-between flex-col">
      <GlobalProvider>
        <div className="w-full h-full flex overflow-y-auto">
          <section className={`lg:w-[25rem] w-full lg:relative ${showMenu ? 'lg:block' : 'hidden lg:block'} transition-all absolute lg:z-0 z-50 lg:top-0 top-16 left-0 h-screen pb-32 lg:pb-0 lg:h-full overflow-y-auto scroll-hidden border-r-2 lg:block bg-white`}>
            <Menu setShowMenu={setShowMenu} />
          </section>
          <section className="w-full h-full overflow-y-auto scroll-hidden">
            <article className="w-full sticky top-0 z-10">
              <Nav setShowMenu={setShowMenu} showMenu={showMenu} />
            </article>
            <article className="w-full p-8">
              <Outlet />
            </article>
          </section>
        </div>
        <Footer />
      </GlobalProvider>
    </main>
  </>)
}

export default App