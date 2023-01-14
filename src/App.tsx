import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";

const App = () => {
  const {
    term,
    options,
    forecast,
    handleChange,
    handleSubmit,
    setCity,
    setForecast,
  } = useForecast();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-500  to-gray-300 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} setForecast={setForecast} />
      ) : (
        <Search
          term={term}
          options={options}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setCity={setCity}
        />
      )}
    </div>
  );
};

export default App;
