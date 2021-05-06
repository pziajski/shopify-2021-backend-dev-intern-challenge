import { writeFileSync, readFileSync } from "fs";
import UploadImagesObject from "../interfaces/UploadImageObject";

export const ReadFromJson = ( path: String ): Array<UploadImagesObject> => {
	let savedImages: Array<UploadImagesObject> = [];
	try {
		savedImages = JSON.parse(readFileSync(path as string, "utf8")) as Array<UploadImagesObject>;
	} catch(err) {
		console.log(`Error reading "${path}", it may not exist...`);
	}
	return savedImages;
}

export const WriteToJson = ( path: String, object: UploadImagesObject )  => {
	let savedImages: Array<UploadImagesObject> = [];
	try {
		savedImages = JSON.parse(readFileSync(path as string, "utf8")) as Array<UploadImagesObject>;
	} catch(err) {
		console.log(`Error reading "${path}", it may not exist...`);
		console.log(`"${path}" will be created...`);
	}
	savedImages.push(object);
	writeFileSync(path as string, JSON.stringify(savedImages));
}