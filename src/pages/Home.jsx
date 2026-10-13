import Profile from "../components/home/Profile";
import Scrollup from "../components/common/Scrollup";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id="home">
            <Profile />
            <Scrollup />
        </div>
    );
}

export default Home;
