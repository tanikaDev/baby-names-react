import babyNamesData from "./babyNamesData.json"

function SearchBar( { state }) {
	const [names, setNames] = state; 

	function searchName(event) {
		let search = event.target.value;
		let listNames = [];

		names.map((name) => {
			search.toLowerCase();
			let currentName = name.name.toLowerCase();
			if (!currentName.includes(search)){
				return null
			}
			return listNames.push(name);
		})

		if (search === "") {
			setNames(babyNamesData);
		} else {
			setNames(listNames);
		}
	}
    return (
        <>
        <input type="text" className="search-bar col-5" placeholder="search" onChange={searchName}></input>
        </>
    );
}
 
export default SearchBar;