package com.devsuperior.edu.backend.controllers;

import java.net.URI;
import java.util.List;

import com.devsuperior.edu.backend.dto.OrderDTO;
import com.devsuperior.edu.backend.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    private OrderService service;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() {

        List<OrderDTO> list = service.findAll();

        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO dto) {
        dto = service.insert(dto);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();

        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(path = "/{id}/delivered")
    public ResponseEntity<OrderDTO> setDelivered(@PathVariable(value = "id") Long id) {
        OrderDTO dto = service.setDelivered(id);

        return ResponseEntity.ok().body(dto);
    }

    @PutMapping(path = "/{id}/initNavigation")
    public ResponseEntity<OrderDTO> setInitNavigation(@PathVariable(value = "id") Long id) {
        OrderDTO dto = service.setInitNavigation(id);

        return ResponseEntity.ok().body(dto);
    }


    @PutMapping(path = "/{id}/cancel")
    public ResponseEntity<OrderDTO> setCancel(@PathVariable(value = "id") Long id) {
        OrderDTO dto = service.setCancel(id);

        return ResponseEntity.ok().body(dto);
    }
}
