import React from 'react';
import style from '../Home/Home.module.css'
import { dataRoom } from './helper/dataRoom';

const HomePage = () => {
  // const itemMenu = ['Home', 'ABout US','ROOMS','SERVICE' ,'CONTACT', 'GALLERY', 'SPECIAL']
  const [bookingMessage, setBookingMessage] = React.useState('');
  const itemMenu = [
    {
      name: 'Home',
      href: '/home'
    },
    {
      name: 'ABout US',
      href: '/login',
    },
    {
      name: 'ROOMS',
      href: '/home'
    },
    {
      name: 'SERVICE',
      href: '/home'
    },
    {
      name: 'CONTACT',
      href: '/home'
    },
    {
      name: 'GALLERY',
      href: '/home'
    },
    {
      name: 'SPECIAL',
      href: '/home'
    },

  ]

  const login = [

    {
      name: 'SIGN UP',
      href: '/register'
    },
    {
      name: 'SIGN IN',
      href: '/login',
    },
  ]
  const handleBooking = () => {
    setBookingMessage('Bạn đã đặt phòng thành công!');
  };

  return (
    <div>
      <div className={style.banner}>
        <div class="rectangle">
          <div><i class="fa-solid fa-location-dot"></i>39 Tho Nhuom St, Hoan Kiem Dst,Ha Noi, Viet Nam</div>
          <div><i class="fa-solid fa-phone"></i>(+84)379309868 Whatsapp/ Zalo available</div>
        </div>
        <div>SCORPION HOTEL</div>
      </div>
      <div>
        <div class="logo"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQK8GJFliZfjzVn9IfYzBhiNwllZrt43biA&usqp=CAU"
          alt="Scorpion"
        /></div>

        <ul>
          {itemMenu.map((item) => {
            return (
              <li>
                <a href={item.href}>{item.name}</a>
              </li>
            )
          })}
        </ul>
        <div className={style.logo}>
          {login.map((item) => {
            return (
              <div class="logoSignUp">
                <a href={item.href}>{item.name}</a>
              </div>
            )
          })}

        </div>
      </div>


      <h2>ROOMS & SUITES</h2>


      <div class="">
        {dataRoom.map((item) => {
          return (
            <div>
              <div class="item">
                <h3>{item.type}</h3>
                <p>GIÁ TIỀN:{item.prices}</p>
                <p>GIƯỜNG: {item.bad}</p>
                <p>SỐ LƯỢNG NGƯỜI TỐI ĐA:{item.limitedPer}</p>
                <p>DIỆN TÍCH: {item.s}</p>
                <p>HƯỚNG NHÌN: {item.huong}</p>
                <p>BAO GỒM: {item.baoGom}</p>
                <button onClick={handleBooking}>VIEW DETAIL</button>
                {bookingMessage && <p>{bookingMessage}</p>}
              </div>
              <div class="navbar">
                <img class="img-responsive" src={item.image} />
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default HomePage;