import Navbar from "/src/components/navbar.jsx"
import Header from "./components/header.jsx"
import Carts from "./components/carts.jsx"

export default function Main() {
    return (
        <>
            <audio src="/assets/audio/UFO-50.mp3" autoPlay/>
            <Header/>
            <Navbar/>
            <div className="text">
                <h1>History of UFO 50</h1>
                <p>
                    UFO 50 is an unreleased game collection of UFO Soft's greatest hits on their LX System gaming consoles. It contains 50 games from 1982 to 1989.
                    UFO Soft is a former software company turned game company co-founded by Benedikt Chun and Gerry Smolski. However, UFO Soft was most
                    recenty ran by Benedikt Chun and Tao Nemuru after Gerry left the company for unknown reasons.
                    They officially gained their company name "UFO Soft" in 1986, about a year after Campanella reached massive succesive with audiences.
                    I haven't really researched what happend to UFO Soft after their latest hit, Cyber Owls, came out, but this is about UFO 50, not UFO Soft!
                    I want to thank the archivists on the UFO 50 Recovery Team for 
                    releasing this game to the public, sharing to us all of these interesting titles! 
                    Now click on a cartridge below and discover the history behind these games!
                </p>
            </div>
            <Carts/>
        </>
    )
}