import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageList from "../../components/ImageList/ImageList";
import Navbar from "../../components/Navbar/Navbar";
import UploadedImageObject from "../../interfaces/UploadedImageObject";
import "./HomePage.scss";
import recursiveFileReader from "../../functions/RecursiveFileReader";
import HoverDiv from "../../components/HoverDiv/HoverDiv";
import { API_ENDPOINT } from "../../App";

const HomePage: React.FC = () => {
	const [uploadingState, setUploadingState] = useState(false);
	const [ uploadedImages, setUploadedImages ] = useState<Array<UploadedImageObject> | []>([]);
	useEffect(() => {
		axios
			.get(`${API_ENDPOINT}/upload`)
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
		setUploadingState(true);
		(recursiveFileReader(uploadedList, files) as Promise<Array<UploadedImageObject>>)
			.then(arr => {
				axios
					.post(`${API_ENDPOINT}/upload`, { images: JSON.stringify(arr) })
					.then(() => {
						setUploadedImages([...uploadedImages, ...arr]);
						setUploadingState(false);
					})
					.catch(err => {
						window.alert("Images exceed a max of 50mb.\nPlease try less files.")
						setUploadingState(false);
						console.log(err);
					})
			});

	}

	return (
		<div className="home-page">
			<Navbar submitUpload={submitUpload} />
			<ImageList uploadedImages={uploadedImages} />
			{
				uploadingState
					? <HoverDiv />
					: <></>
			}
		</div>
	)
}

export default HomePage;