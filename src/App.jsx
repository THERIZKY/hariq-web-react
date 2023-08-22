// Importing Library
import "animate.css";
// import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

// React things
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// Import My Css
import "./App.css";

// Importing Component
import Home from "./Pages/Home";
import Perks from "./Pages/Perks";
import Rules from "./Pages/Rules";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Perks />} />
					<Route path="/rules" element={<Rules />} />
				</Routes>
			</Router>
			<Analytics />
		</>
	);
}

export default App;
