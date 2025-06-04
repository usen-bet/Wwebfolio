import { Link } from "react-router"
import "./Style/Home.scss"
import Sakamotobgdesk1 from "../assets/Sakamotobgdesk1.png"
import Navbar from "../Components/Navbar"

function Home() {
  return (
    <div className="homepage">
      <Navbar />
        <div className="Hero-words">
          <p>I am Wwebworker</p>
          <div className="words1">
            <Link className="big-link developer" to="/Developer">Developer</Link>
          </div>
          <div className="words1">
            <Link className="big-link1 designer" to="/Designer">Designer</Link>
            <Link className="big-link editor" to="/Editor">Editor</Link>
          </div>
          <div className="words1">
            <Link className="big-link writer" to="/Writer">Writer</Link>
            <Link className="big-link1 artist" to="/Artist">Artist</Link>
            <Link className="big-link reply" to="/Replyguy">Intern</Link>
            </div>
          </div>
          <div className="img-container">
            <img src={Sakamotobgdesk1} className="img" alt="saka" />
          </div>
    </div>
  )
}

export default Home
