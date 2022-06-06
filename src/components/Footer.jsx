import "./Footer.css";
import logoImg from "../images/logo.png";
import logoContry from "../images/contry.png";
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <footer>
      <div className="back__home">
        <a href="#"> Back To Top</a>
      </div>
      <div className="footer__links">
        <div className="footer__col">
          <div className="footer__head">Get to Know Us</div>
          <ul>
            <li className="nav_first">
              <a href="#" className="nav_a">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                About Amazon
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Amazon Devices
              </a>
            </li>
            <li className="nav_last ">
              <a href="#" className="nav_a">
                Amazon Science
              </a>
            </li>
          </ul>
        </div>
        <div className="#"></div>
        <div className="footer__col">
          <div className="footer__head">Make Money with Us</div>
          <ul>
            <li className="nav_first">
              <a href="#" className="nav_a">
                Sell products on Amazon
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Sell on Amazon Business
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Sell apps on Amazon
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Become an Affiliate
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Advertise Your Products
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Self-Publish with Us
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Host an Amazon Hub
              </a>
            </li>
            <li className="nav_last nav_a_carat">
              <a href="#" className="nav_a">
                See More Make Money with Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__head">Amazon Payment Products</div>
          <ul>
            <li className="nav_first">
              <a href="#" className="nav_a">
                Amazon Business Card
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Shop with Points
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Reload Your Balance
              </a>
            </li>
            <li className="nav_last ">
              <a href="#" className="nav_a">
                Amazon Currency Converter
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__head">Let Us Help You</div>
          <ul>
            <li className="nav_first">
              <a href="#" className="nav_a">
                Amazon and COVID-19
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Your Account
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Your Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Shipping Rates &amp; Policies
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Returns &amp; Replacements
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Manage Your Content and Devices
              </a>
            </li>
            <li>
              <a href="#" className="nav_a">
                Amazon Assistant
              </a>
            </li>
            <li className="nav_last ">
              <a href="#" className="nav_a">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__final__links">
        <div className="footer__logo"><img src={logoImg} alt="footer logo" /></div>
        
        <div className="footer__row__links">
          <div className="footer__language"><LanguageIcon className="footer__icon"/> English</div>
          <div className="footer__currency">USD - U.S. Dollar</div>
          <div className="footer__country"> <img src={logoContry} alt="" /> United States</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
