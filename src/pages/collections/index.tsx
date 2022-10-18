import AppLayout from "layouts/app.layout";
import React from "react";

const MyCollections = () => {
	return (
		<>
			<AppLayout>
				<div className="collections-page">
					<form className="search d-none d-md-block py-1 mb-2">
						{/* <i className="fas fa-magnifying-glass"></i> */}
						<input
							//className="form-control"
							type="text"
							placeholder="Search artists"
						/>
					</form>
					<section className="collections-page-content d-flex mb-3">
						<div>
							<a>My collection</a>
						</div>
						<div>
							<a>Likes</a>
						</div>
					</section>

					<section className="collections-page-grid">
						<div className="collection-card">
							<p>collection card</p>
						</div>
					</section>
				</div>
			</AppLayout>
		</>
	);
};

export default MyCollections;
