import React, { useState } from "react";
import ImageList from "../../components/ImageList/ImageList";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.scss";

const HomePage: React.FC = () => {
	const [ uploadedImages, setUploadedImages ] = useState<Array<File> | []>([]);

	const submitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files as FileList;
		const tempArr = new Array<File>();

		for (let i = 0; i < files.length; i++) {
			tempArr.push(files.item(i) as File);
		};

		setUploadedImages([...uploadedImages, ...tempArr]);
	}

	return (
		<div className="home-page">
			<Navbar submitUpload={submitUpload} />
			<ImageList uploadedImages={uploadedImages} />
		</div>
	)
}

export default HomePage;