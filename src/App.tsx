import { BrowserRouter, Route, Routes } from "react-router"
import { routes } from "./routes"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            const path = route.path;

            const Layout = route.layout;
            const Page = route.component;

            const element = <Layout><Page /></Layout>

            return <Route path={path} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
