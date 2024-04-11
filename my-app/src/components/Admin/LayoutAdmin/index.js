import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

import { Layout, Button, theme } from "antd";
import SiderBar from "../SiderBar";
import { Outlet } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const { Header, Content } = Layout;
const items = [
  getItem("Admin", "sub1",<UserOutlined />, [
    getItem("Loại phòng", "room-types"),
    getItem("Danh sách phòng", "rooms"),
    getItem("Thống kê", "thong-ke"),
    getItem("Tài  khoản", "accounts"),
    getItem("Dịch vụ tiện ích", "utility-service"),
  ]),
  getItem("Staff", "sub2", <TeamOutlined />, [
    getItem("Giao Dịch", "6",null,[
      getItem('Tạo giao dịch', 'create-transaction'),
      getItem('Danh sách giao dịch', '62'),
      getItem('Lịch sử', '63'),
    ]),
    getItem("Danh Sách Đặt Phòng", "reservation-list"),
    getItem("Thông tin khách ở ", "guest-information"),
    getItem("Sơ đồ phòng", "room-diagram"),
  ]),
];
const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <SiderBar collapsed={collapsed} items={items} />

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
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
