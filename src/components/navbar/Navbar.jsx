import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
