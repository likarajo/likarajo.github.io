import Home from "@mui/icons-material/Home";

function Logo() {
    return (
        <a id="logo" className="logo-link" href="/" aria-label="Home">
            <Home sx={{ fontSize: 32, color: '#4a90e2' }} />
        </a>
    )
}

export default Logo
