import React from "react";
import UploadedImageObject from "../../interfaces/UploadedImageObject";
import "./ImageListItem.scss";

const ImageListItem: React.FC<{ imageObj: UploadedImageObject }> = ({ imageObj }) => {
	return (
		<div className="image-list-item">
			<img className="image-list-item__image" src={imageObj.imageBase64 as string} alt={imageObj.title as string}/>
		</div>
	)
}

export default ImageListItem;