import React, { useState } from "react";
import ImageList from "../../components/ImageList/ImageList";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.scss";
import recursiveFileReader from "../../functions/RecursiveFileReader";

const HomePage: React.FC = () => {
	const [ uploadedImages, setUploadedImages ] = useState<Array<File> | []>([]);

	const submitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files as FileList;
		const uploadedList: Array<UploadedImageObject> = [];
		(recursiveFileReader(uploadedList, files) as Promise<Array<UploadedImageObject>>)
			.then(arr => {
				console.log(arr);
				setUploadedImages([...uploadedImages, ...arr]);
				axios
					.post("http://localhost:8000/upload", { images: JSON.stringify(arr) })
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					})
			});

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