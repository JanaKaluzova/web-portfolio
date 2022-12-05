import "./Home.scss";
import Logo from "../../assets/images/logoIcon.png";
import { Link } from "react-router-dom";
import { LogoComponent } from "./logo/Logo";
import Loader from "react-loaders";

const Home: React.FC = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={Logo} alt="developer" />
            ana, <br />a frontend developer
          </h1>
          <h2>React | TypeScript</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <LogoComponent />
      </div>

      <Loader type="pacman" active />
    </>
  );
};

export default Home;
