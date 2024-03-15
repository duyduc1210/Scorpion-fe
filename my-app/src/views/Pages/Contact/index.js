
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";

const Contact = () => {
  return (
    <>
    <HeaderPage/>
    <main>
        <div className="container">
          <div className="header">
            <h2>Contact Us</h2>
            <hr />
            <p>
              Interested in striking a partnership or do you have any complaint or feedback? Fill the form below
            </p>
          </div>
          <div className="main">
            <div className="contact">
              <div className="contact-form">
                <form action="#">
                  <div className="contact-detail">
                    <label htmlFor="name" className="hide">Enter your name</label>
                    <input type="text" className="form-control" placeholder="Name" id="name" />
                    <label htmlFor="email" className="hide">Enter your email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <label htmlFor="message" className="hide">message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                    style={{ resize: 'none', width: '100%' }}
                    name="message"
                  ></textarea>
                  <button type="submit" className="btn">SEND MESSAGE</button>
                </form>
              </div>
              <div className="contact-us">
                <h3>Contact Us</h3>
                <span>
                  <i style={{ fontSize: '1.5rem' }} className="fa fa-map-marker" aria-hidden="true"></i>
                  23, Fola osibo, Lekki phase 1
                </span>
                <span>
                  <i style={{ fontSize: '1.5rem' }} className="fa fa-phone" aria-hidden="true"></i>
                  08185956620
                </span>
                <span>
                  <i style={{ fontSize: '1.5rem' }} className="fa fa-envelope-o" aria-hidden="true"></i>
                  Support@starhotels.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    <FooterPage/>
    </>
  );
};

export default Contact;
