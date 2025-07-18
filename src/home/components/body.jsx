import Gallery from "./components/gallery.jsx"

export default function Body() {
    return (
        <>
            <div className="body-container">
                <Gallery/>
                <img src="./assets/images/play_forever.png"/>
            </div>
            <div className="text">
                <h1>Welcome to the 50 game guides!</h1>
                <p>Need help understanding Barbuta? Want to get better at House Party? Done with Combatants?
                Want to know the history and secrets behind any of the fifty UFO Soft games? Then this is the website for you!</p>
                <p>This site's intent is to document all the findings from each of the fifty games from UFO 50 and put them all in an easily
                accesible pages to fit your needs. If your trying to get all the cherries, need help beating a game, want to know more about the lore surrounding UFO Soft, 
                or see what else UFO 50 has to offer, this site will try to help! Each game page includes a guide to understanding the game and how to beat it, 
                history behind the game, music in the game, and other secrets about the game you might not even know about!</p>
                <p>With that being said, I want to personally thank Mossmouth for creating such a well-crafted collection of games and hope that you find as much enjoyment out of this website as I 
                have making it! Now go to the top, hit the GAMES tab, and explore!</p>
            </div>
        </>
    )
}