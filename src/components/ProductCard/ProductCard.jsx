import React from 'react'
import './productcard.css'

import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

const ProductCard = ({ image, productName, price, discount, productId }) => {
	return (
		<motion.div whileHover={{scale: 1.05}} className="thumb-wrapper">
			{/* <span className="wish-icon"><HiOutlineHeart/></span> */}
			<div className="img-box">
				<img src={image} className="img-fluid" alt={[productName]} />
			</div>
			<div className="thumb-content">
				<h4>{productName}</h4>
				<p className="item-price"><strike>₹{price}</strike> <span>₹{(price - (price * discount / 100)).toFixed(0)}</span></p>
				<div className="star-rating">
					<ul className="list-inline">
						<li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
						<li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
						<li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
						<li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
						<li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
					</ul>
				</div>
				<Link  to={`/product/${productId}`} className="btn">Buy Now</Link>
			</div>
		</motion.div>


	)
}

export default ProductCard