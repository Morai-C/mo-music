import Link from "next/link";
import React, { useState } from "react";
import { LIGHT_COLOR } from "../../utils/Theme";
import LogoIcon from "../icons/LogoIcon";
import { bottomNavList, topNavList } from "./navList";

const HeaderComp = () => {
	const [searchBarMobileActive, setSearchBarMobileActive] = useState(false);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<header className="app-header d-md-none">
			<nav className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center">
					{hamburgerOpen ? (
						<i
							className="fa-solid fs-5 text-light fa-xmark"
							onClick={toggleHamburger}
						></i>
					) : (
						<i
							className="fa-solid fs-5 text-light fa-pause fa-rotate-90"
							onClick={toggleHamburger}
						></i>
					)}

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

			<div
				className={`container  ${
					hamburgerOpen ? "hamburger animate__bounceIn" : "d-none"
				}`}
			>
				<ul className="nav flex-column">
					{topNavList.map((nav, i) => (
						<li className="nav-item" key={i}>
							<Link href={nav.link}>
								<div>
									<a className="icon">{nav.icon}</a>
									<a>{nav.name}</a>
								</div>
							</Link>
						</li>
					))}

					{bottomNavList.map((nav, i) => (
						<li className="nav-item" key={i}>
							<Link href={nav.link}>
								<div>
									<a className="icon">{nav.icon}</a>
									<a>{nav.name}</a>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default HeaderComp;
