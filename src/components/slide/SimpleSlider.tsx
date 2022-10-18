import AlbumCard from "components/shared/AlbumCard";
import React from "react";
import Slider from "react-slick";

const SimpleSlider: React.FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 2000,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
	};

	return (
		<div className="slide py-1 row row-cols-1 g-4">
			<Slider {...settings}>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
				<AlbumCard>
					<p>this is an album card</p>
				</AlbumCard>
			</Slider>
		</div>
	);
};

export default SimpleSlider;
