package com.devsuperior.edu.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.edu.backend.dto.ProductDTO;
import com.devsuperior.edu.backend.entities.Product;
import com.devsuperior.edu.backend.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {

        List<Product> list = repository.findAllByOrderByNameAsc();

        return list.stream().map(x -> x == null ? new ProductDTO() : new ProductDTO(x)).collect(Collectors.toList());

    }

}
