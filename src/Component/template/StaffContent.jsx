import { Link } from "react-router-dom";
import CardStaff from "../Atom/CardStaff";

const StaffContent = ({ children }) => {
	return <>{children}</>;
};

const Header = ({ onButtonClick }) => {
	// console.log(onButtonClick);
	return (
		<>
			<div className="staff-header">
				<div className="heading">
					<h1>
						<span className="text-blue">Staff</span>{" "}
						<span className="text-yellow">Roaster</span>
					</h1>
				</div>
				<div className="staff-text">
					Mau Lihat Sosok Sosok Yang Sudah Membangun Dan Berkontribusi
					Dalam proses pembangunan Server Minecraft Dan Website Hariq?
				</div>
				<div className="buttonScroll">
					<button onClick={onButtonClick}>Klik Disini</button>
				</div>
			</div>
		</>
	);
};

const Body = () => {
	return (
		<>
			<div className="staff-body">
				<div className="body-content">
					<div className="owner">
						<div className="heading owner">Owner</div>
						<div className="container-staff-card">
							<CardStaff
								image="https://mc-heads.net/avatar/FaiqGamingYT"
								name="TH3M1S"
								role="Owner"
								kelas={"owner"}
							/>
							<CardStaff
								image="https://mc-heads.net/avatar/Frosty01GM"
								name="Frosty01GM "
								role="Owner"
								kelas={"owner"}
							/>
							<CardStaff
								image="https://mc-heads.net/avatar/GamerzKreed"
								name="GamerZ_INDOnesia"
								role="Owner"
								kelas={"owner"}
							/>
						</div>
					</div>
					<div className="developer">
						<div className="heading developer">Developer</div>
						<div className="container-staff-card">
							<CardStaff
								image="https://mc-heads.net/avatar/Pikikk"
								name="Pikikk"
								role="Developer"
								kelas={"developer"}
							/>
						</div>
					</div>
					<div className="web-developer">
						<div className="heading web-developer">
							Web Developer
						</div>
						<div className="container-staff-card">
							<CardStaff
								image="https://mc-heads.net/avatar/rizkygaming1004"
								name="Rizhora"
								role="Web Dev"
								kelas={"web-developer"}
							/>
						</div>
					</div>
					<div className="helper">
						<div className="heading helper">Helper</div>
						<div className="container-staff-card">
							<CardStaff
								image="https://mc-heads.net/avatar/rizkygaming1004"
								name="rizkygaming1004"
								role="Helper"
								kelas={"helper"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Footer = () => {
	return (
		<>
			<ul>
				<li>
					<Link to="#">Store</Link>
				</li>
			</ul>
		</>
	);
};

StaffContent.Header = Header;
StaffContent.Body = Body;
StaffContent.Footer = Footer;

export default StaffContent;
