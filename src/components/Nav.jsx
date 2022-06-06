import "./Nav.css";
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <a href="#" alt="All">
          <MenuIcon /> All
        </a>
        <a href="#" alt="Today's Deals">
          Today's Deals
        </a>
        <a href="#" alt="Customer Service">
          Customer Service
        </a>
        <a href="#" alt="Registry">
          Registry
        </a>
        <a href="#" alt="Gift Cards">
          Gift Cards
        </a>
        <a href="#" alt="Sell">
          Sell
        </a>
      </div>
      <a href="#" alt="Shop">
        Shop Father's Day Gifts
      </a>
    </div>
  );
};

export default Nav;
