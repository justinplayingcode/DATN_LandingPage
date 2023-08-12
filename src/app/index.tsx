import { Route, HashRouter , Routes, Navigate } from 'react-router-dom'
import Layout from './structure';
import "./index.scss";
import Home from './page/Home';
import About from './page/About';
import Services from './page/Service';
import News from './page/News';
import Contact from './page/Contact';

const App: React.FunctionComponent = () => {

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Layout content={<Home/>}/>} />
        <Route path="/about" element={<Layout content={<About/>}/>} />
        <Route path="/service" element={<Layout content={<Services/>}/>} />
        <Route path="/news" element={<Layout content={<News/>}/>} />
        <Route path="/contact" element={<Layout content={<Contact/>}/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
