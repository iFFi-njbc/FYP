package com.FYP.AIA.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.FYP.AIA.model.Warehouse;
import com.FYP.AIA.service.WarehouseService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/warehouses")
public class WarehouseController {
    private static final String HttpStatus = null;
	@Autowired
    private WarehouseService warehouseService;
    
    @GetMapping
    public List<Warehouse> getAllWarehouses() {
        return warehouseService.getAllWarehouses();
    }
    
    @GetMapping("/{id}")
    public Warehouse getWarehouseById(@PathVariable Long id) throws Exception {
        return warehouseService.getWarehouseById(id);
    }
    
    @PostMapping
    public Warehouse addWarehouse(@Valid @RequestBody Warehouse warehouse) {
        return warehouseService.addWarehouse(warehouse);
    }
    
    @PutMapping("/{id}")
    public Warehouse updateWarehouse(@PathVariable Long id, @Valid @RequestBody Warehouse warehouse) throws Exception {
        return warehouseService.updateWarehouse(id, warehouse);
    }
    
    @DeleteMapping("/{id}")
    public void deleteWarehouse(@PathVariable Long id) throws Exception {
        warehouseService.deleteWarehouse(id);
    }
}
