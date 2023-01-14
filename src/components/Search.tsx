import { ChangeEvent } from "react";
import { optionCityType } from "../types";

type Props = {
  term: string;
  options: [];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  setCity: React.Dispatch<
    React.SetStateAction<optionCityType | null | undefined>
  >;
};

const Search = ({
  term,
  options,
  handleChange,
  handleSubmit,
  setCity,
}: Props): JSX.Element => {
  return (
    <div>
      <section>
        <h1>Weather App</h1>
        <p>Enter a place</p>
        <div>
          <input type="text" value={term} onChange={handleChange} />
          <ul>
            {options.length > 1 &&
              options.map((optionCity: optionCityType, index: number) => (
                <li key={index}>
                  <button onClick={() => setCity(optionCity)}>
                    {optionCity.name} {optionCity.country}
                  </button>
                </li>
              ))}
          </ul>
          <button onClick={handleSubmit}>Search</button>
        </div>
      </section>
    </div>
  );
};

export default Search;
