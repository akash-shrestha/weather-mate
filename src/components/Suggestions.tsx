import { optionType } from './../types/index'

type componentProps = {
  options: optionType[]
  onSelect: (option: optionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps): JSX.Element => {
  return (
    <ul className="absolute top-9 bg-white ml-5 rounded-b-md">
      {options?.map((option: optionType) => (
        <li key={option.name + '-' + option.lat}>
          <button
            className="text-left text-sm w-full hover:bg-zinc-400 hover:text-white px-10 py-1 cursor-pointer"
            onClick={() => onSelect(option)}
          >
            {option.name}, {option.country}
          </button>
        </li>
      )) || []}
    </ul>
  )
}

export default Suggestions
