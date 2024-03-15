
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";

const RoomAndSuit = () => {
  return (
    <>
    <HeaderPage/>
      <main>
        <div className="container">
          <div className="page-header-container">
            <h2 className="page-header">Scorpion Hotel Rooms</h2>
            <hr />
            <p className="page-sub-header">
              Get the most of our hotel specials. Enjoy the modern <br />
              comfort and panoramic view
            </p>
          </div>

          <section className="special-offers">
            <div className="row center-lg">
              <div className="col image-col right-marg">
                <img
                  src="assets/img/hotel-1.webp"
                  alt="room-image"
                  className="small-image"
                />
                <img
                  src="assets/img/hotel-2.webp"
                  alt="room-image"
                  className="small-image"
                />
                <img
                  src="assets/img/hotel-3.webp"
                  alt="room-image"
                  className="small-image"
                />
                <div className="side-by-side-container">
                  <div className="large-image-container">
                    <img
                      src="assets/img/hotel-4-large.webp"
                      alt="room-image-large"
                      className="large-image"
                    />
                  </div>
                  <section className="stacked-image-container">
                    <div>
                      <img
                        src="assets/img/hotel-5.webp"
                        alt="room-image"
                        className="small-image"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/img/hotel-6.webp"
                        alt="room-image"
                        className="small-image"
                      />
                    </div>
                  </section>
                </div>
              </div>
              <div className="col">
                <h3 className="offers-title">Special Offers</h3>
                <p className="offers-sub-title">
                  Get 10% discount off this city view- standard room. <br />{" "}
                  Offers valid till june 31st 2020
                </p>
                <ul className="offers-list">
                  <li>
                    <div>
                      <img
                        src="assets/img/check-square.svg"
                        alt="tick"
                        className="list-icon"
                      />
                      <p className="list-text">Free Wi-Fi Service</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="assets/img/check-square.svg"
                        alt="tick"
                        className="list-icon"
                      />
                      <p className="list-text">Best Rate Guarantee</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="assets/img/check-square.svg"
                        alt="tick"
                        className="list-icon"
                      />
                      <p className="list-text">Free DSTV Access</p>
                    </div>
                  </li>
                </ul>
                <a href="#" className="btn btn-fill btn-large">
                  View More
                </a>
              </div>
            </div>
          </section>

          <section className="rooms-section">
            
            <div className="row center-lg">
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_42_nastdj.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Standard Economic Single</h3>
                <p className="room-text">
                  Designed specifically for Practicality and <br /> comfort
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 Persons</p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">1 Kingsize bed</p>
                  </div>
                </div>
                <p className="amount-text">NGN25,000 Per Night</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    View More
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_43_d9eepu.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Standard Economic Single</h3>
                <p className="room-text">
                  Designed specifically for Practicality and <br /> comfort
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 Persons</p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/bed.png"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">1 Kingsize bed</p>
                  </div>
                </div>
                <p className="amount-text">NGN35,000 Per Night</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    View More
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_44_anerdv.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Standard Economic Single</h3>
                <p className="room-text">
                  Designed specifically for Practicality and <br /> comfort
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 Persons</p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/bed.png"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">1 Kingsize bed</p>
                  </div>
                </div>
                <p className="amount-text">NGN45,000 Per Night</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    View More
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_45_mtl458.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Standard Economic Single</h3>
                <p className="room-text">
                  Designed specifically for Practicality and <br /> comfort
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 Persons</p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/bed.png"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">1 Kingsize bed</p>
                  </div>
                </div>
                <p className="amount-text">NGN50,000 Per Night</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    View More
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    <FooterPage/>
    </>
  );
};

export default RoomAndSuit;
