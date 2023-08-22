import { useState } from "react";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import Footer from "../Component/Footer";
import Modal from "../Component/Modals";

const Perks = () => {
	// Use State
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCardData, setSelectedCardData] = useState({});

	const Ranks = [
		{
			rank: "VIP",
			price: 50,
			bgColor: "green",
			color: "white",
			animation: "animate__animated animate__backInLeft",
		},
		{
			rank: "VIP+",
			price: 70,
			bgColor: "green",
			color: "white",
			animation: "animate__animated animate__backInLeft",
		},
		{
			rank: "MVP",
			price: 100,
			bgColor: "#1450A3",
			color: "white",
			animation: "animate__animated animate__backInUp",
		},
		{
			rank: "MVP+",
			price: 125,
			bgColor: "#1450A3",
			color: "white",
			animation: "animate__animated animate__backInRight",
		},
		{
			rank: "MVP++",
			price: 180,
			bgColor: "#F94C10",
			color: "white",
			animation: "animate__animated animate__backInRight",
		},
		{
			rank: "Hariq",
			price: 300,
			bgColor: "purple",
			color: "white",
			animation: "animate__animated animate__backInDown",
		},
	];

	// Handler Buka Modal
	const openModal = (data) => {
		setSelectedCardData(data);
		setIsModalOpen(true);
	};

	// Handler Tutup Modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="perks-container">
					<div className="container-header">
						<div className="header">
							<h1>Tata Cara Pembelian</h1>
							<ul>
								<li>
									Untuk Pembelian Ranks Dilakukan Di Discord
								</li>
								<li>
									Ketika Kalian Klik Tombol beli rank Maka
									Akan langsung redirect ke link discord kita
								</li>
								<li>
									Ketika sudah masuk, verifikasi akun kalian,
									setelah itu buat sebuah ticket baru, Pilih
									pada pilihan Top Up Hariq Coins
								</li>
								<li>
									Setelah Itu tunggu Admin akan merespon
									ticket tersebut
								</li>
								<li>
									Setelah Admin merespon nanti kalian sebutkan
									saja nominal Yang ingin kalian beli
								</li>
								<li>
									Untuk harga Hariq Coins adalah Rp.1000 per 1
									Coins (Minimal pembelian 10 Coins){" "}
									<b>*Belum Termasuk Pajak</b>
								</li>
							</ul>
						</div>
					</div>
					<div className="container-cards">
						{Ranks.map((item, index) => (
							<Card
								key={index}
								rank={item.rank}
								price={item.price}
								bgColor={item.bgColor}
								color={item.color}
								animation={item.animation}
								openModal={openModal}
							/>
						))}
					</div>

					<div className="modals-container">
						<Modal
							isOpen={isModalOpen}
							onClose={closeModal}
							selectedCardData={selectedCardData}
						/>
					</div>
				</div>
				{/* <Footer /> */}
			</div>
		</>
	);
};

export default Perks;
