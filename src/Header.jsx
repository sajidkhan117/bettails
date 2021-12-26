import "./Header.css";
import logo from "./logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <input
        type="search"
        placeholder="Find teams,competetions,races and more,"
      />
      <div className="header-right">
        <input type="text" placeholder="email/username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
        <button>Join</button>
      </div>
    </div>
  );
};

export default Header;
