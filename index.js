const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div class="navbar-logo">
                    <div>
                         <img src="./assets/react-logo.png"/>
                    </div>
                    <div>
                        <span>ReactFacts</span>
                    </div>
                </div>
                 <div className="navbar-desc">
                    React Course - Prject 1
                 </div>
            </nav>
        </header>
    )
}
const Main = () => {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
    </main>
    )
}
function Page () {
    return (
        <div className="page-container">
            <Header />
            <Main />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))