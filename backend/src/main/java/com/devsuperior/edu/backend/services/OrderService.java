package com.devsuperior.edu.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.edu.backend.dto.OrderDTO;
import com.devsuperior.edu.backend.dto.ProductDTO;
import com.devsuperior.edu.backend.entities.Order;
import com.devsuperior.edu.backend.entities.enums.OrderStatus;
import com.devsuperior.edu.backend.repositories.OrderRepository;
import com.devsuperior.edu.backend.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {

        List<Order> list = repository.findOrdersPendingWithProducts();

        return list.stream().map(x -> x == null ? new OrderDTO() : new OrderDTO(x)).collect(Collectors.toList());

    }

    @Transactional
    public OrderDTO insert(OrderDTO dto) {
        Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), dto.getMoment(),OrderStatus.PENDING);

        for(ProductDTO p : dto.getProducts())
            order.getProducts().add(productRepository.getOne(p.getId()));        

        order = repository.save(order);
        return new OrderDTO(order);
    }

}
