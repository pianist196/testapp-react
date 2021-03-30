import React from 'react'

function HotelCard({ name, address, imageURL, distance, price }) {
	return (
		<div className="main__card">
			<div className="main__card-img">
				<img src={imageURL} alt="" />
			</div>
			<div className="main__card-content">
				<div className="main__card-title">{name}</div>
				<div className="main__card-address">{address}</div>
				<div className="main__card-distance">{distance} км от центра</div>
				<div className="main__card-price">
					{price}
					<span>за ночь</span>
				</div>
			</div>
		</div>
	)
}

export default HotelCard
