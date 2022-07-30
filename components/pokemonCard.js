const PokeCard = ({ id, name, image, type }) => {
	const style = `flex flex-col items-center m-4 px-4 py-4 rounded-2xl shadow-lg ${type}`;
	return (
		<div className={style}>
			<div className="tag">
				<small>#{id}</small>
			</div>
			<img
				className="h-[12rem] w-[12rem] object-contain"
				src={image}
				alt={name}
			/>
			<div className="detail-wrapper text-center">
				<p className="font-bold">{name}</p>
				<p>{type}</p>
			</div>
		</div>
	);
};

export default PokeCard;
