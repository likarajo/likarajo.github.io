import Logo from "./header/Logo";
import Navbar from "./header/Navbar";

function Header() {
    return (
        <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', height:50, width:'100%'}}>
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header
