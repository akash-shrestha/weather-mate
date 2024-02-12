import { ChangeEvent } from 'react'

import Header from './Header'
import Suggestions from './Suggestions'

import { optionType } from './../types/index'

type Props = {
  term: string
  options: optionType[] | undefined
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
  <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
    <Header />

    <div className="relative flex mt-10 md:mt-4">
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-full border-2 border-white"
        onChange={onInputChange}
      />

      {options && Array.isArray(options) && options.length >= 1 && (
        <Suggestions options={options} onSelect={onOptionSelect} />
      )}

      <button
        className="ml-2 rounded-full border-2 border-zinc-200 hover:border-zinc-100 hover:text-zinc-200  text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        Search
      </button>
    </div>
  </section>
)

export default Search
