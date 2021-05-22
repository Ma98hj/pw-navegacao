const Menu = props => {
    return (<aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home {props.name}</Link>
                </li>
                <li>
                    <Link to="/conteudo01/123">Conteúdo 01</Link>
                </li>
                <li>
                    <Link to="/conteudo02">Conteúdo 02</Link>
                </li>
                <li>
                    <Link to="/conteudo03">Conteúdo 03</Link>
                </li>
                <li>
                    <Link to="/conteudo04">Conteúdo 04</Link>
                </li>
            </ul>
        </nav>
    </aside>)
}
export default Menu