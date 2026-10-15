import Home from "@mui/icons-material/Home";

function Logo() {
    return (
        <a id="logo" className="logo-link" href="/" aria-label="Home">
            <Home sx={{ fontSize: 32, color: 'inherit' }} />
        </a>
    )
}

export default Logo
