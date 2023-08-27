import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 35, // max tilt rotation (degrees)
	perspective: 1500, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 2000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: "Y", // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Card = ({ items, openModal }) => {
	return (
		<>
			{/* Cards */}
			<Tilt options={defaultOptions}>
				<div
					className={`card ${items.animation ? items.animation : ""}`}
					style={{
						backgroundColor: items.bgColor ? items.bgColor : "",
						color: items.color ? items.color : "black",
					}}
				>
					<div className="card-container">
						<div className="card-header">
							<h1>{items.rank}</h1>
						</div>
						<div className="card-body">
							<p>
								Rank {items.rank} Dapat Dibeli Dengan Harga{" "}
								{items.price} Hariq Coins
							</p>
						</div>
						<div className="card-footer">
							<button
								className="info"
								onClick={() =>
									openModal({
										rank: items.rank,
										price: items.price,
										color: items.bgColor,
										permission: items.permission,
									})
								}
							>
								Info
							</button>
							<button>
								<a href="https://discord.hariq.eu.org/">
									Buy Ranks
								</a>
							</button>
						</div>
					</div>
				</div>
			</Tilt>
		</>
	);
};

export default Card;
