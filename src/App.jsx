// Importing Library
import "animate.css";
// import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

// React things
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import My Css
import "./App.css";

// Importing Component
import Home from "./Pages/Home";
import Perks from "./Pages/Perks";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/store" element={<Perks />} />
				{/* <Route path="/store" element={<Store />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
