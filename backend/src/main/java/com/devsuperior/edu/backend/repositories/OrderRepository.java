package com.devsuperior.edu.backend.repositories;

import com.devsuperior.edu.backend.entities.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
