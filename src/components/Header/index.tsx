import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Buttons />
    </header>
  );
};

export default Header;
