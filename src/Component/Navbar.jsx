import { useState } from "react";

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
					<a href="/">Home</a>
					<a href="/store">Store</a>
					<a href="/rules">Rules</a>
					<a href="/staffs">Staffs</a>
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
