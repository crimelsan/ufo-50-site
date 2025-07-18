export default function Navbar() {
    return (
        <>
            <nav className="home-navbar">
                <a className="navbar-item" href="/about.html">
                    <img src="./assets/images/about.png"/>
                </a>
                <a className="navbar-item" href="/">
                    <img src="./assets/images/home.png"/>
                </a>
                <a className="navbar-item" href="/games.html">
                    <img src="./assets/images/games.png"/>
                </a>
            </nav>
        </>
    )
}