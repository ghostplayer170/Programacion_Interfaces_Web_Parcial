import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { definitions } from "../types.ts";
import Definition from "../components/Definition.tsx";

const Search: FunctionComponent = () => {
  const [word, setWord] = useState<string>("");
  const [results, setResults] = useState<definitions[]>([]);
  const API_URL = Deno.env.get("API_URL") ||
    "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

  const fetchWord = async (wordAux: string) => {
    try {
      const response = await fetch(`${API_URL}${wordAux}`);
      if (response.status !== 200) {
        throw new Response("Error status!==200", { status: 500 });
      }
      const data = await response.json();
      const dataTransform = data.map((elem) => {
        return (
          {
            definition: elem[0].meanings.map((elem) => {
              elem.definitions.map((elem) => {
                return elem.definition;
              });
            }),
            example: elem[0].meanings.map((elem) => {
              elem.definitions.map((elem) => {
                return elem.definition;
              });
            }),
          }
        );
      });
      setResults(dataTransform);
    } catch (error) {
      throw new Response("Error fetching word", { status: 500 });
    }
  };

  return (
    <>
      <div class="container">
        <div class="wordForm">
          <input
            type="text"
            placeholder="Type a word"
            onInput={(e) => setWord(e.currentTarget.value)}
          />
          <button onClick={() => fetchWord(word)}>Search</button>
        </div>
        {word === "" && <p class="error">Please enter a word</p>}
        {word !== "" &&
          (
            <div class="wordDefinitions">
              <h3>{word}</h3>
              <ul>
                {results.map((elem) => {
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
            </div>
          )}
      </div>
    </>
  );
};

export default Search;
