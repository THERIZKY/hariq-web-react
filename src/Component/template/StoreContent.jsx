import { useState, useEffect } from "react";
import Card from "../Element/Card";
import Modal from "../Element/Modals";

const StoreContent = () => {
	// Use State
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCardData, setSelectedCardData] = useState({});

	const Ranks = [
		// VIP
		{
			// Information
			rank: "VIP",
			price: 50,
			permission: {
				warp: 8,
				home: 8,
				block: 20000,
				claim: 8,
				fly: "/fly (overworld)",
				list: "/list",
				hat: "/hat",
				nick: "colored /nick",
				suicide: "/suicide",
				craft: "/craft",
				pweather: "/pweather",
				kit: "VIP Kebawah",
			},

			// Styling
			bgColor: "green",
			color: "white",
			animation: "animate__animated animate__bounceIn",
		},

		// VIP+
		{
			// Information
			rank: "VIP+",
			price: 70,
			permission: {
				warp: 10,
				home: 10,
				block: 25000,
				claim: 10,
				feed: "/feed",
				craft: "/craft",
				time: "/ptime",
				ender: "/enderchest",
				kit: "VIP+ Kebawah",
			},

			// Styling
			bgColor: "green",
			color: "white",
			animation: "animate__animated animate__bounceIn",
		},

		// MVP
		{
			// Information
			rank: "MVP",
			price: 100,
			permission: {
				warp: 15,
				home: 15,
				block: 30000,
				claim: 15,
				loom: "/loom",
				anvil: "/anvil",
				kit: "MVP Kebawah",
			},

			// Styling
			bgColor: "#1450A3",
			color: "white",
			animation: "animate__animated animate__bounceIn",
		},

		// MVP+
		{
			// Information
			rank: "MVP+",
			price: 125,
			permission: {
				warp: 18,
				home: 18,
				block: 30000,
				claim: 18,
				heal: "/heal",
				grindstone: "/grindstone",
				stonecutter: "/stonecutter",
				repair: "/repair (armor, enchanted item)",
				kit: "MVP+ Kebawah",
			},
			// Styling
			bgColor: "#1450A3",
			color: "white",
			animation: "animate__animated animate__bounceIn",
		},

		// MVP++
		{
			// Information
			rank: "MVP++",
			price: 180,
			permission: {
				warp: 20,
				home: 20,
				block: 40000,
				claim: 20,
				tp: "/tp",
				feed: "/feed (Bypass cooldown)",
				heal: "/heal (Bypass cooldown)",
				cartographytable: "/cartographytable",
				repair: "/repair (armor, enchanted item, all)",
				kit: "MVP++ Kebawah",
			},

			// Styling
			bgColor: "#F94C10",
			color: "white",
			animation: "animate__animated animate__bounceIn",
		},

		// Hariq
		{
			// Information
			rank: "Hariq",
			price: 300,
			permission: {
				warp: 25,
				home: 25,
				block: 50000,
				claim: 25,
				tp: "/tp (Bypass Cooldown and /back, /tpa) & (Bypass Timer)",
				tphere: "/tphere",
				god: "/god",
				smithingtable: "/smithingtable",
				itemRename: "/itemrename",
				itemLore: "/itemLore",
				vanish: "/vanish",
			},

			// Styling
			bgColor: "purple",
			color: "white",
			animation: "animate__animated animate__bounceIn",
		},
	];

	// Handler Buka Tutup Modal
	const modalHandler = (data) => {
		setIsModalOpen(!isModalOpen);
		setSelectedCardData(data);
	};

	return (
		<>
			<div className="container-cards">
				{Ranks.map((item, index) => (
					<Card key={index} items={item} openModal={modalHandler} />
				))}
			</div>

			<div className="container-header" data-aos="fade-up">
				<div className="header ">
					<h1>Tata Cara Pembelian</h1>
					<ul>
						<li>Untuk Pembelian Ranks Dilakukan Di Discord</li>
						<li>
							Ketika Kalian Klik Tombol beli rank Maka Akan
							langsung redirect ke link discord kita
						</li>
						<li>
							Ketika sudah masuk, verifikasi akun kalian, setelah
							itu buat sebuah ticket baru, Pilih pada pilihan Top
							Up Hariq Coins
						</li>
						<li>
							Setelah Itu tunggu Admin akan merespon ticket
							tersebut
						</li>
						<li>
							Setelah Admin merespon nanti kalian sebutkan saja
							nominal Yang ingin kalian beli
						</li>
						<li>
							Untuk harga Hariq Coins adalah Rp.1000 per 1 Coins
							(Minimal pembelian 10 Coins){" "}
							<b>*Belum Termasuk Pajak</b>
						</li>
					</ul>
				</div>
			</div>

			<div className="modals-container">
				{isModalOpen && (
					<Modal
						isOpen={isModalOpen}
						onClose={modalHandler}
						selectedCardData={selectedCardData}
					/>
				)}
			</div>
		</>
	);
};

export default StoreContent;
