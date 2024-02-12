import Forecast from './components/Forecast'
import Search from './components/Search'

import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
  const {
    forecast,
    options,
    term,
    setTerm,
    setCity,
    onOptionSelect,
    onSubmit,
    onInputChange,
    setForecast,
  } = useForecast()

  return (
    <main
      className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-t from-zinc-50 via-sky-400 to-orange-400 
   "
    >
      {forecast ? (
        <Forecast
          data={forecast}
          setForecast={setForecast}
          setCity={setCity}
          setTerm={setTerm}
        />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
