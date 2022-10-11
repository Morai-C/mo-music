import AppLayout from "layouts/app.layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Music App</title>
				<meta name="description" content="Generated by create next app" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<AppLayout>
				<div>
					<p>Hello</p>
				</div>
			</AppLayout>
		</>
	);
};

export default Home;
