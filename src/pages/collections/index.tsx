import SearchBar from "components/shared/SearchBar";
import AppLayout from "layouts/app.layout";
import React from "react";

const MyCollections = () => {
	return (
		<>
			<AppLayout>
				<div className="collections-page">
					<SearchBar />
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
