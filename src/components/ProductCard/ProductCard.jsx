import React from 'react'
import './productcard.css'

import {FaStar} from 'react-icons/fa'

const ProductCard = ({image, productName, price, discount}) => {
  return (
							<div class="thumb-wrapper">
								{/* <span class="wish-icon"><HiOutlineHeart/></span> */}
								<div class="img-box">
									<img src={image} class="img-fluid" alt={[productName]}/>
								</div>
								<div class="thumb-content">
									<h4>{productName}</h4>
									<p class="item-price"><strike>₹{price}</strike> <span>₹{(price - (price*discount/100)).toFixed(0)}</span></p>
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStar style={{color: "#ffc000"}}/></li>
											<li class="list-inline-item"><FaStar style={{color: "#ffc000"}}/></li>
											<li class="list-inline-item"><FaStar style={{color: "#ffc000"}}/></li>
											<li class="list-inline-item"><FaStar style={{color: "#ffc000"}}/></li>
											<li class="list-inline-item"><FaStar style={{color: "#ffc000"}}/></li>
										</ul>
									</div>
									<a href="#" class="btn">Add to Cart</a>
								</div>						
							</div>
						
 
  )
}

export default ProductCard