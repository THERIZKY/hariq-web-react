import StaffContent from "../Component/template/StaffContent.jsx";
import Navbar from "../Component/Element/Navbar.jsx";
const Staff = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="staff-container">
					<StaffContent />
				</div>
			</div>
		</>
	);
};

export default Staff;
