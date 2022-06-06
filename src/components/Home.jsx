import React from "react";
import "./Home.css";
import mainImg from "../images/main.jpg";
import mainImg2 from "../images/main2.jpg";
import mainImg3 from "../images/main3.jpg";
import mainImg4 from "../images/main4.jpg";
import Product from "./Product";
import Book1 from "../images/book1.jpg";
import Kenwood from "../images/Kenwood.jpg";
import smartband from "../images/smart-band.jpg";
import Echo from "../images/Amazon Echo.jpg";
import ipad from "../images/ipad.jpg";
import tv from "../images/tv.jpg";
import Header from "./Header";
// import MenuIcon from '@mui/icons-material/Menu';
import StarRateIcon from "@material-ui/icons/StarRate";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import Footer from "./Footer";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Nav from "./Nav";
// import 'swiper/css/Autoplay';

const Home = () => {
  return (
    <>
      <div>
        <Header />
<Nav/>
      </div>
      <div className="home">
        <div className="home__container">
          {/* <div className="home__image"><img  src={mainImg} alt="" /></div> */}

          <Swiper
            rewind={true}
            navigation={true}
            autoplay={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper home__image"
          >
            <SwiperSlide>
              <div className="home__image">
                <img src={mainImg} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__image">
                <img src={mainImg2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__image">
                <img src={mainImg3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__image">
                <img src={mainImg4} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup: How Constant
            Innovation Creates Radically Successful 
            Businesses Paperback"
              image={Book1}
              price={11.96}
              rating={5}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for
            Baking, Stylish Kitchen Mixer with
            K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              image={Kenwood}
              price={510}
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="49538824"
              title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate"
              image={smartband}
              price={169.89}
              rating={4}
            />
            <Product
              id="49576334"
              title="Amazon Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue"
              image={Echo}
              price={43.99}
              rating={5}
            />
            <Product
              id="42338824"
              title="New 2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
              image={ipad}
              price={850.86}
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="4233886034"
              title="SAMSUNG 49 Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, Black"
              image={tv}
              price={1094.98}
              rating={4}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
