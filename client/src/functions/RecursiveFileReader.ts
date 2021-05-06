import UploadedImageObject from "../interfaces/UploadedImageObject";

const recursiveFileReader = (arr: Array<UploadedImageObject>, images: FileList, index = 0): Promise<Array<UploadedImageObject>> | void => {
	return new Promise((resolve, reject) => {
		const image = images.item(index) as File;
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onloadend = () => {
			arr.push({
				imageBase64: reader.result as String,
				upload_date: new Date(),
				title: image.name,
				owner: "User"
			});
			if (arr.length === images.length) {
				resolve(arr);
			} else {
				(recursiveFileReader(arr, images, arr.length) as Promise<Array<UploadedImageObject>>)
					.then(arr => resolve(arr))
			}
		}
	});
}

export default recursiveFileReader;