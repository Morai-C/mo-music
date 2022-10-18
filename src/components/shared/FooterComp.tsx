import React from "react";

const FooterComp = () => {
	return (
		<footer className="d-none">
			<div className="footer-grid container">
				<div className="track-information d-flex align-items-center ">
					<div className="track-image me-2"></div>
					<div className="title-and-author d-flex flex-column">
						<span>Seasons in</span>
						<span>James</span>
					</div>
				</div>
				<div className="controls-and-duration d-flex flex-grow-1 flex-column justify-content-center">
					<div className="play-controls me-auto ms-auto pt-3 ">
						<i className="fa-solid fa-shuffle d-none d-md-block"></i>
						<i className="fa-solid fa-backward-step"></i>
						<i className="fa-solid fa-circle-play text-secondary"></i>
						<i className="fa-solid fa-forward-step"></i>
						<i className="fa-solid fa-repeat d-none d-md-block "></i>
					</div>
					<div className="music-timer d-none d-md-flex justify-content-center align-items-center ">
						<input
							type="range"
							min={1}
							max={100}
							//className="slider"
							id="myRange"
						/>
					</div>
				</div>
				<div className="volume-control d-none d-md-flex align-items-center">
					<i className="fa-solid fa-volume-high me-3"></i>
					<div className="volume-control-outer">
						<div className="volume-control-inner"></div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterComp;
