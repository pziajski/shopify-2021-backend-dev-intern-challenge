import express from "express";
const router = express.Router();
import UploadedImageObject from "../interfaces/UploadImageObject";
import { ReadFromJson, WriteToJson } from "../functions/FileReader";

const imageFileLocation = "./assets/images.json";

router
	.route("/")
	.get((_req, res) => {
		const images: Array<UploadedImageObject> = ReadFromJson(imageFileLocation);
		res.status(200).json({ images });
	})
	.post((req, res) => {
		const newImages = JSON.parse(req.body.images) as Array<UploadedImageObject>;
		newImages.forEach(imageObj => WriteToJson(imageFileLocation, imageObj))
		res.status(200).json({ newImages });
	})

export default router;