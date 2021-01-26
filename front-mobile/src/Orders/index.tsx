import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
    }, []);

    orders.sort(
        function (a, b) {
	
            return (a.moment < b.moment) ? 1 : ((b.moment < a.moment) ? -1 : 0);
         
        }
    );

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {
                    orders.map(order =>
                        <OrderCard
                            key={order.id}
                            order={order}
                        />
                    )
                }
            </ScrollView>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});
