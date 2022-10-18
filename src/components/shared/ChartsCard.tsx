import React from "react";

const ChartsCard: React.FC<{
	children: React.ReactElement;
}> = ({ children }) => {
	return <div className="chart-card">{children}</div>;
};

export default ChartsCard;
