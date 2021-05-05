import SearchBar from "./SearchBar"
function Header( { state }) {
	const [names, setNames] = state
	return (
		<header className="row justify-content-center ">
			<h1 className="page-header col-12">Baby Name Finder</h1>
			<SearchBar state={[names,setNames]} />
		</header>
	);
}

export default Header;