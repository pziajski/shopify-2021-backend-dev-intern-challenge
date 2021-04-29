import React from "react";
import "./SearchImage.scss";

const SearchImage: React.FC = () => {
	const submitForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.files);
	}

	return (
		<div className="search-image">
			<form>
				<label htmlFor="upload-input" className="search-image__upload-button">Upload</label>
				<input id="upload-input" className="search-image__upload-input" type="file" name="files" multiple={true} accept=".jpg,.jpeg,.png" onChange={submitForm} />
			</form>
		</div>
	)
}

export default SearchImage;