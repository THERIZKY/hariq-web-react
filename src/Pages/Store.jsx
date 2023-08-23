import { Helmet } from "react-helmet";
import Navbar from "../Component/Navbar";

const Store = () => {
	return (
		<div className="container">
			<Helmet>
				<title>Ranks Store || Hariq Mc</title>
			</Helmet>
			<Navbar />
			<div className="store-container">
				<div className="bigetron">
					<h1 className="animate__animated animate__bounce animate__infinite">
						Coming Soon...
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Store;
