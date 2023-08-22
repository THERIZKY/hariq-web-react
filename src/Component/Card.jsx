import { useState } from "react";

// Component
import Modal from "./Modals";

const Card = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// // Handler Buka Modal
	// const openModal = () => {
	// 	setIsModalOpen(true);
	// };

	// // Handler Tutup Modal
	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };

	return (
		<>
			{/* Cards */}
			<div
				className={`card ${props.animation ? props.animation : ""}`}
				style={{
					backgroundColor: props.bgColor ? props.bgColor : "",
					color: props.color ? props.color : "black",
				}}
			>
				<div className="card-container">
					<div className="card-header">
						<h1>{props.rank}</h1>
					</div>
					<div className="card-body">
						<p>
							Rank {props.rank} Dapat Dibeli Dengan Harga{" "}
							{props.price} Hariq Coins
						</p>
					</div>
					<div className="card-footer">
						<button
							className="info"
							onClick={() =>
								props.openModal({
									rank: props.rank,
									price: props.price,
								})
							}
						>
							Info
						</button>
						<button>
							<a href="https://discord.hariq.eu.org/">
								Beli Ranks
							</a>
						</button>
					</div>
				</div>
			</div>

			{/* Modals */}
			{/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
		</>
	);
};

export default Card;
