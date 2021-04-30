import React from "react";
import "./ImageList.scss";

const ImageList: React.FC<{ uploadedImages: Array<File> }> = ({ uploadedImages }) => {
	return (
		<ul className="image-list">
			{
				(uploadedImages as Array<File>).map((image, index) => 
					<li key={index}>
						<img className="image-list__image" src={URL.createObjectURL(image)} alt={image.name}/>
					</li>
				)
			}
		</ul>
	)
}

export default ImageList;