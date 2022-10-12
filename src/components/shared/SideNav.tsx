import Link from "next/link";
import React from "react";
import { LIGHT_COLOR } from "../../utils/Theme";
import LogoIcon from "../icons/LogoIcon";
import { bottomNavList, topNavList } from "./navList";

const SideNav = () => {
	return (
		<aside className="app-sidenav bg-danger py-3">
			<nav>
				<ul className="nav align-items-center flex-column">
					<div className="logo py-3">
						<LogoIcon bg={LIGHT_COLOR} />
					</div>

					<div className="top">
						{topNavList.map((nav, i) => (
							<li className="nav-item py-3" key={i}>
								<Link href={nav.link}>{nav.icon}</Link>
							</li>
						))}
					</div>

					<div className="bottom">
						{bottomNavList.map((nav, i) => (
							<li className="nav-item py-3" key={i}>
								<Link href={nav.link}>{nav.icon}</Link>
							</li>
						))}
					</div>
				</ul>
			</nav>
		</aside>
	);
};

export default SideNav;