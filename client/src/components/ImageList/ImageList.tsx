import React from "react";
import UploadedImageObject from "../../interfaces/UploadedImageObject";
import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.scss";

const ImageList: React.FC<{ uploadedImages: Array<UploadedImageObject>, loadingState: boolean }> = ({ uploadedImages, loadingState }) => {
	return (
		<ul className="image-list">
			{
				loadingState
					?  <h1 className="image-list__status"> Loading Images...</h1>
					: uploadedImages.length === 0 
						? <h1 className="image-list__status">No images found. Time to Upload some!</h1>
						: (uploadedImages as Array<UploadedImageObject>).sort((a, b) => new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime()).map((imageObj, index) =>
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