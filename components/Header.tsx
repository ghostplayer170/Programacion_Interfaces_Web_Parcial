import { FunctionComponent } from "preact";
import { head } from "../types.ts";

type data = {
  id: number;
};

const Header: FunctionComponent<data> = (props) => {
  const id = props.id;
  return (
    <>
      <div class="layout">
        <div class="header">
          <a href="/wordcsr">Client Side</a>
          <a href="/wordssr">Server Side</a>
        </div>
        <h1>My Dictionary</h1>
        {id === 1 && (
          <div>
            <p>Welcome to my dictionary!</p>
          </div>
        )}
        {id === 2 && (
          <div>
            <h2>Not implemented</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
