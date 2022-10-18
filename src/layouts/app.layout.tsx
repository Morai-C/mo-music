import FooterComp from "components/shared/FooterComp";
import HeaderComp from "components/shared/HeaderComp";
import SideNav from "components/shared/SideNav";
import React, { ReactElement } from "react";

const AppLayout: React.FC<{ children: ReactElement }> = ({ children }) => {
	return (
		<>
			<div className="app">
				<HeaderComp />
				<div className="app-wrapper">
					<SideNav />
					<main className="app-children bg-success">{children}</main>
				</div>
				<FooterComp />
			</div>
		</>
	);
};

export default AppLayout;
