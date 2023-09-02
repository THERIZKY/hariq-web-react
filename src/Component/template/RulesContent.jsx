const RulesContent = () => {
	const rules = [
		{
			1: "Tidak Mengganggu Player Lain Ketika Bermain, Contoh: Ketika Player Lain Sedang Bermain Dengan Nyaman Dan Kamu Menggangu Nya Kamu Akan Mendapatkan Warn 1x",
		},
		{
			2: "Tidak Memanfaatkan Bug Dan Glict, Contoh: Jika Ada Bug/Glict Yang Bisa Abuse Kamu Harus Cepat Lapor Dan Tidak MemanfaatkanNya",
		},
		{
			3: "Dilarang Menggunakan Cheat Seperti X-ray, HackClient, Jika Kamu Menggunakan Cheat/X-ray Permainan Menjadi Tidak Asik Kamu Bisa Terkena Ban",
		},
		{
			4: "Tidak Mengclaim Lahan Player Lain",
		},
		{
			5: "Dilarang Menjual Semua Barang Menggunakan Uang Irl, Contoh: Kamu Menjual Diamond Block 1 12K Irl Itu Membuat Server Rugi Dan Orang Yang Membeli Nya Juga Rugi ( Ban )",
		},
		{
			6: `Tidak Abuse Jika Ada Bug Sigap Lapor`,
		},
		{
			7: "Tidak Menggunakan Redstone Berlebihan",
		},
		{
			8: "Tidak Auto Mining/Fishing",
		},
		{
			9: "Toxic Sewajarnya Dan Tidak Flood",
		},
		{
			10: "Tidak Spam",
		},
		{
			11: "Tidak Mencuri Barang Orang Lain Atau Team",
		},
		{
			12: "Dilarang mengemis barang/uang/ Berlebihan",
		},
		{
			13: "Tidak Menggunakan Auto Click",
		},
		{
			14: " Dilarang Membully Player Lain",
		},
		{
			15: "Dilarang Meledakan TNT Melebihi 12 TNT",
		},
		{
			16: "Dilarang ADV, Contoh: Kamu Dilarang Mengirim Ip Server Lain Atau Nama Server Lain",
		},
		{
			17: "Tidak Menggunakan ALT Wajib 1 Akun Utama, Contoh: Jika Kamu Menggunakan Alt Dari Salah Satu Akun Tersebut Akan Terkena Ban",
		},
		{
			18: "Tidak Menipu Orang Lain Dan Scam",
		},
		{
			19: "Dilarang Menjual Barang Ilegal Atau Menyimpan Nya",
		},
		{
			20: "Dilarang Membuat Server Lag",
		},
		{
			21: "Player Dilarang Meminta Rank Dan Item Kepada Owner",
		},
		{
			22: "Player Dilarang Asal - Asalan Menggunakan /pwarp",
		},
		{
			23: "Gunakan Channel Dicord Sesuai Tempatnya atau gak kena warn!",
		},
	];

	return (
		<>
			<div className="rules-header">
				<img src="/img/animek.png" alt="Test" />
			</div>
			<div className="rules-content">
				<h1>
					Hariq MC <span>18/02/2023 10:13</span>
				</h1>

				<div className="rules">
					{rules.map((item, index) => {
						// console.log(item[index + 1]);
						return (
							<div key={index}>
								<h3>
									<b>{index + 1}</b>. {item[index + 1]}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default RulesContent;
