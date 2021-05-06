import babyNamesData from "./babyNamesData.json"
import SelectSex from "./SelectSex"

function SearchBar( { state, clickEvent }) {
	const [mainList, setMainList] = state; 

	function searchName(event) {
		let search = event.target.value;
		let listNames = [];

		mainList.map((name) => {
			search.toLowerCase();
			let currentName = name.name.toLowerCase();
			if (!currentName.includes(search)){
				return null
			}
			return listNames.push(name);
		})

		if (search === "") {
			setMainList(babyNamesData);
		} else {
			setMainList(listNames);
		}
	}
    return (
			<div className="row align-items-center" >
				<input type="text" className="search-bar col-5 offset-3" placeholder="search" onChange={searchName}></input>
				<SelectSex clickEvent={clickEvent}/>
			</div>
    );
}
 
export default SearchBar;