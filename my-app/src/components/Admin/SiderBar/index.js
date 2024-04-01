import { Layout, Menu } from "antd";
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const SiderBar = ({collapsed, items}) => {
  const navigate = useNavigate();
  return (
    <>
    
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div className="demo-logo-vertical" /> */}
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "Green",
            marginTop: "0px",
            marginBottom: "0px",
            height:"64px",
            paddingTop:"20px",
            fontsize: "0px",
          }}
        >
          SCORPION HOTEL
        </p>
        <Menu
        
          onClick={({key}) => {
            if(key){
              navigate(key);
            }
          }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            paddingTop: "0px"
          }}
          items={items}
        />
      </Sider>
    </>
  );
};

export default SiderBar;
