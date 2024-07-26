import AlbumCard from "components/shared/AlbumCard";
import ChartsCard from "components/shared/ChartsCard";
import SearchBar from "components/shared/SearchBar";
import SimpleSlider from "components/slide/SimpleSlider";
import type { NextPage } from "next";
import Head from "next/head";
import { Avatar, AvatarGroup } from "rsuite";
import { ChartData } from "utils/Data";
import AppLayout from "../layouts/app.layout";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Music App</title>
				<meta name="description" content="Generated by create next app" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<AppLayout>
				<div className="app-home py-2 py-lg-0">
					<SearchBar />
					<section className="app-home-top pt-4">
						<div className="curated-playlist d-flex flex-column justify-content-between">
							<p className="curated-text">curated palylist</p>
							<div className="curated-playlist-type">
								<p className="title">R & B Hits</p>
								<p className="songs">
									All mine, Lie again, Petty call me everyday, <br /> Out of
									time, No love, Bad habit, <br /> and so much more
								</p>
							</div>

							<div className="curated-playlist-stats d-flex align-items-center ">
								<AvatarGroup stack>
									<Avatar
										className="avatar-stack"
										size="xs"
										circle
										src="/images/1.png"
									/>
									<Avatar
										className="avatar-stack"
										size="xs"
										circle
										src="/images/2.png"
									/>
									<Avatar
										className="avatar-stack"
										size="xs"
										circle
										src="/images/3.png"
									/>
									<Avatar
										className="avatar-stack"
										size="xs"
										circle
										src="/images/4.png"
									/>
									<Avatar
										className="avatar-stack"
										size="xs"
										circle
										src="/images/5.png"
									/>
								</AvatarGroup>

								<i className="fa-solid fa-heart mx-3"></i>

								<small>33k Likes</small>
							</div>
						</div>
						<div className="top-charts">
							<p className="top-charts-title mb-1">Top Charts</p>
							{ChartData.map((item, i) => (
								<div key={i}>
									<ChartsCard link="/album">
										<div className="chart-card-inner d-flex justify-content-between">
											<div className="inner-left d-flex flex-column flex-lg-row align-items-lg-center">
												<div className="image me-lg-2">
													<img src={item.img} alt="" />
												</div>
												<div className="description">
													<p className="mb-1 chart-title">{item.title}</p>
													<span className="chart-author">{item.author}</span>
													<p className="mb-0 chart-duration ">
														{item.duration}
													</p>
												</div>
											</div>
											<div className="inner-right d-flex justify-content-center align-items-center">
												<i className="fa-regular fa-heart text-secondary"></i>
											</div>
										</div>
									</ChartsCard>
								</div>
							))}
						</div>
					</section>
					<section className="app-home-new-releases">
						<p>New Releases</p>
						<div className="grid-layout">
							{/* <SimpleSlider>
								<div className="d-flex gap-5">
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
								</div>
							</SimpleSlider> */}

							<SimpleSlider />
						</div>
					</section>
				</div>
			</AppLayout>
		</>
	);
};

export default Home;
