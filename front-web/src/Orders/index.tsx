import { toast } from 'react-toastify';
import React, { useEffect, useState } from "react";
import { fetchProducts, saveOrder } from "./api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import ProductsList from "./ProductsList";
import StepHeaders from "./StepHeaders";
import './styles.css';
import { OrderLocationData, Product } from "./types";
import { checkIsSelected } from "./helpers";

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))

    }, [])

     
    const handleSelectProduct = (product: Product) => {
    	const isAlreadySelected = checkIsSelected(selectedProducts, product); 
  	if (isAlreadySelected) {
    		const selected = selectedProducts.filter(item => item.id !== product.id);
    		setSelectedProducts(selected);
  	} else {
    		setSelectedProducts(previous => [...previous, product]);
  	}
    }

   const handleSubmit = () => {
  	const productsIds = selectedProducts.map(({ id }) => ({ id }));
  	const payload = {
    		...orderLocation!,
    	products: productsIds
  	}

  	saveOrder(payload).then((response) => {
    		toast.error(`Pedido enviado com sucesso! No ${response.data.id}`);
    		setSelectedProducts([]);
  	})
    	.catch(() => {
      		toast.warning('Erro ao enviar pedido');
    	})
   }	

    return (
	<>
        	<div className="orders-container">
            		<StepHeaders />
            		<ProductsList 
				products={products}
				onSelectProduct={handleSelectProduct}
				selectedProducts={selectedProducts}/>
            		<OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
	    		<OrderSummary 
				selectedProducts={selectedProducts}
				onSubmit={handleSubmit}/>
        	</div>
	</>
    )
}

export default Orders;
