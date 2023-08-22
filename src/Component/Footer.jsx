const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-container">
					<div className="kiri">
						<div className="logo">
							<img src="/img/hariqabout.png" />
						</div>
						<div className="copyright">
							<p>Copyright © 2023 Hariq.</p>
							<p>All rights reserved</p>
						</div>
						<div className="link">
							<a
								href="https://discord.hariq.eu.org/"
								target="_blank"
							>
								<i className="fa-brands fa-discord" />
							</a>
							<a href="#" target="_blank">
								<i className="fa-brands fa-youtube" />
							</a>
						</div>
					</div>
					<div className="tengah">
						<div className="tengah-kiri">
							<h3>Usefull Links</h3>
							<ul>
								<li>
									<a href="/store">Store</a>
								</li>
								<li>
									<a href="/perks">Perks</a>
								</li>
								<li>
									<a href="#">Contact Us</a>
								</li>
							</ul>
						</div>
						<div className="tengah-kanan">
							<h3>Support</h3>
							<ul>
								<li>
									<a
										href="https://discord.hariq.eu.org/"
										target="_blank"
									>
										Help Center
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="kanan">
						<h3>More Updates Soon</h3>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
