import { customStyles } from "components/shared/tableStyle";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface DataRow {
	id: number;
	image: string;
	title: string;
	artist: string;
	album: string;
	timestamp: string;
}

const data = [
	{
		id: 1,
		image: "Beetlejuice",
		title: "Let me love you",
		artist: "Krisx",
		album: "Single",
		timestamp: "4:17",
	},
	{
		id: 2,
		image: "Beetlejuice",
		title: "Watin man go do",
		artist: "Burna",
		album: "African Giant",
		timestamp: "2:30",
	},
];

const AlbumTable = () => {
	const columns: TableColumn<DataRow>[] = [
		{
			name: "",
			selector: (row) => row.title,
			cell: (row) => {
				return (
					<div className="album d-flex align-items-center">
						<div className="album-image d-flex align-items-center">
							<img src="/images/currently-played.png" alt="" />
							<i className="fa-regular ms-4 fa-heart d-none d-lg-block text-light"></i>
						</div>
					</div>
				);
			},
			style: {
				//backgroundColor: "red",
			},
			minWidth: "20%",
		},
		{
			name: "",
			selector: (row) => row.album,
			cell: (row) => {
				return (
					<div className="album-song d-flex flex-column flex-lg-row justify-content-lg-between">
						<div className="title-and-artist  d-flex flex-column align-items-lg-center">
							<p className=" mb-0">
								{" "}
								{row.title} ~ {row.artist}{" "}
							</p>
						</div>
						<div className="album-name text-lg-center">
							<p className="mb-0">{row.album}</p>
						</div>
					</div>
				);
			},
			style: {
				//backgroundColor: "green",
			},
			minWidth: "55%",
		},

		{
			name: "",
			selector: (row) => row.timestamp,
			cell: (row) => {
				return (
					<div className="album-time-stamp d-flex flex-column-reverse align-items-end align-items-lg-center flex-lg-row justify-content-between">
						<p className="mb-0">{row.timestamp}</p>
						<i className="fa-solid fa-ellipsis-vertical text-secondary"></i>
					</div>
				);
			},
			style: {
				//backgroundColor: "yellow",
			},
			minWidth: "25%",
		},
	];

	const rows: DataRow[] = data.map((album) => ({
		id: album.id,
		image: album.image,
		title: album.title,
		artist: album.artist,
		album: album.album,
		timestamp: album.timestamp,
	}));

	return (
		<DataTable data={rows} customStyles={customStyles} columns={columns} />
	);
};

export default AlbumTable;
