import Input from "../../atoms/Input";

export default function Hero({
  search,
  setSearch,
  handleSearchClick,
}: {
  search: string,
  setSearch: (value: string) => void,
  handleSearchClick: () => void,
}) {

  return (
    <div className="text-bg-light p-4">
      <h1>Search for GitHub users</h1>
      <h4 className="text-secondary">Explore their awesome projects</h4>
      <div>
        <Input
          type="text"
          label="Type the user name"
          helperText="Ex. ChristianBarreto"
          actionButton="Search"
          value={search}
          setValue={setSearch}
          handleActionClick={handleSearchClick}
        />
      </div>
    </div>
  )
}