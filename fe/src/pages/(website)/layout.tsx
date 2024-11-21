import { Outlet } from "react-router-dom";
import HeaderWebsite from "../../components/Header/HeaderWebsite";
import FooterWebsite from "../../components/Footer/FooterWebsite";

const LayoutWebsite = () => {
    return (
        <div>
            <header>
                <HeaderWebsite />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <FooterWebsite />
            </footer>
        </div>
    );
};

export default LayoutWebsite;
