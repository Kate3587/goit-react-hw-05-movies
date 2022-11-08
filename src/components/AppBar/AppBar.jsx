const navItems = [
    { href: 'home', text: Home },
    {href: 'movies', text: Movies}
]

export const AppBar = () => {
    return (
        <header>
            <nav>
                {navItems.map(({ href, text }) => <link to={href} key={href}>{text}</link>)}
            </nav>
        </header>
    )
}