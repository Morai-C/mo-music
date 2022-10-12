import React from "react";
import { LIGHT_COLOR } from "../../utils/Theme";
import LogoIcon from "../icons/LogoIcon";

const HeaderComp = () => {
	return (
		<header className="Header d-none bg-danger">
			<div className="logo">
				<LogoIcon bg={LIGHT_COLOR} />
			</div>
		</header>
	);
};

export default HeaderComp;
