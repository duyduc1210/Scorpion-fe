import React from "react";
import { dataRoom } from "../../../shared/db/dataRoom";
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";

const HomePage = () => {
  // const itemMenu = ['Home', 'ABout US','ROOMS','SERVICE' ,'CONTACT', 'GALLERY', 'SPECIAL']
  const [bookingMessage, setBookingMessage] = React.useState("");
  const itemMenu = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "ABout US",
      href: "/login",
    },
    {
      name: "ROOMS",
      href: "/home",
    },
    {
      name: "SERVICE",
      href: "/home",
    },
    {
      name: "CONTACT",
      href: "/home",
    },
    {
      name: "GALLERY",
      href: "/home",
    },
    {
      name: "SPECIAL",
      href: "/home",
    },
  ];

  const login = [
    {
      name: "SIGN UP",
      href: "/register",
    },
    {
      name: "SIGN IN",
      href: "/login",
    },
  ];
  const handleBooking = () => {
    setBookingMessage("Bạn đã đặt phòng thành công!");
  };

  return (
    <>
      <HeaderPage/>

        <div className="jumbotron-container">
          <div className="jumbotron-left">
            <h2 className="jumbotron-header">Discover the perfect balance <br/> of hospitality, luxury and <br/>comfort.</h2>
            <p>We are focused on providing clients with the highest level<br/>of comfort and excellent affordable rates</p>
					  <a href="https://timbu.com/search?query=hotel" className="btn btn-fill btn-large">Book Now</a>
		      </div>

          

        </div>

        <div className="enjoy-container">
          <div className="enjoy-header">
            <h2 className="enjoy-heading">Enjoy your stay <br/>at our hotel</h2>
            <hr className="horizontal"/>
            <p>We are more than being a hotel because we are able<br/> to combine the quality standard of a hotel with the<br/> advantages of an apartment.</p>
          </div>
        <div className="enjoy-services">
          <div className="first-col">
            <div className="upper">
                <span>
                  <img src="./assets/img/clock.svg" alt="clock icon" className="enjoy__clock-icon"/>
                </span>
                <h3>24 hours Room Service</h3>
                <p>You have access to 24-hours a day room service at our hotel.</p>
            </div>
            <div className="lower">
              <span>
                <img src="./assets/img/database.svg" alt="fitness icon" className="enjoy__fitness-icon"/>
              </span>
              <h3>Fitness and Spa</h3>
              <p>Access to fitness and Spa is part of our hotel package when you make a booking.</p>
            </div>
            
          </div>
          <div className="sec-col">
              <div className="upper">
                <span>
                  <img src="./assets/img/coffee.svg" alt="coffee icon" className="enjoy__coffee-icon"/>
                </span>
                  <h3>Restaurant and Bars</h3>
                <p>You have access to the world state of art restaurants and bars at our hotel</p>
              </div>
              <div className="lower">
                <span>
                  <img src="./assets/img/wifi.svg" alt="wifi icon" className="enjoy__wifi-icon"/>
                </span>
                  <h3>Free Wi-Fi Access</h3>
                  <p>You have access to 24-hours free Wi-Fi services irrespective of any room.</p>
              </div>
          </div>
          <div className="third-col cont">
            <img src="./assets/img/ant-design_play-circle-filled.svg" alt="video play icon" className="enjoy__play-icon"/>
            <img src="./assets/img/video link.webp" alt="women in swimming pool" className="third-col-video"/>
          </div>
	      </div>

	      </div>

        <section className="special-offers">
          <div className="page-header-container">
            <h2 className="page-header">Simplicity is the ultimate <br/>Watchword</h2>
          </div>
          <div className="row center-lg">
            <div className="col image-col right-marg">
              <img src="assets/img/hotel-1.webp" alt="room-image" className="small-image"/>
              <img src="assets/img/hotel-2.webp" alt="room-image" className="small-image"/>
              <img src="assets/img/hotel-3.webp" alt="room-image" className="small-image img-hide"/>
              <div className="side-by-side-container">
                <div className="large-image-container">
                  <img src="assets/img/hotel-4-large.webp" alt="room-image-large" className="large-image"/>
                </div>
                <section className="stacked-image-container">
                  <div><img src="assets/img/hotel-5.webp" alt="room-image" className="small-image"/></div>
                  <div><img src="assets/img/hotel-6.webp" alt="room-image" className="small-image"/></div>
                </section>
              </div>
            </div>
            <div className="col">
              <p className="offers-sub-title">
                  The fact that we are run by hospitality professionals<br/>and equipped with the world best interior designers <br/> is why our rooms and suites are second to none in <br/>the universe
              </p>
              <ul className="offers-list">
                <li>
                  <div>
                    <img src="assets/img/check-square.svg" alt="tick" className="list-icon"/>
                    <p className="list-text">Standard Room</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="assets/img/check-square.svg" alt="tick" className="list-icon"/>
                    <p className="list-text">Executive Room</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="assets/img/check-square.svg" alt="tick" className="list-icon"/>
                    <p className="list-text">King Suite</p>
                  </div>
                </li>
              </ul>
              <a href="https://timbu.com/search?query=hotel" className="btn btn-fill btn-large centered">Book Now</a>
            </div>
          </div>
		    </section>

        <div className="review-container">
          <div className="review-header">
            <h2 className="review-title">
              Client Reviews
            </h2>
            <hr className="horizontal"/>
            <p className="">We are very proud of the services we offer to our customers.<br/>Read every word from our happy customers.</p>
          </div>
          <div className="cards-container">
            <div className="card">
              <img src="./assets/img/customer1.webp" alt="" className="card-avi"/>
              <h2 className="card-title">
                  Mark Essien
              </h2>
              <h3 className="card-subtitle">
                Lagos, Nigeria.
              </h3>
              <p className="card-desc">Words can't explain the kind of treatment I received from the management of star hotels. They are the best in the country.</p>
            </div>
            <div className="card">
              <img src="./assets/img/customer2.webp" alt="" className="card-avi"/>
              <h2 className="card-title">
                  Seyi Onifade
              </h2>
              <h3 className="card-subtitle">
                  Lagos, Nigeria.
              </h3>
              <p className="card-desc">Star hotels makes you feel the best room quality that makes you feel the comfort of a home.</p>
            </div>
            <div className="card">
              <img 
                src="./assets/img/customer3.webp" 
                alt="" 
                className="card-avi"/>
              <h2 className="card-title">
                Fayemi David
              </h2>
              <h3 className="card-subtitle">
                Lagos, Nigeria.
              </h3>
              <p className="card-desc">My Family and I are very happy when we lodge into star hotels. They are by far the best in the universe.</p>
            </div>
          </div>
	      </div>

    <FooterPage/>
   
    </>
  );
};

export default HomePage;
