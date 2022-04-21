
const Select = ({options = [], onSelect, }) => {

    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

    return (
        <select onChange={handleSelect}>
          {options.map((el) => <option key={el.id} value={el.value}>{el.text}</option>)}
        </select>
    )
    
}

export default Select