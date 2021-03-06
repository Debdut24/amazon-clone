import React from 'react';
import '../styles/checkoutProduct.css';
import { useStateValue } from '../StateProvider.js';

function CheckoutProduct({id,image,title,price,rating}) {
	const [{basket},dispatch] = useStateValue();

	const removeFromBusket = () =>{
		console.log(id);
		dispatch({
			type:'REMOVE_FROM_BASKET',
			id: id,
		})
	}
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" className="checkoutProduct_image" />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">
					{title}
				</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(rating)
					.fill()
					.map((_, i)=>(
						<p>⭐</p>
					))}
				</div>
				<button onClick={removeFromBusket}>Remove from Basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct;