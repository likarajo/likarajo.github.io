import About from "../components/home/About";
import Cards from "../components/home/Cards";
import Scrollup from "../components/common/Scrollup";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <div id="home">
            <About />
            <Cards />
            <Scrollup />
        </div>
    )
}
  
export default Home
