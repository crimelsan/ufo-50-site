import Header from "./components/header.jsx"
import Navbar from "../components/navbar.jsx"
import Body from "./components/body.jsx"

export default function Main() {
    return (
        <>
            <audio src="/assets/audio/Recovery-Team.mp3" autoPlay/>
            <Header/>
            <Navbar/>
            <Body/>
            <footer>
                <img className="bottom" src="./assets/images/footer.png"/>                
            </footer>
        </>
    )
}