import React, { useState } from 'react';
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";
import { message } from "antd";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const [messageApi, contextHolder] = message.useMessage();

  const onClickCT = () => {
    messageApi.open({
      type: 'success',
      content: 'Gửi thành công',
    });
    // Sau khi gửi tin nhắn thành công, xóa nội dung của các trường input
    setName('');
    setEmail('');
    setMessageContent('');
  };

  return (
    <>
      {contextHolder}
      <HeaderPage />

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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Điền tên của bạn"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email" className="hide">Điền địa chỉ email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Điền địa chỉ email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <label htmlFor="message" className="hide">Nội dung</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Nội dung"
                    style={{ resize: 'none', width: '100%' }}
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                  ></textarea>
                  <button type="button" className="btn" onClick={onClickCT} >Gửi tin nhắn</button>
                </form>
              </div>
              <div className="contact-us">
                <h3>Liên hệ với chúng tôi</h3>
                <span>
                  <i style={{ fontSize: '1.5rem' }} className="fa fa-map-marker" aria-hidden="true"></i>
                  Muine Bay Resort, Thành Phố Phan Thiết, Bình Thuận
                </span>
                <span>
                  <i style={{ fontSize: '1.5rem' }} className="fa fa-phone" aria-hidden="true"></i>
                  08185956620
                </span>
                <span>
                  <i style={{ fontSize: '1.5rem' }} className="fa fa-envelope-o" aria-hidden="true"></i>
                  Support@scorpion.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterPage />
    </>
  );
};

export default Contact;
