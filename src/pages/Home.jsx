import React from 'react'
import { Link } from 'react-router-dom'
import FiltersBtn from '../FiltersBtn'
import HotelCard from '../HotelCard'
import { useSelector } from 'react-redux'

function Home() {

	const { items } = useSelector(({ items }) => {
		return {
			items
		}
	})

	return (
		<div className="wrapper">
			<div className="main">
				<div className="main__title">Москва</div>
				<div className="main__cards">
					{
						items && items.map((obj) => (
							< HotelCard
								key={obj.hotel.uuid}
								name={obj.hotel.name}
								address={obj.hotel.address}
								imageURL={obj.hotel.imageURL}
								distance={obj.distance}
								price={obj.rub}
							/>
						))
					}
					<Link to="/filters">
						<FiltersBtn>
							<svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.04785 12.4193H2.01987C1.36902 12.4193 0.841405 12.9469 0.841405 13.5977C0.841405 14.2486 1.36902 14.7762 2.01987 14.7762H5.04785V12.4193Z"
									fill="white" />
								<path
									d="M23.8414 13.5977C23.8414 12.9468 23.3138 12.4192 22.6629 12.4192H9.1379V14.7762H22.6629C23.3138 14.7762 23.8414 14.2485 23.8414 13.5977Z"
									fill="white" />
								<rect x="-1.05178" width="5.12688" height="5.12688" rx="2.56344"
									transform="matrix(-0.701187 -0.712977 -0.701187 0.712977 9.86385 12.8479)" stroke="white"
									strokeWidth="1.5" />
								<path
									d="M23.8414 21.7126C23.8414 21.0617 23.3138 20.5341 22.6629 20.5341H15.273V22.8911H22.6629C23.3138 22.8911 23.8414 22.3634 23.8414 21.7126Z"
									fill="white" />
								<path
									d="M11.0661 20.5342H2.02014C1.36929 20.5342 0.841675 21.0618 0.841675 21.7127C0.841675 22.3635 1.36929 22.8911 2.02014 22.8911H11.0661V20.5342Z"
									fill="white" />
								<rect x="-1.05178" width="5.12688" height="5.12688" rx="2.56344"
									transform="matrix(-0.701187 -0.712977 -0.701187 0.712977 16.0042 20.9628)" stroke="white"
									strokeWidth="1.5" />
								<path
									d="M23.8414 5.48267C23.8414 4.83182 23.3138 4.3042 22.6629 4.3042H19.1293V6.66114H22.6629C23.3138 6.66114 23.8414 6.13352 23.8414 5.48267Z"
									fill="white" />
								<path
									d="M14.864 4.30435H2.01986C1.36901 4.30435 0.841393 4.83197 0.841393 5.48282C0.841393 6.13367 1.36901 6.66129 2.01986 6.66129H14.864V4.30435Z"
									fill="white" />
								<rect x="-1.05178" width="5.12688" height="5.12688" rx="2.56344"
									transform="matrix(-0.701187 -0.712977 -0.701187 0.712977 19.825 4.73292)" stroke="white"
									strokeWidth="1.5" />
							</svg>
						</FiltersBtn>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
