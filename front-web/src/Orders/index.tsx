import React from "react";
import ProductsList from "./ProductsList";
import StepHeaders from "./StepHeaders";
import './styles.css';

function Orders() {
    
    return(
        <div className="orders-container">
            <StepHeaders />
            <ProductsList />
        </div>
    )
}

export default Orders;