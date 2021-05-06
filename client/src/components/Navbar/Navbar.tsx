import React from 'react';
import "./Navbar.scss";

const Navbar: React.FC<{ submitUpload: any }> = ({ submitUpload }) => {
	return (
		<nav className="navbar">
			<div>
				<h1 className="navbar__title">Image Uploader</h1>
			</div>
			<form className="navbar__upload">
				<label htmlFor="upload-input" className="navbar__upload-button">Upload</label>
				<input id="upload-input" className="navbar__upload-input" type="file" multiple={true} accept=".jpg,.jpeg,.png" onChange={submitUpload} />
			</form>
		</nav>
	)
}

export default Navbar;