export default function AppHeader(props){

    return(
        <header>
            <h1>{props.title}</h1>
            <nav>
              <ul>
                <li>
                  <a
                    className="github-button"
                    href="https://github.com/rubenmarcus/guiareact.org"
                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star rubenmarcus/guiareact.org on GitHub"
                  >
                    Star
                  </a>
                </li>
              </ul>
            </nav>
          </header>
    )
}