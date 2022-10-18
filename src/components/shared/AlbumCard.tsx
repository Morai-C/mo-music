import React from "react";

const AlbumCard: React.FC<{
	children: React.ReactElement;
}> = ({ children }) => {
	return <div className="album-card">{children}</div>;
};

export default AlbumCard;
