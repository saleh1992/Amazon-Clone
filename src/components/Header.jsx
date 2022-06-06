/* eslint-disable jsx-a11y/alt-text */
import "../components/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logoImg from "../images/logo.png";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getAuth } from "firebase/auth";
import firebase from "./firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigation = useNavigate();

  // show dynamic email name beside Hello

  function handelAuthentication() {
    const auth = getAuth();
    if (user) {
      auth.signOut().then(() => {
        navigation("/");
      });
    }
  }

  return (
    <div className="header__main">
      <div className="header">
        <Link to="/" className="header_logo__container">
          <img className="header_logo" src={logoImg} />
        </Link>
        <div className="header_search">
          <input className="header_searchInput" type="text"  placeholder="Search Amazon"/>
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div className="header__option one" onClick={handelAuthentication}>
              <span className="header__optionLineOne">
                Hello,{" "}
                {user
                  ? user.email.substring(0, user.email.indexOf("@"))
                  : "Sign in"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Account & Lists"}
              </span>
              <PersonOutlineIcon className="user__icon" />
            </div>
          </Link>
          <Link to={user ? "/orders" : "/login"} className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
            <Link to="/checkout">
              <ShoppingBasketIcon />
            </Link>
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </div>
      </div>
      <div className="header_search_sm">
        <input className="header_searchInput" type="text" placeholder="Search Amazon" />
        <SearchIcon className="header__searchIcon" />
      </div>
    </div>
  );
}

export default Header;
