import React from "react";
import UploadedImageObject from "../../interfaces/UploadedImageObject";
import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.scss";

const ImageList: React.FC<{ uploadedImages: Array<UploadedImageObject> }> = ({ uploadedImages }) => {
	return (
		<ul className="image-list">
			{
				uploadedImages.length > 0
					? (uploadedImages as Array<UploadedImageObject>).sort((a, b) => new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime()).map((imageObj, index) =>
						<li key={index}>
							<ImageListItem
								imageObj={imageObj} />
						</li>
					)
					: <h1 className="image-list__status"> Loading Images...</h1>
			}
		</ul>
	)
}

export default ImageList;