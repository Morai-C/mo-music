import AlbumCard from "components/shared/AlbumCard";
import React from "react";
import Slider from "react-slick";
import { NewReleases } from "utils/Data";

const SimpleSlider: React.FC = () => {
	const settings = {
		dots: false,
		infinite: false,
		//speed: 2000,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		//cssEase: "linear",
		arrows: false,
		//variableWidth: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
		],
	};

	return (
		<div className="slide-comp py-1">
			<Slider {...settings}>
				{NewReleases.map((items, i) => (
					<div className=" pe-5" key={i}>
						<AlbumCard image={`url(${items.img})`}>
							<p>this is an album card</p>
						</AlbumCard>
					</div>
				))}
				{/* <div className=" pe-5">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div>
				<div className=" px-3">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div>
				<div className=" px-3">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div>
				<div className=" px-3">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div>
				<div className=" px-3">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div>
				<div className=" px-3">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div>
				<div className=" px-3">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div>
				<div className=" ps-3">
					<AlbumCard>
						<p>this is an album card</p>
					</AlbumCard>
				</div> */}
			</Slider>
		</div>
	);
};

export default SimpleSlider;
