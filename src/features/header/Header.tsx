import { useTelegram } from "@hooks";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useTelegram();

  return (
    <header>
      <h1>{user?.username}</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
