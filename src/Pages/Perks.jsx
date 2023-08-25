import { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import StoreContent from "../Component/template/StoreContent";

const Perks = () => {
	useEffect(() => {
		document.title = "Hariq Store || Hariq MC";
	}, []);

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="perks-container">
					<StoreContent />
				</div>
			</div>
		</>
	);
};

export default Perks;
