package com.devsuperior.edu.backend.repositories;

import java.util.List;

import com.devsuperior.edu.backend.entities.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long>{

    List<Product> findAllByOrderByNameAsc();
    
}
