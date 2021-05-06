import React from "react";
import "./HoverDiv.scss";

const HoverDiv: React.FC = () => {
	return (
		<div className="hover-div">
			<div className="hover-div__container">
				<div className="hover-div__animation"></div>
				<h1 className="hover-div__title">Uploading</h1>
			</div>
		</div>
	)
}

export default HoverDiv;