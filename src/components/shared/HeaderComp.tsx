import React, { useState } from "react";
import { LIGHT_COLOR } from "../../utils/Theme";
import LogoIcon from "../icons/LogoIcon";

const HeaderComp = () => {
	const [searchBarMobileActive, setSearchBarMobileActive] = useState(false);

	return (
		<header className="app-header d-md-none bg-danger">
			<nav className="d-flex container justify-content-between align-items-center">
				<div className="d-flex">
					<i className="fa-solid fs-5 text-light fa-pause fa-rotate-90"></i>
					<div className="logo ms-3">
						<LogoIcon bg={LIGHT_COLOR} />
					</div>
				</div>
				<div
					className={`search-bar ${
						searchBarMobileActive ? "search-bar-active" : ""
					}`}
				>
					<form>
						<i
							className={`fa-solid fa-magnifying-glass search-icon ${
								searchBarMobileActive ? "search-icon-active" : ""
							} `}
							onClick={() => setSearchBarMobileActive(true)}
						></i>
						<input
							type="text"
							className={`search-input ${
								searchBarMobileActive ? "search-input-active" : ""
							}`}
							onBlur={() => setSearchBarMobileActive(false)}
						/>
						<i
							className={`fa-solid fa-circle-xmark close-icon ${
								searchBarMobileActive ? "close-icon-active" : ""
							}`}
							onClick={() => setSearchBarMobileActive(false)}
						></i>

						<button className="search-submit-button" type="submit"></button>
					</form>
				</div>
			</nav>
		</header>
	);
};

export default HeaderComp;
