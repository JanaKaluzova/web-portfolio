import "./Home.scss";
import Logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { LogoComponent } from "./logo/Logo";

const Home: React.FC = () => {
  return (
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
  );
};

export default Home;
