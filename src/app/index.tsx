import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Layout from './structure';
import "./index.scss";
import Home from './page/Home';
import About from './page/About';
import Services from './page/Service';
import News from './page/News';
import Contact from './page/Contact';

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
      element: <Services/>
    },
    {
      path: "/news",
      element: <News/>
    },
    {
      path: "/contact",
      element: <Contact/>
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
