import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Import Component
import Navbar from "../Component/Element/Navbar";
import MainContent from "../Component/template/MainContent";

const Home = () => {
	useEffect(() => {
		document.title = "HariqMC | Home";
	}, []);

	return (
		<>
			<Navbar />
			<div className="bg-slate-700">
				<div className="home-container">
					<MainContent />
				</div>
			</div>
		</>
	);
};
export default Home;
