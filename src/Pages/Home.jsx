import Swal from "sweetalert2";

// Import Component
import Navbar from "../Component/Navbar";

const Home = () => {
	const copyText = () => {
		const teksToCopy = "play.hariq.eu.org";

		const textarea = document.createElement("textarea");
		textarea.value = teksToCopy;

		document.body.appendChild(textarea);

		textarea.select();
		document.execCommand("copy");

		document.body.removeChild(textarea);

		Swal.fire({
			icon: "success",
			title: "Coppied IP to clipboard",
			text: "play.hariq.eu.org",
			showClass: {
				popup: "animate__animated animate__bounceInUp",
			},
			hideClass: {
				popup: "animate__animated animate__bounceOut animate__faster",
			},
		});
	};
	return (
		<>
			<Navbar />
			<div className="container">
				{/* Main */}
				<div className="main-content">
					<section id="first" className="section-container">
						{/* Efek Snow */}
						<div className="snow">
							<div />
						</div>
						<div className="content">
							<div className="header animate__animated animate__backInDown">
								{/* <span>HARIQ</span> */}
								<img src="/img/hariqmc.png" alt="biglogo" />
							</div>
							<div className="main animate__animated animate__bounceIn animate__delay-1s">
								<p>
									Come join us and embark on an adventure in
									the mysterious world within our Minecraft
									server. Join us now and invite your friends
									to join us too!
								</p>
							</div>
							<div className="buttonCopy animate__animated animate__fadeInUp animate__delay-1s">
								<button
									id="copyLink"
									onClick={() => {
										copyText();
									}}
								>
									Play Now
								</button>
							</div>
						</div>
						<img
							src="/img/bg-3.jpg"
							className="image-cover"
							alt=""
						/>
					</section>
					<section id="second" className="section-container ">
						<div className="content about">
							<div className="header">
								<h1 data-aos="zoom-in-down">About</h1>
								<img
									src="/img/hariqabout.png"
									data-aos="zoom-in"
									alt="biglogo"
								/>
							</div>
							<div className="main" data-aos="zoom-in-up">
								HariqMC is a server established by Faiq &amp;
								Fathar in 2022 and is an intermediate-level
								Minecraft server based in Indonesia. It is also
								the best Slimefun Survival Minecraft server in
								Indonesian!
							</div>
						</div>
						<img
							src="/img/bg-8.png"
							className="image-cover"
							alt=""
						/>
					</section>
				</div>
				{/* Footer */}
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
			</div>
		</>
	);
};
export default Home;
