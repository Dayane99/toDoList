import Input from "../../common/Input/Input"

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <Input
        width="300px"
        type="text" value={search}
        onChange={(e) => setSearch(e.target.value)}
        contentPH="Buscar..."
      />
    </div>
  )
}

export default Search 