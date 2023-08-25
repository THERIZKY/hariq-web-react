import RulesContent from "../Component/template/RulesContent";

import Navbar from "../Component/Navbar";
const Rules = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="header-rules animate__animated animate__fadeInDown">
					<i class="fa-solid fa-triangle-exclamation fa-2xl"></i>
					<h1>Rules!</h1>
					<i class="fa-solid fa-triangle-exclamation fa-2xl"></i>
				</div>
				<div className="rules-container animate__animated animate__fadeInUp">
					<RulesContent />
				</div>
			</div>
		</>
	);
};

export default Rules;
