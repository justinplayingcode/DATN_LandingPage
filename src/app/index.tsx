import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Layout from './structure';
import "./index.scss";
import Home from './page/Home';
import About from './page/About';

const App: React.FunctionComponent = () => {

  const routerStructure = [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/service",
      element: <>dịch vụ</>
    },
    {
      path: "/news",
      element: <>news</>
    },
    {
      path: "/contact",
      element: <>liên hệ</>
    },
  ]

  return (
    <Router>
      <Routes>
          {routerStructure.map((page) => {
            return <Route path={`${page.path}`} element={<Layout content={page.element}/>} />
          })}
      </Routes>
    </Router>
  )
}

export default App
