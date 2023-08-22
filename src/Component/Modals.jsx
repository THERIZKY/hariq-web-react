import React from "react";

const Modal = ({ isOpen, onClose, selectedCardData }) => {
	if (!isOpen) return null;

	return (
		<div className={`modal ${isOpen ? "show" : ""}`}>
			<div className="modal-container">
				<div className="modal-header">
					<h1>{selectedCardData.rank}</h1>
				</div>
				<div className="modal-content">
					<div className="kiri">Kiri Buat Keterangan Prefix Dll</div>
					<div className="tengah">Tengah Buat Permission</div>
					<div className="kanan">Sisa Permission Sama harga</div>
				</div>
				<div className="modal-footer">
					<button onClick={onClose}>Kembali</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
