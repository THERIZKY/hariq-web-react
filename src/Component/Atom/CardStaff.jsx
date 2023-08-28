const CardStaff = ({ image, name, role, kelas }) => {
	return (
		<div className="staff-card">
			<div className="staff-card-container">
				<div className="staff-card-header">
					<img src={image} alt="Kepala" />
				</div>
				<div className={`staff-card-body ${kelas}`}>
					<div className="staff-card-name">
						<span className={kelas}>{role}</span> {name}
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardStaff;
