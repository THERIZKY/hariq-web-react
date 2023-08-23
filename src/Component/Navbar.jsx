import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [isSidebarOn, setIsSidebarOn] = useState(false);

	const toggleMenu = () => {
		setIsActiveMenu(!isActiveMenu);
		setIsSidebarOn(!isSidebarOn);
	};

	return (
		<nav>
			<div className="nav-container">
				<div className="logo">
					<img src="/img/h-logo_1.png" alt="logo" />
				</div>
				<div className={`nav-button ${isSidebarOn ? "sidebarOn" : ""}`}>
					<Link to="/">Home</Link>
					<Link to="/store">Store</Link>
					<Link to="/rules">Rules</Link>
					<Link to="/staffs">Staffs</Link>
				</div>
				<div
					className={`menu-toggle ${isActiveMenu ? "active" : ""}`}
					onClick={() => toggleMenu()}
				>
					<div className="bar" />
					<div className="bar" />
					<div className="bar" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
