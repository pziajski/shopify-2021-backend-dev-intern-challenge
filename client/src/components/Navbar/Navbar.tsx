import React from 'react';
import "./Navbar.scss";

const Navbar: React.FC<{ submitUpload: any }> = ({ submitUpload }) => {
	return (
		<nav className="navbar">
			<form className="navbar__upload">
				<label htmlFor="upload-input" className="navbar__upload-button">Upload</label>
				<input id="upload-input" className="navbar__upload-input" type="file" multiple={true} accept=".jpg,.jpeg,.png" onChange={submitUpload} />
			</form> 
			<form className="navbar__search">
				<input type="input" className="navbar__search-input" placeholder="Search" />
			</form>
			<form className="navbar__user">
				<div className="navbar__user-login">
					<a href="/">Login</a>
				</div>
				<div className="navbar__user-signup">
					<a href="/">Signup</a>
				</div>
				
			</form>
		</nav>
	)
}

export default Navbar;