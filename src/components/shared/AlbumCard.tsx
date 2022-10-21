import React from "react";

const AlbumCard: React.FC<{
	children: React.ReactElement;
	image?: string;
}> = ({ children, image }) => {
	return (
		<div className="album-card" style={{ backgroundImage: image }}>
			{children}
		</div>
	);
};

export default AlbumCard;
