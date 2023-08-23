// import React from "react";

const Modal = ({ isOpen, onClose, selectedCardData }) => {
	console.log(selectedCardData);
	return (
		<div className={`modal ${isOpen ? "show " : ""}`}>
			<div className="modal-container animate__animated animate__jackInTheBox animate__fast">
				<div className="modal-header">
					<h1>{selectedCardData.rank}</h1>

					<h3>Apa yang kalian dapatkan?</h3>
				</div>
				<div className="modal-content">
					<div className="kiri">
						Prefix Yang Akan Kalian Dapatkan Ketika Membeli Rank{" "}
						<b>{selectedCardData.rank}</b> Adalah <br />
						<b>
							<span style={{ color: selectedCardData.color }}>
								[{selectedCardData.rank}]
							</span>{" "}
							nama_kalian
						</b>
					</div>
					<div className="tengah">
						<ul>
							<li>
								Warp Limit : {selectedCardData.permission.warp}
							</li>
							<li>
								Home Limit : {selectedCardData.permission.home}
							</li>
							<li>
								Block Limit :{" "}
								{selectedCardData.permission.block}
							</li>
							<li>
								Claim Limit :{" "}
								{selectedCardData.permission.claim}
							</li>
							<li>Kit : {selectedCardData.permission.kit}</li>
						</ul>
					</div>
					<div className="kanan">
						<ul>
							<li>
								<p>Semua Permission Di Rank Sebelumnya</p>
							</li>
							<li>{selectedCardData.permission.fly}</li>
							<li>{selectedCardData.permission.list}</li>
							<li>{selectedCardData.permission.hat}</li>
							<li>{selectedCardData.permission.nick}</li>
							<li>{selectedCardData.permission.suicide}</li>
							<li>{selectedCardData.permission.craft}</li>
							<li>{selectedCardData.permission.pweather}</li>
							<li>{selectedCardData.permission.feed}</li>
							<li>{selectedCardData.permission.ender}</li>
							<li>{selectedCardData.permission.time}</li>
							<li>{selectedCardData.permission.pweather}</li>
							<li>{selectedCardData.permission.ender}</li>
							<li>{selectedCardData.permission.anvil}</li>
							<li>{selectedCardData.permission.loom}</li>
							<li>{selectedCardData.permission.heal}</li>
							<li>{selectedCardData.permission.grindstone}</li>
							<li>{selectedCardData.permission.repair}</li>
							<li>
								{selectedCardData.permission.cartographytable}
							</li>
							<li>{selectedCardData.permission.tp}</li>
							<li>{selectedCardData.permission.smithingtable}</li>
							<li>{selectedCardData.permission.tphere}</li>
							<li>{selectedCardData.permission.god}</li>
							<li>{selectedCardData.permission.itemRename}</li>
							<li>{selectedCardData.permission.itemLore}</li>
							<li>{selectedCardData.permission.vanish}</li>
						</ul>
					</div>
				</div>
				<div className="modal-footer">
					<button onClick={onClose}>Kembali</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
