import { writeFileSync, readFileSync } from "fs";
import UploadImagesObject from "../interfaces/UploadImageObject";

export const ReadFromJson = ( path: String ): Array<UploadImagesObject> => {
	const savedImages = JSON.parse(readFileSync(path as string, "utf8")) as Array<UploadImagesObject>;
	return savedImages;
}

export const WriteToJson = ( path: String, object: UploadImagesObject )  => {
	const savedImages = JSON.parse(readFileSync(path as string, "utf8")) as Array<UploadImagesObject>;
	savedImages.push(object);
	writeFileSync(path as string, JSON.stringify(savedImages));
}