import Link from "next/link";
import React from "react";
import { LIGHT_COLOR } from "../../utils/Theme";
import LogoIcon from "../icons/LogoIcon";
import { bottomNavList, topNavList } from "./navList";

const SideNav = () => {
	return (
		<aside className="app-sidenav">
			<nav>
				<ul className="nav align-items-center flex-column">
					<div className="logo py-1 mb-2">
						<LogoIcon bg={LIGHT_COLOR} />
					</div>

					<div className="pt-4">
						<div className="top">
							{topNavList.map((nav, i) => (
								<li className="nav-item py-2" key={i}>
									<Link href={nav.link}>
										<a>{nav.icon}</a>
									</Link>
								</li>
							))}
						</div>

						<div className="bottom">
							{bottomNavList.map((nav, i) => (
								<li className="nav-item py-2" key={i}>
									<Link href={nav.link}>
										<a>{nav.icon}</a>
									</Link>
								</li>
							))}
						</div>
					</div>
				</ul>
			</nav>
		</aside>
	);
};

export default SideNav;
