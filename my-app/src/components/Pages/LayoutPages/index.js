import { Outlet } from "react-router-dom";
import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";

const LayoutPages = () => {
    return( 
    <>
        <HeaderPage/>
        <Outlet/>
        <FooterPage/>
    </>
    );
}

export default LayoutPages;    