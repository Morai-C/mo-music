import Link from "next/link";
import React from "react";

const ChartsCard: React.FC<{
	children: React.ReactElement;
	link: string;
}> = ({ children, link }) => {
	return (
		<div className="chart-card">
			<Link id="link" className="link" href={link}>
				<a>{children}</a>
			</Link>
		</div>
	);
};

export default ChartsCard;
