import React from "react";
import UploadedImageObject from "../../interfaces/UploadedImageObject";
import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.scss";

const ImageList: React.FC<{ uploadedImages: Array<UploadedImageObject> }> = ({ uploadedImages }) => {
	return (
		<ul className="image-list">
			{
				(uploadedImages as Array<UploadedImageObject>).map((imageObj, index) =>
					<li key={index}>
						<ImageListItem
							imageObj={imageObj} />
					</li>
				)
			}
		</ul>
	)
}

export default ImageList;