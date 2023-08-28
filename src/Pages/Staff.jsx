import StaffContent from "../Component/template/StaffContent.jsx";
import Navbar from "../Component/Element/Navbar.jsx";
import { useEffect } from "react";
const handlerScroll = () => {
	window.scrollTo({
		top: 780,
		behavior: "smooth",
	});
};

const Staff = () => {
	useEffect(() => {
		document.title = "HariqMC | Staffs";
	}, []);

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="staff-container">
					<StaffContent>
						<StaffContent.Header onButtonClick={handlerScroll} />
						<StaffContent.Body></StaffContent.Body>
						{/* <StaffContent.Footer></StaffContent.Footer> */}
					</StaffContent>
				</div>
			</div>
		</>
	);
};

export default Staff;
