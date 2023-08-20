const Navbar = () => {
	return (
		<nav>
			<div className="nav-container">
				<div className="logo">
					<img src="/img/h-logo_1.png" alt="logo" />
				</div>
				<div className="nav-button">
					<a href="/">Home</a>
					<a href="/store">Store</a>
					<a href="/perks">Perks</a>
					<a href="/rules">Rules</a>
					<a href="/staffs">Staffs</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
