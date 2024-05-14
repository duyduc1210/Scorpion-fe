
const FooterPage = () => {
    return( <>
        <footer className="footer1">
          <div className="footer-container">
            <nav className="footer-nav">
              <div className="footer-description">
                <h3 className="footer-description-title">Scorpio Hotels</h3>
                <p>Sự hiếu khách và thoải mái được đặt lên hàng đầu</p>
              </div>
              <div className="footer-contact-us">
                <h3 className="footer-description-title">Liên hệ</h3>
                <p className="footer-description-detail"> 
                  <img src="./assets/img/map-pin.svg" className="footer-description-icon" alt="scorpion hotel location" />

                  <span> Muine Bay Resort, Thành Phố Phan Thiết, Bình Thuận</span></p>
                <p className="footer-description-detail">
                  <img src="./assets/img/phone.svg" className="footer-description-icon" alt="scorpion hotels phone number" /> 
                  <span>
                08185956620</span></p>
                <p className="footer-description-detail">
                  <img src="./assets/img/mail.svg" className="footer-description-icon" alt="scorpion hotels email" />
                  <span>support@scorpionhotels.com</span> </p>
              </div>
              <div className="footer-follow-us">
                <h3 className="footer-description-title">Theo dõi chúng tôi</h3>
                <ul className="footer-follow-us-lists">
                  <li className="follow-us-list">
                    <a href="">
                      <img src="./assets/img/facebook.svg" alt="scorpion hotels facebook page" />
                    </a>
                  </li>
                  <li className="follow-us-list">
                    <a href="">
                      <img src="./assets/img/twitter.svg" alt="scorpion hotels twitter page" />
                    </a>
                  </li>
                  <li className="follow-us-list">
                    <a href="">
                      <img src="./assets/img/instagram.svg" alt="scorpion hotels instagram page" />
                    </a>
                  </li>
                </ul>
                <br/>
              
              </div>
              
            </nav>
          </div>
	      </footer>
    </>);
}

export default FooterPage;    