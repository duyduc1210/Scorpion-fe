import React, { useState } from 'react';
import style from '../Menu/Menu.module.css'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FileOutlined,
  TeamOutlined,
  DesktopOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const { Header, Content, Footer, Sider } = Layout;
const items = [
  getItem('Admin', 'sub1', <UserOutlined />, [
    getItem('Loại phòng', '1'),
    getItem('Danh sách phòng', '2'),
    getItem('Thống kê', '3'),
    getItem('Tài  khoản', '4'),
    getItem('Dịch vụ tiện ích', '5'),
  ]),
  getItem('Staff', 'sub2', <TeamOutlined />, [
    getItem('Giao Dịch', '6'), 
    getItem('Danh Sách Đặt Phòng', '7'),
    getItem('Thông tin khách ở ', '8'),
    getItem('Sơ đồ phòng', '9'),
  ]),
  
];
const MenuLeft = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>   
      <Sider trigger={null} collapsible collapsed={collapsed}>
      
        <div className="demo-logo-vertical" />
        <p style={{
          color: "white",
          textAlign : "center",
          fontWeight : "bold",
          padding : "1rem",
          background: "#4CA110FF",
          marginBottom: "0px",
          marginTop: "0px",
          height:"64px",
          paddingTop: "20px",
        }}>SCORPION HOTEL</p>
        <Menu      
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                color: 'white',
                backgroundbackground: '#000000FF',
              }}
              items={items}
            />
      </Sider>
     
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuLeft;