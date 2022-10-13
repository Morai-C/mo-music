import React from "react";

const FooterComp = () => {
	return (
		<footer className="bg-info">
			<div className="footer-grid container">
				<div className="track-information d-flex align-items-center ">
					<div className="track-image me-2"></div>
					<div className="title-and-author d-flex flex-column">
						<span>Seasons in</span>
						<span>James</span>
					</div>
				</div>
				<div className="controls-and-duration d-flex flex-column justify-content-center">
					<div className="play-controls me-auto ms-auto">
						<i className="fa-solid fa-shuffle fa-2x"></i>
						<i className="fa-solid fa-backward-step fa-2x"></i>
						<i className="fa-solid fa-circle-play text-secondary fa-2x"></i>
						<i className="fa-solid fa-forward-step fa-2x"></i>
						<i className="fa-solid fa-repeat fa-2x"></i>
					</div>
				</div>
				<div className="volume-control d-flex align-items-center">
					<i className="fa-solid fa-volume-high me-3 fa-2x"></i>
					<div className="volume-control-outer">
						<div className="volume-control-inner"></div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterComp;
