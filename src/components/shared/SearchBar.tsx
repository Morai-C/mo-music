import React from "react";

const SearchBar = () => {
	return (
		<form className="search d-none d-md-block py-1 mb-2">
			{/* <i className="fas fa-magnifying-glass"></i> */}
			<input
				//className="form-control"
				type="text"
				placeholder="Search artists"
			/>
		</form>
	);
};

export default SearchBar;
