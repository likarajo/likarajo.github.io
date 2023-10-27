import { useEffect } from "react";

function NotFound() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <div id="notfound" style={{justifyContent: 'center'}}>
            <h2 style={{width: "200px", margin: "0 auto", paddingTop: "100px"}}>Page not found</h2>
        </div>
    )
}
  
export default NotFound
