import AlbumTable from "components/album/AlbumTable";
import SearchBar from "components/shared/SearchBar";
import AppLayout from "layouts/app.layout";
import React from "react";

const ViewAlbum = () => {
	return (
		<>
			<AppLayout>
				<div className="album-page">
					<div className="overlay"></div>
					<SearchBar />
					<section className="album-page-information d-flex flex-column flex-md-row mb-5">
						<div className="image-cover me-0 me-md-3"></div>
						<div className="written-contents d-flex flex-column justify-content-end">
							<p className="title text-primary">Tomorrow's tunes</p>
							<p className="mb-0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
								aliquam, purus sit amet <br /> luctus venenatis
							</p>
							<div className="mb-5">
								<span>64 songs -</span>
								<span>16hrs</span>
							</div>
							<div className="user-selection">
								<button className="play-all">
									<i className="fa-solid fa-circle-play text-secondary"></i>
									<a className="mx-2 mx-lg-3">Play All</a>
								</button>
								<div className="mx-lg-3 mx-2 d-inline-block">
									<button className="add-to-collection">
										<i className="fa-solid fa-file-audio  text-secondary"></i>
										<a className="mx-2 mx-lg-3">Add to Collection</a>
									</button>
								</div>
								<button className="like">
									<a>
										<i className="fa-solid fa-heart text-danger"></i>
									</a>
								</button>
							</div>
						</div>
					</section>

					<AlbumTable />
				</div>
			</AppLayout>
		</>
	);
};

export default ViewAlbum;
