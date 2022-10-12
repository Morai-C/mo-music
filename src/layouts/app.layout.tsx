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
					<main className="app-children container bg-info">{children}</main>
				</div>
				<p className="bg-success">footerComp</p>
			</div>
		</>
	);
};

export default AppLayout;
