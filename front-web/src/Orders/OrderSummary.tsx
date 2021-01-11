import { Product } from "./types";
import { formatPrice } from "./helpers";

type Props = {
	selectedProducts: Product[];
}


function OrderSummary ({ selectedProducts } : Props) {
	const totalPrice = selectedProducts.reduce((sum,item) => {
									return sum + item.price;
								}, 0);

	return(
		<div className="order-summary-container">
			<div className="order-summary-content">
				<div>
					<span className="amount-selected-container">
						<strong className="amount-selected">{selectedProducts.length}</strong>
						PEDIDO SELECIONADOS
					</span>
					<span className="order-summary-total">
						<strong>{formatPrice(totalPrice)} </strong>
						VALOR TOTAL
					</span>
				</div>
				<button className="order-summary-make-order">
					FAZER PEDIDO
				</button>
			</div>
		</div>						
	)

}

export default OrderSummary
