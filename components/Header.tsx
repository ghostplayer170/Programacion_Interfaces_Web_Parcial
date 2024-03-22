import { FunctionComponent } from "preact";

const Header: FunctionComponent = () => {
    return(
        <>
            <div class="layout">
                <div class="header">
                    <a href="/wordcsr">Client Side</a>
                    <a href="/wordssr">Server Side</a>
                </div>
                <h1>My Dictionary</h1>
            </div>
        </>
    )
}

export default Header;