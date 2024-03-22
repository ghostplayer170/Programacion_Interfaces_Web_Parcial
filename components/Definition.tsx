import { FunctionComponent } from "preact";
import { definitions } from "../types.ts";

const Definition: FunctionComponent<definitions[]> = (props) => {
  const arrDefinitions = props;
  return (
    <>
      {arrDefinitions.length > 0 && (
        <ul>
          {arrDefinitions.map((elem) => {
            <li>
              <p>
                <span>
                  <strong>{elem.definition}</strong>
                </span>
                <span>{elem.example}</span>
              </p>
            </li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Definition;
