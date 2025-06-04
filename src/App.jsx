import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import Artist from "./Pages/Artist";
import Developer from "./Pages/Developer";
import Designer from "./Pages/Designer";
import Editor from "./Pages/Editor";
import Replyguy from "./Pages/Replyguy";
import Writer from "./Pages/Writer";
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Wwebfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
     </Helmet>
    <BrowserRouter>
        <Routes>
          <Route path="/Artist" element={<Artist />} />j
          <Route path="/" element={<Home />} />
          <Route path="/Developer" element={<Developer />} />
          <Route path="/Editor" element={<Editor />} />
          <Route path="/Writer" element={<Writer />} />
          <Route path="/Replyguy" element={<Replyguy />} />
          <Route path="/Designer" element={<Designer />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
