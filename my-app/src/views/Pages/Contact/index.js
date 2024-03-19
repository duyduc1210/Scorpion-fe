
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";

const Contact = () => {
  return (
    <>
    <HeaderPage/>
    <main>
        <div className="container">
          <div className="header">
            <h2>Liên hệ</h2>
            <hr />
            <p>
              Quan tâm đến việc hợp tác hoặc bạn có bất kỳ khiếu nại hoặc phản hồi nào không? Điền vào mẫu dưới đây
            </p>
          </div>
          <div className="main">
            <div className="contact">
              <div className="contact-form">
                <form action="#">
                  <div className="contact-detail">
                    <label htmlFor="name" className="hide">Điền tên của bạn</label>
                    <input type="text" className="form-control" placeholder="Điền tên của bạn" id="name" />
                    <label htmlFor="email" className="hide">Điền địa chỉ email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Điền địa chỉ email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <label htmlFor="message" className="hide">Nội dung</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Nội dung"
                    style={{ resize: 'none', width: '100%' }}
                    name="message"
                  ></textarea>
                  <button type="submit" className="btn">Gửi tin nhắn</button>
                </form>
              </div>
              <div className="contact-us">
                <h3>Liên hệ với chúng tôi</h3>
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
