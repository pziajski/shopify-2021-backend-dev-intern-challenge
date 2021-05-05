import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageList from "../../components/ImageList/ImageList";
import Navbar from "../../components/Navbar/Navbar";
import UploadedImageObject from "../../interfaces/UploadedImageObject";
import "./HomePage.scss";
import recursiveFileReader from "../../functions/RecursiveFileReader";

const HomePage: React.FC = () => {
	const [ uploadedImages, setUploadedImages ] = useState<Array<UploadedImageObject> | []>([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/upload")
			.then(res => {
				const images = res.data.images as Array<UploadedImageObject>;
				setUploadedImages(images || []);
			})
			.catch(err => {
				console.log(err);
			})
	}, []);

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

	}

	return (
		<div className="home-page">
			<Navbar submitUpload={submitUpload} />
			<ImageList uploadedImages={uploadedImages} />
		</div>
	)
}

export default HomePage;