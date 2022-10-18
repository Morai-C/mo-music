import SearchBar from "components/shared/SearchBar";
import AppLayout from "layouts/app.layout";
import React from "react";

const ViewAlbum = () => {
	return (
		<>
			<AppLayout>
				<div className="album-page">
					<SearchBar />
					<section className="album-page-information d-flex flex-column flex-lg-row">
						<div className="image-cover me-0 me-lg-3">
							<p>yo this a cover</p>
						</div>
						<div className="written-contents d-flex flex-column justify-content-end">
							<p>Tomorrow's Tunes</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
								aliquam, purus sit amet <br /> luctus venenatis
							</p>
							<div>
								<span>64 songs -</span>
								<span>16hrs</span>
							</div>
							<div>
								<a>Play All</a>
								<a>Add to Collection</a>
								<a>
									<i className="fa-solid fa-heart text-danger"></i>
								</a>
							</div>
						</div>
					</section>
				</div>
			</AppLayout>
		</>
	);
};

export default ViewAlbum;
