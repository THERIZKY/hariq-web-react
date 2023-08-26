import { useEffect } from "react";
import RulesContent from "../Component/template/RulesContent";

import Navbar from "../Component/Navbar";
const Rules = () => {
	useEffect(() => {
		document.title = "Hariq Rules || Hariq MC";
		const MetaDataDesc = document.querySelector('meta[name="description"]');

		MetaDataDesc.setAttribute(
			"content",
			"Rules And Terms In Hariq Mc Is All Here",
		);
	}, []);

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="header-rules animate__animated animate__fadeInDown">
					<i className="fa-solid fa-triangle-exclamation fa-2xl"></i>
					<h1>Rules!</h1>
					<i className="fa-solid fa-triangle-exclamation fa-2xl"></i>
				</div>
				<div className="rules-container animate__animated animate__fadeInUp">
					<RulesContent />
				</div>
			</div>
		</>
	);
};

export default Rules;
