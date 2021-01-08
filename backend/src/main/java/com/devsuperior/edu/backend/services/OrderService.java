package com.devsuperior.edu.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.edu.backend.dto.OrderDTO;
import com.devsuperior.edu.backend.entities.Order;
import com.devsuperior.edu.backend.repositories.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {

        List<Order> list = repository.findOrdersPendingWithProducts();

        return list.stream().map(x -> x == null ? new OrderDTO() : new OrderDTO(x)).collect(Collectors.toList());

    }

}
